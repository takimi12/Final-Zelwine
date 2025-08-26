export type ContactItem = {
  icon: {
    sizes: {
      thumbnail: string;
    };
  };
  bold: string;
  grey: string;
};

export type ContactsData = {
  naglowek: string;
  contacts: ContactItem[];
  bottom_grey: string;
};

export type ContactData = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  acf: ContactsData;
};
