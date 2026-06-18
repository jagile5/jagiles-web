// Project data for the Work section

export interface Project {
  title: string;
  client: string;
  category: string[];
  year: number;
  videoUrl: string;
  slug: string;
  description: string;
  location: string;
}

export const projects: Project[] = [
  {
    title: "CHFT NHS Trust",
    client: "Recruitment Video",
    category: ["Recruitment", "Healthcare"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/JiQkZmfhjOI",
    slug: "chft-nhs-trust",
    description: "A recruitment video showcasing career opportunities within the CHFT NHS Trust, highlighting staff experiences and workplace culture.",
    location: "Vancouver, BC",
  },
  {
    title: "Barnsley Council",
    client: "Recruitment Video",
    category: ["Recruitment", "Government"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/BGkUDztNgQA",
    slug: "barnsley-council-recruitment",
    description: "Recruitment campaign for Barnsley Council, featuring diverse roles and the impact of public service employment.",
    location: "Vancouver, BC",
  },
  {
    title: "Billingley Christmas Tree Farm",
    client: "Promotional Video",
    category: ["Promotional", "Holiday"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/NY7NORUOcEs",
    slug: "billingley-christmas-tree-farm",
    description: "Promotional film for Billingley Christmas Tree Farm, capturing the festive atmosphere and family-friendly activities.",
    location: "Vancouver, BC",
  },
  {
    title: "Miata Drift Day",
    client: "Passion Project - Drone",
    category: ["Drone", "Passion Project"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/zw5FbGgPiXA",
    slug: "miata-drift-day",
    description: "A passion project featuring drone footage of a Miata drift day, highlighting automotive culture and precision driving.",
    location: "Vancouver, BC",
  },
  {
    title: "Barnsley Council",
    client: "PRomotional Video (Instagram)",
    category: ["Promotional", "Social Media"],
    year: 2024,
    videoUrl: "https://www.instagram.com/reel/CfrVUIHDZBe/",
    slug: "barnsley-council-instagram",
    description: "Short-form promotional content for Barnsley Council tailored for Instagram, highlighting community initiatives.",
    location: "Vancouver, BC",
  },
];
