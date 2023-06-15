import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';
import * as productService from "../../services/product-service";
import './style.css';
import { ProductDTO } from '../models/product';
import { ContextProductCount } from '../../utils/context-product';

    type Price = {
        min: number;
        max: number;
      };
    
    export default function ListingBody() {
    
        const [product, setProduct] = useState<ProductDTO[]>([]);
    
        const { setContextProductCount } = useContext(ContextProductCount);
    
        const [price, setPrice] = useState<Price>({
            min: 0,
            max: Number.MAX_VALUE,
        });
    
        
      useEffect(() => {
        setProduct(productService.findByPrice(price.min, price.max));
        setContextProductCount(
          productService.findByPrice(price.min, price.max).length
        );
      }, [price]);
    
      function handleFilter(min: number, max: number) {
        setPrice({ ...price, min: min, max: max });
      }

    return(
        <main>
            <section>
                <div className='container-listing-body'>
                    <Filter onFilter={handleFilter} />
                    <div className='card-products container'>
                      {product.map((product) => (
                          <Listing key={product.id} product={product} />
                      ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
