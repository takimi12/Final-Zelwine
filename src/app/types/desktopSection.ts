export interface MetaData {
  key: string;
  value: string;
}

export interface Attribute {
  id: number;
  name: string;
  options: string[];
}

export interface Image {
  src: string;
  alt: string;
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

export interface ProductPageSingleProps {
  res: string;
  responseModal: ResponseModal;
}
