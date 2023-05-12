import photo1 from "../assets/photo1.jpg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import sass from "../assets/sass.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import nodejs from "../assets/node-js.png"

function Body() {

    return (
        <div className="container">
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
            <div className="icones">
                <ul className="languages">
                    <li><img className="html" src={html} alt="HTML"/></li>
                    <li><img className="css" src={css} alt="CSS"/></li>
                    <li><img className="js" src={js} alt="Javascript"/></li>
                </ul>
                <ul className="languages">
                    <li><img className="sass" src={sass} alt="Sass"/></li>
                    <li><img className="nodejs" src={nodejs} alt="Node JS"/></li>
                    <li><img className="react" src={react} alt="React"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Body