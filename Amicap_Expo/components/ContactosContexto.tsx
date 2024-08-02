// DialogContext.js
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface tiposContextoDialogo {
    dialogVisible: boolean;
    showDialog: () => void;
    hideDialog: () => void;
}

interface DialogProviderProps {
    children: ReactNode;
}

const contextoDefault: tiposContextoDialogo = {
    dialogVisible: false,
    showDialog: () => {},
    hideDialog: () => {},
};

const ContextoDialogo = createContext<tiposContextoDialogo>(contextoDefault);
console.log("contexto funka")
export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  
    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => setDialogVisible(false);
  
    return (
      <ContextoDialogo.Provider value={{ dialogVisible, showDialog, hideDialog }}>
        {children}
      </ContextoDialogo.Provider>
    );
  };

export const useDialog = () => useContext(ContextoDialogo);
