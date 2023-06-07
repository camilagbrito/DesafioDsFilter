import { useState } from 'react';
import './style.css';

type FormData = {
    minprice?: number,
    maxprice?: number
}

export default function Filter(){

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event:any){
       const value = event.target.value;
       const name = event.target.name; 
       setFormData({...formData, [name]: value});
    }

    function handleSubmit(event:any){
      event.preventDefault();  
      console.log(formData.minprice || 0);
      console.log(formData.maxprice || Number.MAX_VALUE);
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