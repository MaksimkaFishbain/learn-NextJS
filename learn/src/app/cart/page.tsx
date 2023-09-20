'use client'
import {NextPage} from "next";
import {CartItems} from "@/app/interfaces";
import {useState} from "react";
import OrderMolal from "@/components/clientComponets/OrderMolal";



const CartPage:NextPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems:CartItems =  JSON.parse(localStorage.getItem('cart'))
    let totalPrice:number = 0
    return (
        <div>
            <ul>
                {cartItems.map((cartItem,key)=>{
                    totalPrice += cartItem.price
                    return (
                        <li key={key} className='flex bg-fuchsia-800 text-white rounded my-3.5 p-5 gap-3.5 text-2xl bg-opacity-70 justify-between'>
                            <h2>{cartItem.tittle}</h2>
                            <p>Count: {cartItem.count}</p>
                            <p>Price: {cartItem.price}</p>
                        </li>
                    )
                })}
            </ul>
            <div className='flex justify-center pt-20'>
                <button
                    onClick={()=>setIsOpen(true)}
                    className='p-3.5 text-xl bg-blue-50 text-fuchsia-800 rounded hover:bg-fuchsia-800 hover:text-white'>
                    Buy! | {totalPrice} $
                </button>
            </div>
            {isOpen &&  <OrderMolal setIsOpen={setIsOpen}/>}
        </div>
    );
};

export default CartPage;