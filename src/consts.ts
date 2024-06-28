import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "snjnpark",
  DESCRIPTION: "A faint pencil mark is better than a clear memory.",
  EMAIL: "hello@snjnpark.kr",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "snjnpark",
  DESCRIPTION: "A faint pencil mark is better than a clear memory.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "If you don't write it down, you won't be able to take it out and use it when you need it.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "If I think what I'm doing is reasonable, I jump in without delay.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/snjnpark",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/seungjun-park-498a431b9",
  },
];
