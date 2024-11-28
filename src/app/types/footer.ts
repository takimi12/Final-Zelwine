export interface Social {
    title: string;
    url: string;
  }
  
  export interface SocialItem {
    social: Social;
  }
  
  export interface Category {
    title: string;
    url: string;
    slug: string;
    product_id: string;
    thumbnail: string;
    children: Category[];
  }
  