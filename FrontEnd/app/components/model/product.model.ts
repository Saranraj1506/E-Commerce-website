    export class Product {
        pid: number =0;
        name: string = "";
        price: number = 0;
        description: string = "";
        brand: string = "";
        model: string = "";
        image: string = "";
        category?: Category; 
     }

    export class Category {
        id: number = 0;
        name: string = "";
        catimage:string = "";
        
    }
    

