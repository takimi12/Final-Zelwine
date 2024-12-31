export interface FeaturedData {
  background: {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}

export interface FeaturedProps {
  data: FeaturedData;
}
