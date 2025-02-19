import React, { useState, useEffect} from 'react';
import Cards from 'react-credit-cards';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import 'react-credit-cards/lib/styles.scss'


export default function Bill(){

    const [number, setNumber] = useState('5145876364470839');
    const [name, setName] = useState('John Doe');
    const [expire, setExpire] = useState('12/18');
    const [cvc, setCVC] = useState('321');

    const [company, setCompany] = useState('Pagame');
    const [orderNumber, setOrderNumber] = useState('420');
    const [product, setProduct] = useState('Mountain Drew');
    const [total, setTotal] = useState(500);
    const [iva, setIVA] = useState(total*0.19);

    return(
        <div className="bill-container">
            <Cards
                number={number}
                name={name}
                expiry={expire}
                cvc={cvc}
            ></Cards>
            <div className="bill-info-container">
                <div className="bill-info">
                    <div className="category">Compañia</div>
                    <div className="value">{company}</div>
                    <div className="category">Numero de Orden</div>
                    <div className="value">{orderNumber}</div>
                    <div className="category">Producto</div>
                    <div className="value">{product}</div>
                    <div className="category">IVA (19%)</div>
                    <div className="value">{iva}</div>
                </div>
            </div>
            <hr className="divider"></hr>
            <div className="bill-cost-container">
                <div className="bill-cost">
                    <div>El total a pagar es</div>
                    <div className="bill-price">
                        <div className="integer">420</div>
                        <div className="decimal">.000</div>
                    </div>
                </div>
                <div className="bill-cost-icon">
                    <FontAwesomeIcon icon={faMoneyBill1Wave}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
}