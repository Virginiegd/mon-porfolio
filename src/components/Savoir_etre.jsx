import Rate from "./Rate"
import { useEffect, useState } from 'react'

function Savoiretre() {
    const [savoiretreList, setSavoiretreList] = useState([])

    useEffect(() => {
        fetch(`savoiretre.json`)
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                setSavoiretreList(data)
            })
    }, []);

    return (
        <div className="container">
            <div className="skillcontainer">
                <h2 className="skill">Savoir-être</h2>
                <ul className="competenceslist">
                    {savoiretreList.map((savoiretre) => (
                        <li key={savoiretre.id}>
                            <h3>{savoiretre.title}</h3>
                            <Rate rating={savoiretre.rating}/>
                        </li>
                    )) }
                </ul>
                </div>
        </div>
    )
}

export default Savoiretre












