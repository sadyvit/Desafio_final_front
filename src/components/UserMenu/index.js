import iconeEditar from '../../assets/icone-editar.svg';
import iconeSair from '../../assets/icone-sair.svg';
import iconeSeta from '../../assets/icone-seta.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import useGlobal from '../../hooks/useGlobal';
import './styles.css';

function UserMenu() {
  const [abrirOpcoesUsuario, setAbrirOpcoesUsuario,] = useState(false);
  const { setAbrirEditarUsuario, setUsuarioEdicao, dadosUsuario } = useGlobal();
  const { logout, nomeUsuarioHeader, primeiraInicialHeader, segundaInicialHeader } = useAuth();
  const navigate = useNavigate();

  function goTo(path) {
    navigate(path);
  }

  function abrirModalEditar() {
    setAbrirEditarUsuario(true);
    setAbrirOpcoesUsuario(false);
    setUsuarioEdicao(dadosUsuario)
  }

  return (
    <div className="user-header">
      <span className="iniciais-usuario">{(primeiraInicialHeader + segundaInicialHeader).toUpperCase()}</span>
      <span className="nome-usuario">{nomeUsuarioHeader}</span>
      <img className="img-abrir-menu" src={iconeSeta} alt="Abrir menu"
        onClick={() => setAbrirOpcoesUsuario(!abrirOpcoesUsuario)} />

      {abrirOpcoesUsuario && <div className="usuario-opcoes">
        <div className="seta-opcoes"></div>
        <div className="usuario-opcao usuario-editar" onClick={abrirModalEditar}>
          <img src={iconeEditar} alt="Ícone editar" />
          <span>Editar</span>
        </div>
        <div className="usuario-opcao">
          <img onClick={() => logout(() => goTo('/'))} src={iconeSair} alt="Ícone sair" />
          <span>Sair</span>
        </div>
      </div>}
    </div>
  )
}

export default UserMenu;