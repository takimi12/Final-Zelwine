export interface Opinion {
  number_of_stars: string;
  title: string;
  paragraph: string;
  signature: string;
  country: string;
  image: {
    url: string;
  };
}

export interface HeaderStars {
  url: string;
}

export interface OpinionsData {
  header: string;
  header_stars: HeaderStars;
  under_stars: string;
  opinions: Opinion[];
}

export interface ClientData {
  acf: OpinionsData;
}

export interface OpinionProps {
  data: ClientData;
}
