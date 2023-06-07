import { ProductDTO } from '../models/product';
import './style.css';

type Props = {
    product: ProductDTO;
}

export default function CardProduct({product}: Props){
    return(
        <main>
            <section className='card-container'>
                <div className='card-item'>
                    <h2>{product.name}</h2>
                    <h3>{product.price.toFixed(2)}</h3>
                </div>
            </section>
        </main>
    );

}