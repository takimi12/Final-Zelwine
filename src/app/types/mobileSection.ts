
export interface Category {
    id: number;
    name: string;
    slug: string;
  }

  
  export interface Images {
    id: number;
    src: string;
    name: string;
    alt: string;
    position: number;
  }
  
  export interface Attribute {
    id: number;
    name: string;
    slug: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }
  
  export interface MetaData {
    key: string;
    value: string;
  }
  
  export interface ResponseMobile {
    id: number;
    categories: Category[];
    images: Images[];
    attributes: Attribute[];
    meta_data: MetaData[];
  }

  
  export interface ModalData {
    title: string;
    description: string;
    produkt: Array<{
      ID: number;
      featured_image_url: string;
      post_title: string;
    }>;
  }
  
  export interface ImageSizes {
    [key: string]: string | number;
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
  
  export interface ConnectionType {
    image: ImageData;
  }
  
  export interface TechnicalData {
    title: string;
    values: Array<{ label: string; value: string }>;
  }
  
  export interface ResponseModal {
    acf: {
      wykonczenia: ModalData[];
      connection_types: ConnectionType[];
      guarantee_pack: {
        description: string;
        image: {
          url: string;
          alt: string;
        };
      };
      technical_data: TechnicalData[];
    };
  }
  