import Rate from "../components/rate"
import { useEffect, useState } from 'react'

function Outils(props) {
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
                <ul>
                    {outilsList.map((outils) => (
                        <li key={outils.id}>
                            <h3>{outils.title}</h3>
                            <Rate rating={outils.rating}/>
                        </li>
                    )) }
                </ul>
        </div>
    )
}

export default Outils

/*
 */