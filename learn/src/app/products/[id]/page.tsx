import {Product} from "@/app/interfaces";
import Image from "next/dist/client/legacy/image";
import Card from "@/components/Card";


const getData = async (id:string)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Ошибка получения данных')
    }
    const data:Product = await res.json()
    return data
}

export async function generateMetadata({params:{id}}:string) {
    const product = await getData(id)
    return {
        title: `${product.title}`,
        description: `${product.description}`

    }
}


const ProductPage = async ({params:{id}}:string) => {
    const product = await getData(id)
    return (
        <Card
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
        />
    );
};

export default ProductPage;