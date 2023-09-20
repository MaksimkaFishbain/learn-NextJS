'use client'

import  {FC} from 'react';
import style from '@/styles/form.module.scss'
import {SubmitHandler, useForm} from "react-hook-form";

interface IFormData{
    name:string,
    email:string,
    quest:string
}

const Form:FC = () => {

    const {register,handleSubmit,reset} = useForm();




    const submit = async (data)=>{
        try {
            const jsonData = JSON.stringify(data)
            const response = await fetch('/api/question',{
                method:"POST",
                body:jsonData,
                headers:{
                    "Content-Type":"application/json"
                }
            })
            if (!response.ok){
                throw new Error(`Ошибка HTTP! ошибка ${response.status}`)
            }

            reset()
        } catch (e){
            console.log(e)
        }
    }

    return (
        <form name="user-quest" method="post" className={style.form} onSubmit={handleSubmit(submit)}>
            <div className={style.formContent}>
                <label>Имя</label>
                <input {...register("name")} type="text" required={true} placeholder='Введите ваше имя...'/>
                <label>Почта</label>
                <input {...register("email")} type="email" required={true} placeholder='Введите вашу почту...'/>
                <label>Ваш вопрос</label>
                <textarea {...register("quest")} placeholder='Какой у вас вопрос?' required={true}/>
                <button type="submit" className="bg-fuchsia-800 text-white py-2 px-4 rounded my-4 transition-colors hover:bg-blue-50 hover:text-fuchsia-800 border border-fuchsia-800">Отправить</button>
            </div>
        </form>
);
};

export default Form;