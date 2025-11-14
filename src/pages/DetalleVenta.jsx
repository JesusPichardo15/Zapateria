import TableCRUD from "../components/TableCRUD";

export default function DetalleVenta() {
  return (
    <TableCRUD
      table="detalleventa"
      fields={["id_detalle", "id_venta", "id_producto", "cantidad", "precio_venta"]}
    />
  );
}
