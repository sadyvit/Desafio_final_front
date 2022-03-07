import { NavLink } from 'react-router-dom';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

function Sidebar({ imagemHome, imagemClientes, imagemCobranca }) {
    const {
        fecharModalCadastrarCliente,
        fecharModalCadastroCobranca,
        fecharModalEditarCliente,
        fecharModalEditarCobranca,
        fecharModalDetalheCobranca,
        fecharModalExcluirCobranca,
        setClickFiltroClientes,
        setClickFiltroCobrancas
    } = useGlobal();

    function fecharModais() {
        fecharModalCadastrarCliente();
        fecharModalCadastroCobranca();
        fecharModalEditarCliente();
        fecharModalEditarCobranca();
        fecharModalDetalheCobranca();
        fecharModalExcluirCobranca();
        setClickFiltroClientes('');
        setClickFiltroCobrancas('');
    }
    return (
        <div className="sidebar">
            <NavLink to='/home' onClick={fecharModais}>
                <div className='home-sidebar'>
                    <img src={imagemHome}
                        alt="Home" />
                    <p>Home</p>
                </div>
            </NavLink>
            <NavLink to='/clientes' onClick={fecharModais}>
                <div className='cliente-sidebar'>
                    <img src={imagemClientes}
                        alt="Clientes" />
                    <p>Clientes</p>
                    <div className='border-sidebar'></div>
                </div>
            </NavLink>
            <NavLink to='/cobrancas' onClick={fecharModais}>
                <div className='cobranca-sidebar'>
                    <img src={imagemCobranca}
                        alt="Cobrança" />
                    <p>Cobranças</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Sidebar;