import React, { useState, createContext, useContext, ReactNode} from "react";

// Define el tipo para el contexto
interface Usuario {
    username:string;
    email:string;
}
interface UserContextType
{
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    usuario: Usuario | null;
    setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;

}

// Crea un contexto con un valor predeterminado
const UserContext = createContext<UserContextType | undefined>(undefined);

// Crea un componente proveedor
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [usuario, setUsuario]= useState<Usuario | null>(null);

  return (
    <UserContext.Provider value={{ token, setToken, usuario, setUsuario}}>
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