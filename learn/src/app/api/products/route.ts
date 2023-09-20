import Product from "../../../../DB/models/Product"
import connectToDatabase from "../../../../DB/db"
import Question from "../../../../DB/models/Question";
import {NextResponse} from "next/server";
import Products from "@/components/clientComponets/Products";


export async function GET(req){

    const {searchParams} = new URL(req.url)
    const priceQuery = searchParams.get("price")
    const nameQuery = searchParams.get("name")

    try {
        const client = connectToDatabase();
        if (priceQuery === "asc"){
            const products = await Product.find().sort({price:1})
            return NextResponse.json(products)
        } else if (priceQuery === "des") {
            const products = await Product.find().sort({price:-1})
            return NextResponse.json(products)
        } else if (nameQuery === "asc") {
            const products = await Product.find().sort({title:1})
            return NextResponse.json(products)
        } else if (nameQuery === "des") {
            const products = await Product.find().sort({title:-1})
            return NextResponse.json(products)
        } else {
            const products = await Product.find()
            return NextResponse.json(products)
        }

    } catch (e){
        console.error("Ошибка ", e)
        NextResponse.status(500).json({error:"Ошибка получения данных"})
    }
}