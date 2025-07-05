export type ProjectLinkTypes = {
  appStore?: string;
  playStore?: string;
  github?: string;
  website?: string;
};

export type ProjectType = {
  title: string;
  type: "Mobile App" | "Frontend" | "Backend" | "Full Stack" | string;
  details: string[];
  tech: string[];
  tags: string[];
  links: ProjectLinkTypes;
};
