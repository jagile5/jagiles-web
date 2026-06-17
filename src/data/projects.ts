// Project data for the Work section
// Each project defines its display information and video preview URL.

export interface Project {
  title: string;
  category: string[]; // e.g. ["Drone", "Commercial"]
  year: number;
  videoUrl: string; // Direct link to MP4 or hosted video file
  slug: string; // URL-friendly identifier for the project page (if needed)
}

export const projects: Project[] = [
  {
    title: "North Shore Drone Reel",
    category: ["Drone", "Commercial"],
    year: 2024,
    videoUrl: "/assets/videos/north-shore-drone.mp4",
    slug: "north-shore-drone",
  },
  {
    title: "Vancouver Skyline Time‑Lapse",
    category: ["Events", "Commercial"],
    year: 2023,
    videoUrl: "/assets/videos/vancouver-skyline.mp4",
    slug: "vancouver-skyline",
  },
  {
    title: "Mountain Adventure Promo",
    category: ["Adventure", "Commercial"],
    year: 2025,
    videoUrl: "/assets/videos/mountain-adventure.mp4",
    slug: "mountain-adventure",
  },
  {
    title: "Personal Drone Experiment",
    category: ["Drone", "Passion Project"],
    year: 2022,
    videoUrl: "/assets/videos/personal-drone.mp4",
    slug: "personal-drone",
  },
];
