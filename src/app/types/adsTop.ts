export interface ImageSize {}

export interface ImageData {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: ImageSize;
}

export interface ButtonData {
  title: string;
  url: string;
  target: string;
}

export interface HeroData {
  image: ImageData;
  title: string;
  paragraph: string;
  button: ButtonData;
}

export interface Step {
  icon: ImageData;
  bold: string;
  text: string;
}

export interface ProcessStep {}

export interface Benefit {}

export interface ACFData {
  hero: HeroData;
  simple_steps: {
    heading: string;
    steps: Step[];
  };
  process: {
    title: string;
    process_steps: ProcessStep[];
  };
  benefits: {
    benefits_heading: string;
    benefits_repeater: Benefit[];
  };
}
