import CardProduct from '../CardProduct';
import * as productService from '../../services/product-service'
import './style.css';

export default function Listing(){
    return(
        <main>
            <section className='card-products-config'>
                <div className='card-products container'>
                    {
                        productService.findByPrice(0, 5000).map(
                            product => <CardProduct key={product.id} product={product} />
                            )
                    }
                </div>
            </section>
        </main>

    );
}