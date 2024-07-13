'use client'
import { useState } from "react";
import Wykonczenia from "./PopupWykonczenia";
import ConnectionType from "./ConnectionType";
import Guarantee from "./Guarantee";
import Delivery from "./Delivery";
import TechnicalData from "./DataTechnical";
import styles from "./Modal.module.scss";
import Horizontal from "../../../../public/static/ProductPage/horizontalArrow.svg";
import Image from "next/image";

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
  const { acf } = responseModal;



  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const closeModal = () => {
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "wykonczenia":
        return <Wykonczenia responseModal={responseModal} closeModal={closeModal} />;
      case "technicalData":
         return <TechnicalData responseModal={responseModal} closeModal={closeModal} />;
      case "connectionType":      
          return <ConnectionType responseModal={responseModal} closeModal={closeModal} />;
      case "guarantee":
        return <Guarantee responseModal={responseModal} closeModal={closeModal} />;
      case "delivery":
        return <Delivery responseModal={responseModal} closeModal={closeModal} />;
      default:
        return null;
    }
  };

  return (
    <section className={styles.sectionPopUp}>
      <div className={styles.mainSection}>
        <div className={styles.parentBox}>
         
        {acf.wykonczenia && acf.wykonczenia.length > 0 && (
        <div className={styles.parentInner} onClick={() => setActiveComponent("wykonczenia")}>
              <div>
                <h3 className={styles.popUpheading}>Wykończenia</h3>
              </div>
              <div>
                <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
              </div>
            </div>
            )}



            <div className={styles.parentInner} onClick={() => setActiveComponent("connectionType")}>
              <div>
                <h3 className={styles.popUpheading}>Rodzaje podłączeń</h3>
              </div>
              <div>
                <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
              </div>
            </div>
            {acf.technical_data && acf.technical_data.length > 0 && (
  <div className={styles.parentInner} onClick={() => setActiveComponent("technicalData")}>
    <div>
      <h3 className={styles.popUpheading}>Dane techniczne</h3>
    </div>
    <div>
      <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
    </div>
  </div>
)}


          <div className={styles.parentInner} onClick={() => setActiveComponent("guarantee")}>
            <div>
              <h3 className={styles.popUpheading}>Gwarancja</h3>
            </div>
            <div>
              <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
            </div>
          </div>
          <div className={styles.parentInner} onClick={() => setActiveComponent("delivery")}>
            <div>
              <h3 className={styles.popUpheading}>Dostawa</h3>
            </div>
            <div>
              <Image className={styles.boxImage} src={Horizontal} alt="hoverimage" />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.popUp} ${activeComponent ? styles.active : ""}`}>
        <div className={`${styles.left} ${activeComponent ? styles.activeLeft : ""}`} onClick={closeModal}></div>
        <div className={`${styles.popUp} ${activeComponent ? styles.active : ""}`}>
          {renderComponent()}
        </div>
      </div>
    </section>
  );
}
