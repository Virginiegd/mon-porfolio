import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Openclassrooms() {
    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        fetch(`openclassrooms.json`)
            .then((res)=> res.json())
            .then((data) => {
                console.log(data)
                setProjectList(data)
            })
    }, []);

    return (
    <div>
        <h1>Mes projets</h1>
        <h2>Openclassrooms</h2>
        <section>
            <div>
                <ul>
                    {projectList.map((project) => (
                        <li key={project.id}>
                            <Link to={project.url}><img src={project.picture} alt={project.project} title='Cliquez ici pour voir le site'/></Link>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </li>
                    )) }
                </ul>
            </div>
        </section>
    </div>
    )
}

export default Openclassrooms