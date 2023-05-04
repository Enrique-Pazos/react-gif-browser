import { useState } from "react"
import{ AddCategory, GiGrid} from "./components"

const GifBrowserApp = () => {

    const [categories, setCategories] = useState(['One Piece'])

    const onAddCategory=(newCategory)=>{
      if (categories.includes(newCategory)) return;
      else{
        setCategories([newCategory,...categories])
      }
    }  

  return (
    <>
        <h1>Gif Browser</h1>
        
        <AddCategory
        onNewCategory={onAddCategory}
        />
        
          {categories.map((cat)=>(
          <GiGrid
          key={cat}
          category={cat}
          />
          ))             
          }      
    </>
  )
}
export default GifBrowserApp
