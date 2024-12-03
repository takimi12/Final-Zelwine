
export interface ImageData {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }
  
  export interface CategoryData {
    id: number;
    name: string;
    slug: string;
    parent: number;
    description: string;
    display: string;
    image: ImageData | null;
    menu_order: number;
    count: number;
    slug_parent: string;
  }
  
  export interface SeriesItem {
    id: number;
    name: string;
    slug: string;
    parent: number;
    description: string;
    display: string;
    image: ImageData | null;
    menu_order: number;
    count: number;
    slug_parent: string;
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      up?: { href: string }[];
    };
  }
  
  export interface SeriesProps {
    series: SeriesItem[] | '';
    series1: '' | SeriesItem[];
    filtereddataSeries?: CategoryData[] | '';
  }
  