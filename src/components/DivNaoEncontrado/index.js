import './style.css'
import iconNaoEcontrado from '../../assets/icon-naoEncontrado.svg'


function NaoEncontrado(){
    return (
        <div className='nao-encontrado'>
            <img src={iconNaoEcontrado} alt="Não Encontrado" />
        </div>
    );
};

export default NaoEncontrado;