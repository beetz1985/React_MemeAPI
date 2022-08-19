import React from 'react';
import data from '../memesData'

function Meme() {

    const [newImageState, setState] = React.useState('');
    
    function getMeme(e) {
        e.preventDefault();
        const randomIndex = Math.floor(Math.random() * data.data.memes.length);
        setState(data.data.memes[randomIndex].url);
    }

    return (
        <main className="main-content">
            <form className="meme-form">
                <input className="meme-start" type="text" placeholder="Top Text"/>
                <input className="meme-end" type="text" placeholder="Bottom Text"/>
                <button onClick={getMeme}>Get New Meme Image &#128444;&#65039;</button>
            </form>

            {(newImageState) ? <img className="meme-image" src={newImageState} alt="img"/> : ''}
            
        </main>
    )
}

export default Meme