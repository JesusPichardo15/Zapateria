import TableCRUD from "../components/TableCRUD";

export default function Marcas() {
  return <TableCRUD table="marca" fields={["id_marca", "nombre_marca"]} />;
}
