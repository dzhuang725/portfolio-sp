// types/index.ts
export interface Experience {
  id: number;
  title: string;
  company: string;
  status: string;
  type: string;
  body: string;
  time: string;
  language: string;
  url: string;
}

export interface Socials {
  id: number;
  title: string;
  body: string;
  icon: string;
  url: string;
}

export interface Skills {
  id: number;
  title: string;
  icon: string;
}
