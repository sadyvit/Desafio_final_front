import AuthContext from './index';

import useAuthProvider from '../../hooks/useAuthProvider';

function AuthProvider({ children }) {
    const authentication = useAuthProvider();

    return (
        <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;