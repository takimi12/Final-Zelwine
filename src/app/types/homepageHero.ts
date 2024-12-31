
export interface HeroItem {
    small_title: string;
    title: string;
    link: {
      title: string;
      url: string;
      target: string;
    };
    image: {
      ID: number;
      id: number;
      title: string;
      filename: string;
      filesize: number;
      url: string;
      link: string;
      alt: string;
      author: string;
    };
  }
  
  export interface HeroProps {
    data: HeroItem[];
  }
  