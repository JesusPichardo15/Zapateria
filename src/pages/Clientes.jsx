import TableCRUD from "../components/TableCRUD";

export default function Clientes() {
  return (
    <TableCRUD
      table="cliente"
      fields={["id_cliente", "nombre", "apellido", "telefono", "email"]}
    />
  );
}
