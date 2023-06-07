import './style.css';

export default function Filter(){
    return(
        <main className='container'>
            <form className='form-filter'>
                <div className='min-price'>
                    <input type="text" placeholder='Preço mínimo' />
                </div>
                <div className='max-price'>
                    <input type="text" placeholder='Preço máximo' />
                </div>
                <button className='filter-button'>
                    Filtrar
                </button>
               
            </form>
        </main>
    );
}