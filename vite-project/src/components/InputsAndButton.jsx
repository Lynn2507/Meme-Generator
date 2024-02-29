import './InputsAndButton.css'


export default function InputsAndButton() {
    return (
        <div>
            <div className='input-fields'>
                <input className='meme-search' type='text' placeholder='Strangle You'/>
                <input className='id' type='text' placeholder='or kill me'/>
            </div>
            <button>Get a new meme! 🤪</button>
        </div>
    )
}