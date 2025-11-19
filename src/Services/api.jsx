import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function loginUsuario({ email, password }) {
  try {
    const res = await axios.post(
      `${API_URL}/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    return { success: true, token: res.data.token, message: res.data.message };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Erro no servidor",
    };
  }
}
