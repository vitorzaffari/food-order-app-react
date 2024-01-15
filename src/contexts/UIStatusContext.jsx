import { createContext, useState } from "react";

const UIStatusContext = createContext({
    status:'',
    openModal: () => {},
    closeModal: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
})




 export const UIStatusContextProvider = ({children}) => {

    const [status, setStatus] = useState('');
    
    function openModal() {
        setStatus('modal-open');
    }
    function closeModal() {
        setStatus('');
    }
    
    function showCheckout() {
        setStatus('checkout-open');
    }
    function hideCheckout() {
        setStatus('modal-open');
    }




    const uIStatusContext = {
        status,
        openModal,
        closeModal,
        showCheckout,
        hideCheckout
    }

    return (
        <UIStatusContext.Provider value={uIStatusContext}>
            {children}
        </UIStatusContext.Provider>
    )
}

export default UIStatusContext;