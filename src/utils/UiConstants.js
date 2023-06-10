import { nanoid } from "nanoid";
import {
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsDiscord,
  BsGithub,
} from "react-icons/bs";

const navList = [
  {
    id: nanoid(),
    text: "Home",
    path: "/",
  },
  {
    id: nanoid(),
    text: "Favorites",
    path: "/favorite",
  },
  {
    id: nanoid(),
    text: "About",
    path: "/about",
  },
  {
    id: nanoid(),
    text: "Contact",
    path: "contact",
  },
];

const socialList = [
  {
    id: nanoid(),
    Icon: BsTwitter,
  },
  {
    id: nanoid(),
    Icon: BsInstagram,
  },
  {
    id: nanoid(),
    Icon: BsLinkedin,
  },
  {
    id: nanoid(),
    Icon: BsReddit,
  },
  {
    id: nanoid(),
    Icon: BsDiscord,
  },
  {
    id: nanoid(),
    Icon: BsGithub,
  },
];

export { navList, socialList };
