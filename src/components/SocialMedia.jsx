import Link from "next/link";
import clsx from "clsx";
import { BsTwitterX, BsGithub, BsYoutube, BsLinkedin } from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "Youtube",
    href: "https://youtube.com/@mindmergealu?si=Pq4BqQJAoXTKY19s",
    icon: BsYoutube,
  },
  { title: "GitHub", href: "https://github.com/uwenayoallain", icon: BsGithub },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/uwenayoallain/",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/uwenayoallain",
    icon: BsTwitterX,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className,
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700",
            )}
          >
            <item.icon className="h-6 w-6" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
