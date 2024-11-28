
export interface GuaranteePack {
    description: string;
    image: {
      url: string;
      alt: string;
    };
  }
  
  export interface ResponseDesktop {
    acf: {
      guarantee_pack: GuaranteePack;
    };
  }
  
  export interface GuaranteeProps {
    responseModal: ResponseDesktop;
    closeModal: () => void;
  }
  