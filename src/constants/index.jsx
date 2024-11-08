import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Company",
    links: [
      { title: "Projects", href: "/projects" },
      { title: "E-Lab Challenges", href: "/challenges" },
      { title: "Team", href: "/team" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
