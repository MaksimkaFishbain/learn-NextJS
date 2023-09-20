import {NextRequest, NextResponse} from "next/server";
import Question from "../../../../DB/models/Question"
import connectToDatabase from "../../../../DB/db"

export async function POST(req:NextRequest,res:NextResponse){
    const data = await req.json();

    const client = connectToDatabase();

    const {name,email,quest} = data;

    if(
        name.trim() === "" ||
        quest.trim() === ""
    ){
        NextResponse.json(
            {question:"Данные введены не правильно!"},{
            status:422
        })

        return;
    }

    const newData = {
        ...data,
        date:new Date()
    }

    try {
        await Question.create(newData)
        console.log("Сообщение отправлено")
        return NextResponse.json({question: "Cообщение отправлено!"},{
            status:201
        })
    } catch (e) {
        console.error("Сообщение не отправлено ", e)
        return NextResponse.json({question:"Ошибка отправки!"},{
            status:500
        })
    }
}

export async  function GET(req:Request,res:NextResponse){
    const { searchParams } = new URL(req.url);

    const query = Number(searchParams.get("limit"));


    try {
        const client = connectToDatabase();
        const questions = await Question.find().limit(query);

        return NextResponse.json(questions)
    } catch (e){
        console.error("Ошибка ", e)
        return NextResponse.status(500).json({error:"Ошибка получения данных"})
    }
}