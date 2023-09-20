import {Metadata, NextPage} from "next";
import {Product, ProductsType} from "@/app/interfaces";
import Products from "@/components/clientComponets/Products";



export const getData = async (paramPrice="", paramName="")=>{
    const res = await fetch(`http://localhost:3000/api/products?price=${paramPrice}&name=${paramName}`,{next:{revalidate:60}})
    if (!res.ok) {
        throw new Error('Ошибка получения данных')
    }
    const data:Product[] = await res.json()
    return data
}

export const metadata: Metadata = {
    title: 'Список товаров',
    description: 'Список товаров фейкового приложения',
}

const ProductsPage:NextPage = async () => {
    const products:Product[] = await getData()

    return (<>

            <Products initProducts={products}/>
        </>)

}

export default ProductsPage;