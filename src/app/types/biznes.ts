export interface Guid {
  rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Meta {
  _acf_changed: boolean;
  _seopress_robots_primary_cat: string;
  _seopress_titles_title: string;
  _seopress_titles_desc: string;
  _seopress_robots_index: string;
  inline_featured_image: boolean;
  footnotes: string;
}

export interface ImageWithText {
  small_title: string;
  title: string;
  description: string;
  link: string;
  image: boolean;
}

export interface AsymetricItem {
  photo: {
    ID: number;
    url: string;
  };
  title: string;
  paragraph: string;
}

export interface Acf {
  heading: string;
  under_heading: string;
  asymetric: AsymetricItem[];
  hero: boolean;
  most: boolean;
  products_cat: boolean;
  inspirations: boolean;
  box: boolean;
  image_with_text: ImageWithText;
  header: string;
  under_stars: string;
  opinion: boolean;
  our_partners: boolean;
  last_block_homepage: {
    background: boolean;
    title: string;
    link: string;
  };
}

export interface Data {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Excerpt;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Meta;
  acf: Acf;
}
