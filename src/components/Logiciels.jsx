import Rate from "./Rate"
import { useEffect, useState } from 'react'

function Logiciels() {
    const [logicielsList, setLogicielsList] = useState([])

    useEffect(() => {
        fetch(`logiciels.json`)
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                setLogicielsList(data)
            })
    }, []);

    return (
        <div className="container">
            <div className="skillcontainer">
                <h2 className="skill">Logiciels</h2>
                <ul className="competenceslist">
                    {logicielsList.map((logiciels) => (
                        <li key={logiciels.id}>
                            <h3>{logiciels.title}</h3>
                            <Rate rating={logiciels.rating}/>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}

export default Logiciels












