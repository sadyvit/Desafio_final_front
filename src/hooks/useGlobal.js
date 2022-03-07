import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

function useGlobal() {
    return useContext(GlobalContext);
}

export default useGlobal;