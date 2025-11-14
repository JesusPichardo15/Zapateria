import { useState } from "react";
import TabNavigation from "./components/TabNavigation";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Producto";
import TiposProducto from "./pages/TipoProductos";
import Marcas from "./pages/Marcas";
import Ventas from "./pages/Ventas";
import DetalleVenta from "./pages/DetalleVenta";

export default function App() {
  const tabs = [
    "Clientes",
    "Productos",
    "TiposProducto",
    "Marcas",
    "Ventas",
    "DetalleVenta",
  ];

  const [active, setActive] = useState("Clientes");

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <TabNavigation tabs={tabs} active={active} setActive={setActive} />

      <div className="p-4">
        {active === "Clientes" && <Clientes />}
        {active === "Productos" && <Productos />}
        {active === "TiposProducto" && <TiposProducto />}
        {active === "Marcas" && <Marcas />}
        {active === "Ventas" && <Ventas />}
        {active === "DetalleVenta" && <DetalleVenta />}
      </div>
    </div>
  );
}
