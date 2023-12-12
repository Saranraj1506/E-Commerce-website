import { Product } from "./product.model";

export interface Order {
    orderId?: number;
    orderStatus: string;
    orderPrice:number;
    createdAt?: string; // Assuming createdAt will be a string in the format of date-time
    address: string;
    customer: any;
    product: Array<Product>;
}

