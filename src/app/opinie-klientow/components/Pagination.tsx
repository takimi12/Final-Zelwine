'use client'
import { useState } from "react";
import Image from "next/image";
import styles from "../Opinie.module.scss";

interface Opinion {
    number_of_stars: string;
    title: string;
    paragraph: string;
    signature: string;
    country: string;
    image: {
        url: string;
    };
}

interface HeaderStars {
    url: string;
}

interface OpinionsData {
    header: string;
    header_stars: HeaderStars;
    under_stars: string;
    opinions: Opinion[];
}

interface ClientData {
    acf: OpinionsData;
}

interface OpinieProps {
    data: ClientData;
}

 const Opinie: React.FC<OpinieProps> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 2;

    const totalPages = Math.ceil(data.acf.opinions.length / postsPerPage);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getCurrentPosts = () => {
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        return data.acf.opinions.slice(indexOfFirstPost, indexOfLastPost);
    };

    return (
        <>
            <section className={styles.opinions}>
                <div className={styles.mainHeading}>
                    <h3>{data.acf.header}</h3>
                    <Image
                        width={100}
                        height={100}
                        src={data.acf.header_stars.url}
                        alt="popraw"
                    />
                    <p className={`EyebrowHeader ${styles.EyebrowHeader}`}>
                        Średnia ocena: <span className={styles.span}>{data.acf.under_stars}</span>
                    </p>
                </div>

                <div className={styles.mainWrapper}>
                    {getCurrentPosts().map((opinion, index) => (
                        <div key={index} className={styles.wrapperOpinion}>
                            <div className={styles.wrapperOpinionLeft}>
                                <p>{opinion.number_of_stars}</p>
                                <h6>{opinion.title}</h6>
                                <p className={`${styles.middle} body`}>{opinion.paragraph}</p>
                                <p className="body-small">
                                    {opinion.signature}
                                    <span className={`body-small ${styles.eyespan}`}>{opinion.country}</span>
                                </p>
                            </div>
                            <div className={styles.wrapperOpinionRight}>
                                <Image
                                    src={opinion.image.url}
                                    fill
                                    alt="popraw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.pagination}>
                    <button 
                        onClick={handlePrev} 
                        className={styles.prev} 
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handleClick(index + 1)}
                            className={currentPage === index + 1 ? styles.active : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        onClick={handleNext} 
                        className={styles.next} 
                        disabled={currentPage === totalPages}
                    >
                        {'>'}
                    </button>
                </div>
            </section>
        </>
    );
};

export default Opinie;