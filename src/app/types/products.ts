export interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

export interface Links {
  self: Array<{ href: string }>;
  collection: Array<{ href: string }>;
  up?: Array<{ href: string }>;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: Image | null;
  menu_order: number;
  count: number;
  slug_parent: string;
  _links: Links;
}
