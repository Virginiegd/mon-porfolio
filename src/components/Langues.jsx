import Rate from "./Rate"
import { useEffect, useState } from 'react'

function Langues() {
    const [languesList, setLanguesList] = useState([])

    useEffect(() => {
        fetch(`langues.json`)
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                setLanguesList(data)
            })
    }, []);

    return (
        <div className="container">
            <div className="skillcontainer">
                <h2 className="skill">Langues</h2>
                <ul className="competenceslist">
                    {languesList.map((langues) => (
                        <li key={langues.id}>
                            <h3>{langues.title}</h3>
                            <Rate rating={langues.rating}/>
                        </li>
                    )) }
                </ul>
                </div>
        </div>
    )
}

export default Langues












