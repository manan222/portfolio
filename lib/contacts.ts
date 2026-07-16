import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export interface ContactItem {
  title: string;
  value: string;
  href: string;
  icon: React.ElementType;
}

export const CONTACT_INFO: ContactItem[] = [
  {
    title: "Email",
    value: "abdulmanan222111@gmail.com", // Replace with your email
    href: "mailto:abdulmanan222111@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Phone",
    value: "+92 323 4314270",
    href: "tel:+923234314270",
    icon: FaPhoneAlt,
  },
  {
    title: "Location",
    value: "Lahore, Pakistan",
    href: "#",
    icon: FaMapMarkerAlt,
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/manan222",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdul-manan-ali-26774415a/",
    icon: FaLinkedin,
  },
];