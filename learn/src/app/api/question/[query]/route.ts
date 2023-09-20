import {NextRequest, NextResponse} from "next/server";
import connectToDatabase from "../../../../../DB/db"
import Question from "../../../../../DB/models/Question"




export async function GET(req:NextRequest,{params:{query}}:string){

    console.log(query)

    try {
        const client = connectToDatabase()
        const queryData = await Question.find({email:{$ne:query}})
        if (queryData.length === 0){
            return NextResponse.json({message:"Данные по запросу не найдены!"},{
                status:404
            })
        }
        console.log(queryData)

        return NextResponse.json(queryData,{
            status:201
        })

    } catch (e){
        console.error("Ошибка получения данных", e)
        return NextResponse.json({error:"Ошибка получения данных"},{
            status:500
        })
    }

}