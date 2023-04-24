import photo1 from "../assets/photo1.jpg"

function Body() {

    return (
        <div>
            <div className="info">
                <img className="photo1" src={photo1} alt="Giroud Virginie"/>
                <div>
                    <h1> Qui suis-je ? </h1>
                    <ul> 
                        <li>GIROUD Virginie </li>
                        <li>Développeuse Web Fullstack</li>
                        <li>37 ans</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Body