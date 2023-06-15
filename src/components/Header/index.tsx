import {useContext} from "react";
import { ContextProductCount } from '../../utils/context-product';
import './style.css';

export default function Header(){

    const {contextProductCount} = useContext(ContextProductCount);

    return(
        <header>
            <div className='container header-container-config'>
                <div className='logo'>
                    <h1> DSFilter</h1>
                </div>
                <div className='qnt-products'>
                    <p>{contextProductCount} Produto(s)</p> 
                </div>
            </div>
        </header>
    );
}