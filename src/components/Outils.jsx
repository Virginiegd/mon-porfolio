import Rate from "../components/rate"
import { useEffect, useState } from 'react'

function Outils() {
    const [outilsList, setOutilsList] = useState([])

    useEffect(() => {
        fetch(`outils.json`)
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                setOutilsList(data)
            })
    }, []);

    return (
        <div className="container">
            <div className="skillcontainer">
            <h2 className="skill">Outils</h2>
            <ul className="competenceslist">
                {outilsList.map((outils) => (
                    <li key={outils.id}>
                        <h3>{outils.title}</h3>
                        <Rate rating={outils.rating}/>
                    </li>
                )) }
            </ul>
            </div>
        </div>
        
    )
}

export default Outils