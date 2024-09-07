export interface IconType {
  icon: string[];
  fill: string;
}

export interface IProject {
  id: number;
  title: string;
  desc: string;
  technologies: string[];
  icons: IconType[];
}
