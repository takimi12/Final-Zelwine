export type TechnicalValue = {
  label: string;
  value: string;
};

export type TechnicalDataGroup = {
  title: string;
  values: TechnicalValue[];
};

export type ResponseModalAcf = {
  technical_data: TechnicalDataGroup[];
  technical_image?: string;
};

export type ResponseModal = {
  acf: ResponseModalAcf;
};

export type DataTechnicalProps = {
  responseModal: ResponseModal;
  closeModal: () => void;
};
