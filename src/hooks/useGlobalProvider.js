import { useState } from "react";
import { useLocalStorage } from "react-use";


function useGlobalProvider() {
  const [abrirEditarUsuario, setAbrirEditarUsuario] = useState(false);
  const [alteracaoUsuarioSucesso, setAlteracaoUsuarioSucesso] = useState(false);
  const [exibirToast, setExibirToast] = useState(false);
  const [usuarioEdicao, setUsuarioEdicao] = useState(false);
  const [abrirModalCadastroCliente, setAbrirModalCadastroCliente] = useState(false);
  const inputUsuarioVazio = { nome_usuario: "", email: "", cpf: "", telefone: "", senha: "", confirmarSenha: "" }
  const inputClienteVazio = { nome_cliente: "", email: "", cpf: "", telefone: "", logradouro: "", complemento: "", cep: "", bairro: "", cidade: "", estado: "" }
  const [nomeClienteModalCobranca, setNomeClienteModalCobranca] = useState("");
  const inputCobrancasVazio = { descricao: "", vencimento: "", valor: "" };
  const [clientesList, setClientesList] = useState([]);
  const [clientesListTemp, setClientesListTemp] = useState([]);
  const [abrirModalCadastroCobrancas, setAbrirModalCadastroCobrancas] = useState(false);
  const [mensagemToast, setMensagemToast] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const [clienteDetalhado, setClienteDetalhado] = useState({ nome_cliente: "", email: "", cpf: "", telefone: "", logradouro: "", complemento: "", cep: "", bairro: "", cidade: "", estado: "" });
  const [abrirModalEditarCliente, setAbrirModalEditarCliente] = useState(false);
  const [abrirModalDetalharCobranca, setAbrirModalDetalharCobranca] = useState(false);
  const [abrirModalEdicaoCobranca, setAbrirModalEdicaoCobranca] = useState(false);
  const [editarClienteSucesso, setEditarClienteSucesso] = useState(false);
  const [cobrancasList, setCobrancasList] = useState([]);
  const [cobrancasListTemp, setCobrancasListTemp] = useState([]);
  const [idCliente, setIdCliente, removeIdCliente] = useLocalStorage('idCliente', "");
  const [idCobranca, setIdCobranca, removeIdCobranca] = useLocalStorage('idCobranca', "");
  const [clienteEdicao, setClienteEdicao] = useState(false);
  const [cobrancasListDetalhar, setCobrancasListDetalhar] = useState([]);
  const [cobrancaClienteDetalhar, setCobrancaClienteDetalhar] = useState([]);
  const [cobrancaEdicao, setCobrancaEdicao] = useState(false);
  const [abrirModalExcluirCobranca, setAbrirModalExcluirCobranca] = useState(false);
  const [cobrancaAExcluir, setCobrancaAExcluir] = useState(inputCobrancasVazio);
  const [clientesInadimplentes, setClientesInadimplentes] = useState([]);
  const [clientesEmDia, setClientesEmDia] = useState([]);
  const [clickFiltroClientes, setClickFiltroClientes] = useState('');
  const [cobrancasVencidas, setCobrancasVencidas] = useState([]);
  const [cobrancasPrevistas, setCobrancasPrevistas] = useState([]);
  const [cobrancasPagas, setCobrancasPagas] = useState([]);
  const [clickFiltroCobrancas, setClickFiltroCobrancas] = useState('');
  const [totalCobrancas, setTotalCobrancas] = useState(0);
  const [totalClientes, setTotalClientes] = useState(0);

  function fecharModalCadastrarCliente() {
    setAbrirModalCadastroCliente(false);
  }

  function fecharModalCadastroCobranca() {
    setAbrirModalCadastroCobrancas(false);
  }

  function fecharModalEditarCliente() {
    setAbrirModalEditarCliente(false);
  }

  function fecharModalEditarCobranca() {
    setAbrirModalEdicaoCobranca(false);
    fecharModalDetalheCobranca();
  }

  function fecharModalDetalheCobranca() {
    setAbrirModalDetalharCobranca(false);
  }

  function abrirModalCadastrarCobranca(cliente) {
    setIdCliente(cliente.id);
    setNomeClienteModalCobranca(cliente.nome_cliente)
    setAbrirModalCadastroCobrancas(true);
  }

  function abrirModalEditarCobrancaPageCliente(cobranca) {
    setIdCobranca(cobranca.id);
    setIdCliente(cobranca.cliente_id);
    setNomeClienteModalCobranca(clienteDetalhado.nome_cliente);
    setAbrirModalEdicaoCobranca(true);
  }

  function abrirModalEditarCobranca(cobranca) {
    setIdCobranca(cobranca.id);
    setIdCliente(cobranca.cliente_id);
    setNomeClienteModalCobranca(cobranca.nome_cliente);
    setAbrirModalEdicaoCobranca(true);
  }

  function abrirModalDetalheCobrancaPageCliente(cobranca) {
    setIdCobranca(cobranca.id);
    setNomeClienteModalCobranca(clienteDetalhado.nome_cliente);
    setAbrirModalDetalharCobranca(true);
  }

  function abrirModalDetalheCobranca(cobranca) {
    setIdCobranca(cobranca.id);
    setNomeClienteModalCobranca(cobranca.nome_cliente);
    setAbrirModalDetalharCobranca(true);
  }
  function fecharModalExcluirCobranca() {
    setAbrirModalExcluirCobranca(false);
    fecharModalDetalheCobranca();
  }
  function handleClickModalExcluir(cobranca) {
    setIdCobranca(cobranca.id)
    setAbrirModalExcluirCobranca(true)
    setCobrancaAExcluir(cobranca)
  }
  return {
    abrirEditarUsuario,
    setAbrirEditarUsuario,
    alteracaoUsuarioSucesso,
    setAlteracaoUsuarioSucesso,
    exibirToast,
    setExibirToast,
    usuarioEdicao,
    setUsuarioEdicao,
    inputUsuarioVazio,
    abrirModalCadastroCliente,
    setAbrirModalCadastroCliente,
    inputClienteVazio,
    clientesList,
    setClientesList,
    clientesListTemp,
    setClientesListTemp,
    abrirModalCadastroCobrancas,
    setAbrirModalCadastroCobrancas,
    nomeClienteModalCobranca,
    setNomeClienteModalCobranca,
    inputCobrancasVazio,
    mensagemToast,
    setMensagemToast,
    tipoMensagem,
    setTipoMensagem,
    clienteDetalhado,
    setClienteDetalhado,
    abrirModalEditarCliente,
    setAbrirModalEditarCliente,
    editarClienteSucesso,
    setEditarClienteSucesso,
    fecharModalCadastrarCliente,
    fecharModalCadastroCobranca,
    fecharModalEditarCliente,
    cobrancasList,
    setCobrancasList,
    cobrancasListTemp,
    setCobrancasListTemp,
    idCliente,
    setIdCliente,
    abrirModalCadastrarCobranca,
    clienteEdicao,
    setClienteEdicao,
    cobrancasListDetalhar,
    setCobrancasListDetalhar,
    cobrancaClienteDetalhar,
    setCobrancaClienteDetalhar,
    abrirModalEdicaoCobranca,
    setAbrirModalEdicaoCobranca,
    fecharModalEditarCobranca,
    idCobranca,
    setIdCobranca,
    abrirModalEditarCobranca,
    abrirModalEditarCobrancaPageCliente,
    abrirModalDetalheCobrancaPageCliente,
    abrirModalDetalharCobranca,
    setAbrirModalDetalharCobranca,
    abrirModalDetalheCobranca,
    fecharModalDetalheCobranca,
    cobrancaEdicao,
    setCobrancaEdicao,
    abrirModalExcluirCobranca,
    setAbrirModalExcluirCobranca,
    fecharModalExcluirCobranca,
    cobrancaAExcluir,
    setCobrancaAExcluir,
    handleClickModalExcluir,
    clickFiltroClientes,
    setClickFiltroClientes,
    clientesInadimplentes,
    setClientesInadimplentes,
    clientesEmDia,
    setClientesEmDia,
    cobrancasVencidas,
    setCobrancasVencidas,
    cobrancasPrevistas,
    setCobrancasPrevistas,
    cobrancasPagas,
    setCobrancasPagas,
    clickFiltroCobrancas,
    setClickFiltroCobrancas,
    totalCobrancas,
    setTotalCobrancas,
    totalClientes,
    setTotalClientes
  }
}

export default useGlobalProvider;