import TableCRUD from "../components/TableCRUD";

export default function Ventas() {
  return (
    <TableCRUD
      table="venta"
      fields={["id_venta", "fecha_venta", "total_venta", "id_cliente"]}
    />
  );
}
