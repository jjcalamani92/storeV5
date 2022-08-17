export interface Wear {
  _id: string;
  article: Article;
}
export interface Article {
  title: string;
  slug: string;
  description:string
  price:number
  discountPrice:number
  image: ImageProduct[]
}
export interface ImageProduct {
  uid: string;
  src: string;
  alt: string;
}
export interface CreateProductInput {
  // _id: string;
  title: string;
  mark: string;
  description: string;
  featured: string;
  // section: string;
  // category: string;
  // subCategory: string;
  // item: string;
  inStock: number;
  price: number;
  discountPrice: number;
  site: string;

  // specs:string[];
  // imageSrc:any[];
  // tags:string[];
  route:string[];
}
export interface AddProductImage {
  uid:string
  src: string;
  alt: string;
}