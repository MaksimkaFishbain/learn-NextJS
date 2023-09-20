
export interface ProductsType {
    initProducts:Product[];
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
}

interface Rating {
    rate: number
    count: number
}



export interface CartItem{
    tittle:string,
    count:number,
    price:number
}

export type CartItems = CartItem[]