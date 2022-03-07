import iconeSucesso from '../../assets/icone-sucesso.svg';
import './styles.css';

function ModalSucessoAlterarCadastro() {

  return (
    <div className="modal-sucesso-usuario">
      <div className="cadastro-sucesso">
        <img src={iconeSucesso} alt="Cadastro bem sucedido" />
        <h3>Cadastro alterado com sucesso!</h3>
      </div>
    </div>
  )
}

export default ModalSucessoAlterarCadastro;