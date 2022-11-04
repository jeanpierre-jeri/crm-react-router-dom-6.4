export async function obtenerClientes() {
  const data = await fetch(import.meta.env.VITE_API_URL).then((resp) => resp.json())
  return data
}

export async function obtenerCliente(id) {
  const data = await fetch(`${import.meta.env.VITE_API_URL}/${id}`).then((resp) => resp.json())
  return data
}

export async function agregarCliente(datos) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

export async function eliminarCliente(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    })

    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}
