import { FC, SetStateAction} from "react";
import style from "@/styles/modal.module.scss"

const OrderMolal:FC = ({setIsOpen}:SetStateAction<boolean>) => {

    return (
        <>
            <div className={style.overlay} onClick={()=>setIsOpen(false)}/>
            <div className={style.modal}>
                <div>
                    <h3>Order</h3>
                    <button onClick={()=>setIsOpen(false)}>&#10006;</button>
                </div>
            </div>
        </>


    );
};

export default OrderMolal;