import CardProduct from '../CardProduct';
import './style.css';

export default function Listing(){
    return(
        <main>
            <section className='card-products-config'>
                <div className='card-products container'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </section>
        </main>

    );
}