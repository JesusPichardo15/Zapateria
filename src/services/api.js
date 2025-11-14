const API_URL = "http://localhost:3306"; // cambia tu puerto

export const fetchData = async (table) => {
  const res = await fetch(`${API_URL}/${table}`);
  return await res.json();
};

export const createItem = async (table, data) => {
  const res = await fetch(`${API_URL}/${table}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateItem = async (table, id, data) => {
  const res = await fetch(`${API_URL}/${table}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

  export const deleteItem = async (table, id) => {
    const res = await fetch(`${API_URL}/${table}/${id}`, {
      method: "DELETE",
    });
    return await res.json();


};

export const searchItem = async(table,id) => {
    const res = await fetch(`${API_URL}/${table}/${id}`,{
      method: "POST"
    });
};
