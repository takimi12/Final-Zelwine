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

export interface DeliveryPackItem {
  line: string;
}

export interface DeliveryPack {
  description: string;
  image: ImageData;
  list?: DeliveryPackItem[];
}

export interface ResponseDesktop {
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
    delivery_pack?: DeliveryPack;
  };
}

export interface DeliveryProps {
  responseModal: ResponseDesktop;
  closeModal: () => void;
}
