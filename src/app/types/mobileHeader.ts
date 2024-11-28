
export interface SubCategory {
    title: string;
    url: string;
    slug: string;
    product_id: string;
    thumbnail: string;
    children: Category[];
  }
  
  export interface Category {
    title: string;
    url: string;
    slug: string;
    product_id: string;
    thumbnail: string;
    children: SubCategory[];
  }
  
  export interface Props {
    categories: Category[];
  }
  