export interface ModalData {
  title: string;
  description: string;
  produkt: Array<{
    ID: number;
    featured_image_url: string;
    post_title: string;
  }>;
}

export interface ResponseDesktop {
  acf: {
    wykonczenia: ModalData[];
  };
}

export interface PopupEndProps {
  responseModal: ResponseDesktop;
  closeModal: () => void;
}
