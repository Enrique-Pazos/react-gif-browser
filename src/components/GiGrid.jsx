import GifItem from "./GifItem"
import useFetchGifs from "../hooks/useFetchGifs"

export const GiGrid = ({ category }) => {

  const {images,isLoading}=useFetchGifs(category)

  console.log(isLoading)  

  return (
    <>
      <h3>{category}</h3>

      { 
        isLoading && <h2>Cargando...</h2>
      }

      

      <div  className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id}
            image={image}
            {...image}//uso del operador spread para enviar como props
            //todo que esté incluido en image, se pueden desestructurar los argumentos
            //en las props del componente hijo
            />
          ))
        }
      </div>
    </>
  )
}

