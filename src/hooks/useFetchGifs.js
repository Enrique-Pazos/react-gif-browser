import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGifs(category)
      setImages(newImages)
      setIsLoading(false)
    }
  
    useEffect(() => {
      getImages()
    }, [])//[vacio]=solo ejecuta la primera vez que se renderiza  

  return{
    images,
    isLoading,
  }
}

export default useFetchGifs