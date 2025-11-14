import TableCRUD from "../components/TableCRUD";

export default function TiposProducto() {
  return (
    <TableCRUD table="tipoproducto" fields={["id_tipo", "nombre_tipo"]} />
  );
}
