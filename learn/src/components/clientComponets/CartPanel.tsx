'use client'

import {FC, useEffect, useState} from "react";
import {CartItems} from "@/app/interfaces";
import Link from "next/link";


const CartPanel:FC = () => {





    return (
        <>
            <div>
                <span>{4}</span>
                <Link href={'/cart'}>&#128722;</Link>
            </div>
        </>
    );
};

export default CartPanel;