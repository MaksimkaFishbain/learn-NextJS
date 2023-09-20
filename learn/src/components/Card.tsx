import {FC} from 'react';
import {Product} from "@/app/interfaces";
import Image from "next/dist/client/legacy/image";
import { Hanken_Grotesk } from "next/font/google"
import BuyPanel from "@/components/clientComponets/BuyPanel";

const HankenGrotesk = Hanken_Grotesk({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
})

const Card:FC<Product> = (props) => {


    return (
        <div className="bg-white rounded p-10 text-fuchsia-800" style={HankenGrotesk.style}>
            <h1 className='m-7 text-4xl font-bold'>{props.title}</h1>
            <div className='flex'>
                <Image
                    src={props.image}
                    alt={props.title}
                    width={500}
                    height={500}
                    priority

                />
                <div className='block w-96 m-7 text-2xl'>
                    <p className='text-justify'>{props.description}</p>
                    <BuyPanel tittle={props.title} count={1} price={props.price}/>
                </div>
            </div>
        </div>
    );
};

export default Card;