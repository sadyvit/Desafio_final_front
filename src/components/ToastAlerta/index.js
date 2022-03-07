
import Alert from '@mui/material/Alert';
import useGlobal from '../../hooks/useGlobal';
import useAuth from '../../hooks/useAuth';
import './styles.css';

function ToastAlerta({ mensagemToast, tipoMensagem }) {

  const { setExibirToast } = useGlobal();
  const { setExibirToastLogin } = useAuth();
  
  

  function fecharToast() {
    setExibirToast(false);
    setExibirToastLogin(false)
  }

  return (
    <Alert sx={{
      borderRadius: '10px',
      boxShadow: '0px 4px 42px rgba(0, 0, 0, 0.2)',
      backgroundColor: `${tipoMensagem !== 'erro' && '#C3D4FE'}`
    }}
      className='toast-alert'
      color={`${tipoMensagem !== 'erro' ? 'info' : 'error'}`}
      onClose={fecharToast}
      severity={tipoMensagem !== 'erro' ? 'success' : 'error'}>
      {mensagemToast}
    </Alert>
  );
}

export default ToastAlerta;