import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://x.com", icon: <FaTwitter /> },
  { href: "https://web.facebook.com", icon: <FaFacebook /> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com", icon: <FaLinkedin /> },
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-slate-900 py-6 border-t border-teal-400/20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <p className="text-center text-sm font-robert-regular text-teal-300/80 md:text-left">
          ©Nexora 2025 | Building the future of interconnected gaming
        </p>

        <div className="flex justify-center gap-5 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400/60 hover:text-teal-100 text-lg transition-all duration-300 hover:scale-110"
              aria-label={`Visit our ${link.href.split("//")[1].split(".")[0]} page`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex gap-6">
          <a
            href="#privacy-policy"
            className="text-sm font-robert-regular text-teal-300/80 hover:text-teal-100 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-sm font-robert-regular text-teal-300/80 hover:text-teal-200 hover:underline"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
