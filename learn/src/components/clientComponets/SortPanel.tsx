'use client'
import {FC, useEffect, useState} from 'react';
import {getData} from "@/app/products/page";


const SortPanel:FC = ({setProducts}) => {
    const [paramPrice, setParamPrice] = useState<string>("");
    const [paramName, setParamName] = useState<string>("");

    useEffect(()=>{
        const fetchData = async ()=> {
            const products = await getData(paramPrice,paramName)
            setProducts(products)
        }
        fetchData()

    },[paramPrice,paramName])

    return (
        <div className="block bg-blue-50 p-5 rounded text-black m-7">
            <p className='text-blue-950'>Фильтр</p>
            <div className="border-2 border-fuchsia-800 rounded my-3.5">
                <p className="mx-2.5">Price</p>
                <button
                    className="p-3 m-3 rounded bg-fuchsia-800 text-white transition-colors hover:bg-indigo-700"
                    onClick={()=>setParamPrice("des")}>
                    по убыванию цены
                </button>
                <button
                    className="p-3 m-3 rounded bg-fuchsia-800 text-white transition-colors hover:bg-indigo-700"
                    onClick={()=>setParamPrice("asc")}>
                    по возрастанию цены
                </button>
            </div>
            <div className="border-2 border-fuchsia-800 rounded my-3.5">
                <p className="mx-2.5">Name</p>
                <button
                    className="p-3 m-3 rounded bg-fuchsia-800 text-white transition-colors hover:bg-indigo-700"
                    onClick={()=>setParamName("asc")}>
                    по алфавиту
                </button>
                <button
                    className="p-3 m-3 rounded bg-fuchsia-800 text-white transition-colors text-xs hover:bg-indigo-700"
                    onClick={()=>setParamName("des")}>
                    по обратному алфавиту
                </button>
            </div>

        </div>
    );
};

export default SortPanel;