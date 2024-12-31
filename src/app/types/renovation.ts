export interface ImageSizes {
    thumbnail: string;
    medium: string;
  }
  
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
    sizes: ImageSizes;
  }
  
  export interface LinkData {
    title: string;
    url: string;
    target: string;
  }
  
  export interface RenovationData {
    small_title: string;
    title: string;
    description: string;
    link: LinkData;
    image: ImageData;
  }
  