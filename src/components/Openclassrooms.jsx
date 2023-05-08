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
    <div className='container'>
        <h1>Mes projets</h1>
        <h2>Openclassrooms</h2>
        <section>
            <div>
                <ul className='card__openclassrooms'>
                    {projectList.map((project) => (
                        <li className='openclassrooms__project' key={project.id}>
                            <Link to={project.url} target="_blank">
                            <img src={project.picture} alt={project.project}  title='Cliquez ici pour voir le site'/>
                            <div className='title'><h3>{project.title}</h3></div>
                            </Link>
                        </li>
                    )) }
                </ul>
            </div>
        </section>
    </div>
    )
}

export default Openclassrooms