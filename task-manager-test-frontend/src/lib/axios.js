import axios from 'axios'

// Instance Axios partagée : la base URL vient du fichier .env (VITE_API_BASE_URL)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

// Normalise les erreurs : on récupère le message renvoyé par l'API si possible
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ?? error.message ?? 'Erreur inconnue'
    return Promise.reject(new Error(message))
  },
)

export default api
