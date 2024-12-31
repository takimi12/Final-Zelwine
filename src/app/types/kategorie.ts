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

export interface LinkData {
  self: string[];
  collection: string[];
  up?: string[];
}

export interface Category {
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
  _links: LinkData;
}

export interface Params {
  params: {
    kategorie: string;
  };
}
