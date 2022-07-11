import { useEffect, useState } from "react"
import "./list.css"

function List() {
    let [description, setDescription] = useState([])

    useEffect(() => {

        fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json")
            .then(r => r.json())
            .then(r => setDescription(r.Results))
    })


    return (

        <ul className="list">
            {description.map((e) => {
                return (<li key={Math.random()}>
                    <div className="variable">{e.Name}</div>
                    <div className="description">{e.Description.replace(/<p>|<ul>|<|p>|li>|ul>|\//g, "")}</div>
                </li>)
            })}
        </ul>
    )
}

export default List