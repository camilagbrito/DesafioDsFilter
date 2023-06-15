import { useState } from 'react';
import './style.css';

type FormData = {
    minprice?: number,
    maxprice?: number
}

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onFilter: Function;
  };

export default function Filter({onFilter}:Props){

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event:any){
       const value = event.target.value;
       const name = event.target.name; 
       setFormData({...formData, [name]: value});
    }

    function handleSubmit(event:any){
      event.preventDefault();  
      const min = formData.minprice || 0;
      const max = formData.maxprice || Number.MAX_VALUE;
      onFilter(min, max);
    }

    return(

        <main className='container'>
            <form onSubmit={handleSubmit} className='form-filter'>
                <div className='min-price'>
                    <input 
                    name='minprice'
                    value={formData.minprice || ""}
                    type="text" 
                    placeholder='Preço mínimo'
                    onChange={handleInputChange} 
                    />
                    
                </div>
                <div className='max-price'>
                    <input 
                    name='maxprice'
                    value={formData.maxprice|| ""}
                    type="text" 
                    placeholder='Preço máximo' 
                    onChange={handleInputChange}
                    />
                </div>
                <button className='filter-button'>
                    Filtrar
                </button>
            </form>
        </main>
    );
}