'use client'

import {FC, useState} from "react";
import {CartItem, CartItems} from "@/app/interfaces";




const BuyPanel:FC<CartItem> = (props) => {
    const [count, setCount] = useState<number>(props.count)
    const totalPrice:number =  Math.floor(props.price*count)



    const PutToCart = () => {
        let cartItems:CartItems = JSON.parse(localStorage.getItem('cart'))
        cartItems = [...cartItems, {
            tittle:props.tittle,
            count,
            price:totalPrice
        }]

        localStorage.setItem('cart', JSON.stringify(cartItems))

    }

    return (
        <div className='my-8'>
            <div className='flex items-center gap-4'>
                <div className='flex bg-fuchsia-800 text-white rounded-3xl w-fit py-2 px-4'>
                    <button onClick={()=>setCount(()=> count>1? count - 1 : count)}>- </button>
                    <span className='mx-2'> | {count} | </span>
                    <button onClick={()=>setCount(()=> count + 1)}> +</button>
                </div>
                <p>Total price: {totalPrice} $</p>
            </div>
            <button onClick={PutToCart} className='bg-fuchsia-800 text-white py-2 px-4 rounded-3xl my-8 transition-colors hover:bg-blue-50 hover:text-fuchsia-800 border border-fuchsia-800'>Add to Cart!</button>
        </div>
    );
};

export default BuyPanel;