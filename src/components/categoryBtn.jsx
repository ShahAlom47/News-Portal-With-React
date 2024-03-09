import { useEffect, useState } from "react"

export default function CategoryBtn({id}) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/categories`)
            .then(res => res.json())
            .then(data => setData(data.data.news_category))

    }, [])


    return (
       
        <div id="category-btn-container" className=" flex  flex-wrap justify-center  mb-3 gap-3">
          {
            data.map(item => <button onClick={()=>id(item.category_id)} className='btn btn-sm'>{item.category_name}</button>)
          }
        
        </div>
  
    )
}