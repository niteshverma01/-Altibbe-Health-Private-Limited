export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  features: string[];
  nutrition: {
 [key: string]: string | undefined;   };
  traceability: {
    origin: string;
    harvestDate: string;
    batchNumber: string;
  };
  sustainability: string[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
}