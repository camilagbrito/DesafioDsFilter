import Filter from '../Filter';
import Listing from '../Listing';
import './style.css';

export default function ListingBody(){
    return(
        <main>
            <section className='listing-body-config'>
                <div className='container-listing-body'>
                    <Filter />
                    <Listing />
                </div>
            </section>
        </main>
    );
}