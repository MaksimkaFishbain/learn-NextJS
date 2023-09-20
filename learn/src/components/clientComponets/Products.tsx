'use client'

import {FC} from 'react';
import {Product, ProductsType} from "@/app/interfaces";
import {ImTable2} from "react-icons/im";
import {LiaListOlSolid} from "react-icons/lia";
import Link from "next/link";
import {useState} from "react";
import Image from "next/dist/client/legacy/image";
import {useRouter} from "next/navigation";
import SortPanel from "@/components/clientComponets/SortPanel";


const Products:FC<ProductsType> = ({initProducts}) => {

    const [isTab, setIsTab] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>(initProducts)
    const router = useRouter()
    return (
        <div className="flex">
            <div>
                Cтраница товаров:
                {
                    isTab?(<>
                            <button className="absolute left-3" onClick={()=>setIsTab(!isTab)}>
                                <LiaListOlSolid size={30}/>
                            </button>
                            <ul className="grid grid-cols-2 gap-3">
                                {products.map((product)=>{
                                    return <li className="flex bg-blue-50 p-5 text-black rounded" onClick={()=> router.push(`/products/${product.id}`)}>
                                        <Image
                                            src={product.image}
                                            alt={product.description}
                                            width={60}
                                            height={70}
                                            priotity
                                        />
                                        <div className="block px-4">
                                            <h2>{product.title}</h2>
                                            <span className="bg-fuchsia-800 text-white rounded p-1 m-1">{product.price} $</span>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        </>

                    ):(<>
                            <button className="absolute left-3" onClick={()=>setIsTab(!isTab)}>
                                <ImTable2 size={30}/>
                            </button>
                            <ul className="grid-cols-1">
                                {products.map((product)=> {
                                    return (
                                        <li key={product.id} className="transition-colors hover:text-fuchsia-800"><Link href={`/products/${product.id}`}>{product.id} {product.title}</Link></li>
                                    )
                                })}
                            </ul>
                        </>
                    )
                }
            </div>
            <SortPanel setProducts={setProducts}/>
        </div>
    );
};

export default Products;