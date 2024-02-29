import './Nav.css'
import shrekMeme from '../assets/shrek-meme.gif'



export default function Nav() {
    return (
        <div>
            <nav>
                <img className='nav-meme' src={shrekMeme} alt='loading...'></img>
                <h3>Meme Generator</h3>
                <h5>My 2nd React Project</h5>
            </nav>
        </div>
    )
}