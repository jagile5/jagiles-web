// Project data for the Work section

export interface Project {
  title: string;
  client: string;
  category: string[];
  year: number;
  videoUrl: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "CHFT NHS Trust",
    client: "Recruitment Video",
    category: ["Recruitment", "Healthcare"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/JiQkZmfhjOI",
    slug: "chft-nhs-trust",
  },
  {
    title: "Barnsley Council",
    client: "Recruitment Video",
    category: ["Recruitment", "Government"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/BGkUDztNgQA",
    slug: "barnsley-council-recruitment",
  },
  {
    title: "Billingley Christmas Tree Farm",
    client: "Promotional Video",
    category: ["Promotional", "Holiday"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/NY7NORUOcEs",
    slug: "billingley-christmas-tree-farm",
  },
  {
    title: "Miata Drift Day",
    client: "Passion Project - Drone",
    category: ["Drone", "Passion Project"],
    year: 2024,
    videoUrl: "https://www.youtube.com/embed/zw5FbGgPiXA",
    slug: "miata-drift-day",
  },
  {
    title: "Barnsley Council",
    client: "PRomotional Video (Instagram)",
    category: ["Promotional", "Social Media"],
    year: 2024,
    videoUrl: "https://www.instagram.com/reel/CfrVUIHDZBe/",
    slug: "barnsley-council-instagram",
  },
];
