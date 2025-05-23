export interface Image {
  url: string;
  alt: string;
}

export interface Result {
  total: number;
  total_pages: number;
  results: Photo[];
}

export interface Photo {
  id: number;
  description: string;
  urls: Urls;
}

export interface Urls {
  regular: string;
  small: string;
}
