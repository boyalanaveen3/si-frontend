
export  interface Iproducts{
    productsdata: Product[] | null
    fetchProducts: () => Promise<void>
}
export interface Product {
  id: string;
  pid: string;
  title: string;
  description: string;
  price: number;
  category: string;
  features?: string[]
  icon?: string
}

export interface ProductResponse {
  status: number;
  data: Product[];
}
interface IObj {
    [key: string]: any;
  }
  interface IResponse<T> {
    status: boolean;
    data?: T;
    error?: string;
    message?: string;
  }
  export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}