import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
  const [categoria, setcategoria] = useState('general')
  const [noticias, setnoticias] = useState([])
  const [pagina, setpagina] = useState(1)
  const [totalNoticias, settotalNoticias] = useState(0)
  const handleChangeCategoria = e => {
    setcategoria(e.target.value)
  }

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apikey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)
      setnoticias(data.articles)
      settotalNoticias(data.totalResults)
      setpagina(1)
    }
    consultarAPI()
  }, [categoria])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&page=${pagina}&apikey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios(url)

      setnoticias(data.articles)
      settotalNoticias(data.totalResults)
    }
    consultarAPI()
  }, [pagina])

  const handleChangePagina = (e, valor) => {
    setpagina(valor)
  }


  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export default NoticiasProvider
