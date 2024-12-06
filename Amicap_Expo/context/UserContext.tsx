import React, { useState, createContext, useContext, ReactNode } from "react";
import DBDomain from "@/constants/dbDomain";

// Define el tipo para el contexto
interface Usuario {
  id: number;
  username: string;
  email: string;
}

interface UserContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  usuario: Usuario | null;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  mensaje: string | null;
  setMensaje: React.Dispatch<React.SetStateAction<string | null>>
  registrarAtaque: () => Promise<void>;
}

// Crea un contexto con un valor predeterminado
const UserContext = createContext<UserContextType | undefined>(undefined);

// Crea un componente proveedor
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const registrarAtaque = async () => {
    const urlApi = `${DBDomain}/api/ataque/` + usuario?.id;
  
    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create attack');
      }
      const data = await response.json();
      if (!data || data === null) {
        throw new Error('data failed to response');
      }
    } catch (error) {
      console.log('Hubo un error en el registar ataque: ', error);
    }
  };

  return (
    <UserContext.Provider value={{ token, setToken, usuario, setUsuario, mensaje, setMensaje, registrarAtaque }}>
      {children}
    </UserContext.Provider>
  );
};

// Crea un hook personalizado para usar el contexto
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
