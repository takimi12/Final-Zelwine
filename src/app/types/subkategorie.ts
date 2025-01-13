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

export interface Product {
  categories: { id: number; name: string }[];
  name: string;
  id: number;
  images: ImageData[];
  slug: string;
}

export interface MappedCategory {
  name: string;
  id: number;
  images: ImageData[];
  slug: string;
}

export interface Params {
  params: { categories: string; subcategories: string };
}
