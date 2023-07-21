import Rate from "../components/rate"
import { useEffect, useState } from 'react'

function Logiciels(props) {
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
                <h2>Logiciels</h2>
                <ul>
                    {logicielsList.map((logiciels) => (
                        <li key={logiciels.id}>
                            <h3>{logiciels.title}</h3>
                            <Rate rating={logiciels.rating}/>
                        </li>
                    )) }
                </ul>
        </div>
    )
}

export default Logiciels












