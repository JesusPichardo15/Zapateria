import { useEffect, useState } from "react";
import Modal from "./Modal";
import { fetchData, createItem, updateItem, deleteItem, searchItem } from "../services/api";

export default function TableCRUD({ table, fields }) {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState("add");
  const [form, setForm] = useState({});
  const [editId, setEditId] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const load = async () => setData(await fetchData(table));

  useEffect(() => {
    load();
  }, []);

  const openModal = (mode, item) => {
    setAction(mode);
    setConfirmDelete(false); // siempre resetear confirmación

    if (item) {
      setForm(item);
      setEditId(Object.values(item)[0]);
    } else {
      setForm({});
      setEditId(null);
    }

    setModalOpen(true);
  };

  const validate = () => {
    // VALIDAR BUSCAR / ELIMINAR
    if ((action === "search" || action === "delete") && !editId) {
      alert("Debes ingresar un ID.");
      return false;
    }

    // VALIDAR CAMPOS PARA AGREGAR / EDITAR
    if (action === "add" || action === "edit") {
      for (const key of fields) {
        if (!form[key] && form[key] !== 0) {
          alert(`El campo "${key}" es obligatorio.`);
          return false;
        }
      }
    }
    return true;
  };

  const submit = async () => {
    if (!validate()) return;

    // ELIMINACIÓN SEGURA
    if (action === "delete" && !confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    if (action === "add") await createItem(table, form);
    if (action === "edit") await updateItem(table, editId, form);
    if (action === "delete") await deleteItem(table, editId);
    if (action === "search") {
      const result = await searchItem(table, editId);
      setData(result ? [result] : []);
    }

    load();
    setModalOpen(false);
  };

  return (
    <div className="p-4">

      <div className="m-1 space-x-5">
        <button onClick={() => openModal("search")} className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Buscar</button>
        <button onClick={() => openModal("add")} className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Agregar</button>
        <button onClick={() => openModal("delete")} className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Eliminar</button>
        <button onClick={() => openModal("edit")} className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Editar</button>
        <button onClick={() => load()} className="bg-gray-700 text-white px-4 py-2 rounded mb-4">Ver Listado</button>
      </div>

      <div className="overflow-auto">
        <table className="w-full bg-white text-black rounded-lg shadow">
          <thead className="bg-gray-800 text-white">
            <tr>
              {fields.map((f) => (
                <th key={f} className="p-2">{f}</th>
              ))}
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-gray-300">
                {fields.map((f) => (
                  <td key={f} className="p-2">{row[f]}</td>
                ))}

                <td className="p-2 flex gap-2">
                  <button className="px-3 py-1 bg-yellow-600 text-white rounded" onClick={() => openModal("edit", row)}>Editar</button>
                  <button className="px-3 py-1 bg-red-700 text-white rounded" onClick={() => openModal("delete", row)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 capitalize">
          {action === "add"
            ? "Agregar"
            : action === "edit"
            ? "Editar"
            : action === "delete"
            ? "Eliminar"
            : "Buscar"}{" "}
          {table}
        </h2>

        {/* BUSCAR */}
        {action === "search" && (
          <div className="mb-3">
            <label>ID a buscar:</label>
            <input type="number" className="w-full p-2 border rounded" onChange={(e) => setEditId(e.target.value)} />
          </div>
        )}

        {/* ELIMINAR */}
        {action === "delete" && !confirmDelete && (
          <div className="mb-3">
            <label>ID a eliminar:</label>
            <input type="number" className="w-full p-2 border rounded" onChange={(e) => setEditId(e.target.value)} />
          </div>
        )}

        {/* CONFIRMAR ELIMINACIÓN */}
        {action === "delete" && confirmDelete && (
          <p className="text-red-600 font-bold">
            ¿Seguro que deseas eliminar el registro con ID {editId}?
          </p>
        )}

        {/* AGREGAR / EDITAR */}
        {(action === "add" || action === "edit") &&
          fields.map((key) => (
            <div key={key} className="mb-3">
              <label>{key}</label>
              <input
                className="w-full p-2 border rounded"
                value={form[key] || ""}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            </div>
          ))}

        <button
          onClick={submit}
          className="mt-4 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded"
        >
          {confirmDelete ? "Sí, eliminar" : "Confirmar"}
        </button>
      </Modal>
    </div>
  );
}
