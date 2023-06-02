import photo1 from "../assets/photo1.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import sass from "../assets/sass.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import nodejs from "../assets/node-js.png"

function Body() {

    return (
        <div className="container">
           <div className="image-tape image-tape--3">
                <div className="info">
                    <img className="photo1" src={photo1} alt="Giroud Virginie" />
                    <div>
                        <h1> Qui suis-je ? </h1>
                        <ul>
                            <li>GIROUD Virginie </li>
                            <li className="txt">37 ans</li>
                            <li className="txt">Développeuse Web Fullstack</li>
                        </ul>
                        <ul>
                            <li className="txt">Permis B (véhiculée)</li>
                            <li className="txt">RQTH/OETH (poste aménagé)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="icones">
                <ul className="languages">
                    <li><img src={html} alt="HTML" /></li>
                    <li><img src={css} alt="CSS" /></li>
                    <li><img src={js} alt="Javascript" /></li>
                    <li><img src={sass} alt="Sass" /></li>
                    <li><img src={nodejs} alt="Node JS" /></li>
                    <li><img src={react} alt="React" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Body