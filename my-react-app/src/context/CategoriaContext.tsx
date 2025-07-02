import { createContext, useContext, useState, ReactNode } from "react";

interface Categoria {
  nombre: string;
  descripcion: string;
}

interface CategoriaContextType {
  categorias: Categoria[];
  agregarCategoria: (categoria: Categoria) => void;
}

const CategoriaContext = createContext<CategoriaContextType | undefined>(undefined);

export const CategoriaProvider = ({ children }: { children: ReactNode }) => {
  const [categorias, setCategorias] = useState<Categoria[]>([
    { nombre: "Geometría", descripcion: "" },
    { nombre: "Álgebra", descripcion: "" },
    { nombre: "Estadística", descripcion: "" },
  ]);

  const agregarCategoria = (categoria: Categoria) => {
    setCategorias(prev => [...prev, categoria]);
  };

  return (
    <CategoriaContext.Provider value={{ categorias, agregarCategoria }}>
      {children}
    </CategoriaContext.Provider>
  );
};

export const useCategoria = () => {
  const context = useContext(CategoriaContext);
  if (!context) throw new Error("useCategoria must be used inside CategoriaProvider");
  return context;
};
