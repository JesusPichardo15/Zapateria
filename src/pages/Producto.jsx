import TableCRUD from "../components/TableCRUD";

export default function Productos() {
  return (
    <TableCRUD
      table="producto"
      fields={[
        "id_producto",
        "nombre_modelo",
        "talla",
        "precio_unitario",
        "stock",
        "id_tipo",
        "id_marca",
      ]}
    />
  );
}
