
  export interface ImageData {
    ID: number;
    id: number;
    title: string;
    filename: string;
    filesize: number;
    url: string;
    link: string;
    alt: string;
  }
  
  export interface LinkData {
    ID: number;
  }
  
  export interface ProductData {
    image: ImageData;
    title: string;
    price: string;
    link_do_produktu: LinkData;
  }
  