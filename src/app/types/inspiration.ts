
export interface ImageConfig {
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
    sizes: {
      [key: string]: string | number;
    };
  }
  
  export interface ConfigType {
    image: ImageConfig;
    subtitle: string;
    value: string;
  }
  
  export interface Relationship {
    ID: number;
    post_author: string;
    post_date: string;
    post_date_gmt: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged: string;
    post_modified: string;
    post_modified_gmt: string;
    post_content_filtered: string;
    post_parent: number;
    guid: string;
    menu_order: number;
    post_type: string;
    post_mime_type: string;
    comment_count: string;
    filter: string;
  }
  
  export interface SelectedImage {
    image: ImageConfig;
    bigger_image: ImageConfig;
    title: string;
    count_column: string;
    height: string;
    config: ConfigType[];
    relationship: Relationship[];
    link: string;
  }
  