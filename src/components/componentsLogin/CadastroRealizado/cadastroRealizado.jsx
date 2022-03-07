import './style.css'
import confirmacaoCadastro from '../../../assets/confirmacaoCadastro.svg'
import barraVerde from '../../../assets/barraVerde.svg'
import barraBranca from '../../../assets/barraBranca.svg'
import { NavLink } from 'react-router-dom'


function CadastroRealizado({ setEtapaSenha }) {
    return (
        <div className='cadastro-realizado'>
            <div className="card-confirmacao">
                <img src={confirmacaoCadastro} alt="Confirmação Cadastro" />
                <h2>Cadastro realizado com sucesso!</h2>
            </div>
            <NavLink to='/' ><button className='btn-login'>Ir para Login</button></NavLink>

            <footer>
                <div>
                    <img onClick={() => setEtapaSenha('primeira')} className="footer-barra" src={barraBranca} alt="Barra-Verde" />
                    <img onClick={() => setEtapaSenha('segunda')} className="footer-barra" src={barraBranca} alt="Barra-Branca" />
                    <img className="footer-barra" src={barraVerde} alt="Barra-Branca" />

                </div>
            </footer>
        </div>
    );
}

export default CadastroRealizado;