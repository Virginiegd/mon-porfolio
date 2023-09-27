import Header from '../components/Header'
import Error from '../components/Error'

// Page d'erreur

function Error404() {
    return (
        <div>
            <Header/>
            <main>
                <Error/>
            </main>    
        </div>
    )
}

export default Error404