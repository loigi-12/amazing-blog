export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  amazonLink: string;
  blog: {
    title: string;
    content: string;
  };
}

export interface Product {
  id: number;
  title: string;
  url: string;
}
