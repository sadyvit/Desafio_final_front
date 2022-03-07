import Login from "./pages/Login/index";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Cadastro from "./components/componentsLogin/Cadastrese/cadastrese";
import AuthProvider from "./context/AuthContext/AuthProvider";
import { GlobalProvider } from "./contexts/globalContext";
import useAuth from "./hooks/useAuth";
import Home from './pages/Home';
import Clientes from './pages/Clientes/';
import Cobrancas from './pages/Cobrancas/';
import DetalharCliente from './pages/DetalharCliente';

function RotasProtegidas({ children, redirectTo }) {
  const auth = useAuth();
  return auth.token ? children : <Navigate to={redirectTo} />
}

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={
              <RotasProtegidas redirectTo={'/'}>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/clientes" element={<Clientes />} />
                  <Route path="/cobrancas" element={<Cobrancas />} />
                  <Route path="/clientes/detalhar" element={<DetalharCliente />} />
                </Routes>
              </RotasProtegidas>
            } />
          </Routes>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
