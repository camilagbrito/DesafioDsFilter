import './style.css';
import { ProductDTO } from '../models/product';

type Props = {
    product?:ProductDTO;
}

export default function Listing({product}:Props){

    
    return(
        <main>
            <section>
                <div className='card-item'>
                        <h2>{product?.name}</h2>
                        <h3>R$ {product?.price.toFixed(2)}</h3>
                </div>
            </section>
        </main>
    );
}