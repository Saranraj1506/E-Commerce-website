import { Product } from "./product.model";


export interface Cart {
    cart_id: number;
    quantity: number;
    total_price: number;
    product: Product;
    customer: any;
    
}
