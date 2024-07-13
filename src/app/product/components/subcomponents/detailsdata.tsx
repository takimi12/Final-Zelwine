'use client';

import { useState } from "react";
import TechnicalData from "../DataTechnical";
import styles from "./detailsdata.module.scss"; 

interface Product {
  id: number;
  meta_data: MetaData[];
  attributes: Attribute[];
  images: Image[];
}

interface MetaData {
  key: string;
  value: string;
}

interface Attribute {
  id: number;
  name: string;
  options: string[];
}

interface Image {
  src: string;
  alt: string;
}

interface ModalData {
  title: string;
  description: string;
  produkt: Array<{
    ID: number;
    featured_image_url: string;
    post_title: string;
  }>;
}

interface ImageSizes {
  [key: string]: string | number;
}

interface ImageData {
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

interface ConnectionType {
  image: ImageData;
}

interface GuaranteePack {
  guarantee_pack: {
    description: string;
    image: {
      url: string;
      alt: string;
    };
  };
}

interface TechnicalData {
  title: string;
  values: Array<{ label: string; value: string }>;
}

interface ResponseModal {
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

export default function ProductPageSingle({ responseModal }: { responseModal: ResponseModal }) {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const closeModal = () => {
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "technicalData":
        return <TechnicalData responseModal={responseModal} closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      {responseModal.acf.technical_data && responseModal.acf.technical_data.length > 0 && (
        <div  onClick={() => setActiveComponent("technicalData")}>
          <div>
            <p className={styles.text} >Zobacz Dane techniczne</p>
          </div>
       
        </div>
      )}

      <div className={`${styles.popUp} ${activeComponent ? styles.active : ""}`}>
        <div className={`${styles.left} ${activeComponent ? styles.activeLeft : ""}`} onClick={closeModal}></div>
        <div className={`${styles.popUp} ${activeComponent ? styles.active : ""}`}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
