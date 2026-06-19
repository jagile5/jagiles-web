interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string; // Honeypot field
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const onRequestPost: PagesFunction<{ CONTACT_EMAIL: string }> = async (context) => {
  const { request, env } = context;

  // Parse JSON body
  let data: ContactFormData;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Honeypot check — if the hidden company field is filled, silently succeed
  if (data.company && data.company.trim() !== '') {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate required fields
  const { name, email, message } = data;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const contactEmail = env.CONTACT_EMAIL;
  if (!contactEmail) {
    console.error('CONTACT_EMAIL environment variable is not set');
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Send via MailChannels
  // No Authorization header — Domain Lockdown via DNS TXT record replaces the API key
  try {
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: contactEmail }] }],
        from: { email: 'noreply@jagiles.com', name },
        subject: `New contact form submission from ${name}`,
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailChannels error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to send message' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error sending email:', err);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};