import linkedin from "../assets/linkedin.png"
import home from "../assets/home.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"

function Info() {

    return (
        <div className="container">
            <h1>Contactez-moi</h1>
            <ul>
                <li><img className="icone" src={email} alt="email" /><a href="mailto:contact@virginie-giroud.fr">contact@virginie-giroud.fr</a> </li>
                <li><img className="icone" src={phone} alt="phone" />06 89 95 70 03</li>
                <li><img className="icone" src={linkedin} alt="linkedin" /><a href="https://www.linkedin.com/in/virginiegiroud/" target="_blank" rel="noreferrer">@virginiegiroud</a></li>
                <li><img className="icone" src={home} alt="maison" />38450 - Vif</li>
            </ul>
        </div>
    )
}

export default Info