import { useEffect, useState } from "react"
import CategoryBtn from "./categoryBtn"

export default function MainContainer() {
    const [id, setId] = useState('08')
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => setData(data.data))

    }, [id])

    let updateVlu = (Value) => { setId(Value) }
    //    details sshow hide 
    const [showDetail, setDetails] = useState(false)
    const [word, setWord] = useState('')

   
    return (
        <div>
            <CategoryBtn id={updateVlu}></CategoryBtn>
            {
                data.map((item) => {

                    let xx = item.details.slice(0,200)
                 


                    return (
                        <div className=" mb-3 card p-10  bg-base-100 shadow-xl flex-row items-start border-4">
                            <figure className="  w-4/12">
                                <img
                                    src={item.image_url}
                                    alt="Shoes"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-start py-0 space-y-3 flex-1">
                                <h1 className="text-2xl font-semibold">
                                    {item.title}
                                </h1>
                                <p className="text-gray-600 ">
                                    { showDetail? item.details :xx}
                                </p>
                                <div className="card-bottom flex justify-between w-full">
                                    <div className="author flex gap-2 justify-center">
                                        <img className="h-10 w-10 rounded-full " src={item.author.img} alt="" />
                                        <h4 className="text-xl font-medium">{item.author.name}</h4>
                                    </div>
                                    <div className="view">
                                        <p className="text-xl font-medium">{item.total_view}</p>
                                    </div>
                                    <div className="card-actions">
                                        <button onClick={() =>setDetails(!showDetail)} className="btn btn-circle font-bold text-4xl pb-2 text-blue-600">
                                            {showDetail ? 'x' : " → "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}