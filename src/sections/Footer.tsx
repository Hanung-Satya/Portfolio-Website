import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  const socials = [
    {
      href: "https://github.com/Hanung-Satya",
      icon: IconBrandGithub,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/hnung0_0",
      icon: IconBrandInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/hanung-satya-1a473833a",
      icon: IconBrandLinkedin,
      label: "LinkedIn",
    },
    { href: "mailto:hanungsaw159@gmail.com", icon: IconMail, label: "Email" },
  ];

  return (
    <footer>
      <div className="w-full flex flex-col justify-center gap-4 h-fit py-6 items-center text-center text-sm text-neutral-500 dark:text-neutral-400">
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        <div className="flex items-center gap-4">
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
        © 2026 Hanung Satya. All rights reserved.
      </div>
    </footer>
  );
}
