export interface Category {
  title: string;
  url: string;
  slug: string;
  product_id: string;
  thumbnail: string;
  children: Category[];
}

export interface HeaderProps {
  categories: Category[];
}
