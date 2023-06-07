import './style.css';

export default function Header(){
    return(
        <header>
            <div className='container header-container-config'>
                <div className='logo'>
                    <h1> DSFilter</h1>
                </div>
                <div className='qnt-products'>
                    <p>6 Produto(s)</p> 
                </div>
            </div>
        </header>
    );
}