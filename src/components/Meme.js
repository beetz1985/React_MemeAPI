import React from 'react';
import data from '../memesData'

function Meme() {

    // const [newImageState, setState] = React.useState('');
    
    // function getMeme(e) {
    //     e.preventDefault();
    //     const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    //     setState(data.data.memes[randomIndex].url);
    // }


    const [state_one, setState_one] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [state_two, setState_two] = React.useState(data);

    function getMeme(e) {
        e.preventDefault();

        const memesArray = state_two.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);

        setState_one((s)=>{
            return {
                ...s,
                randomImage: memesArray[randomIndex].url
            }
        })
        


    }

    return (
        <main className="main-content">
            <form className="meme-form">
                <input className="meme-start" type="text" placeholder="Top Text"/>
                <input className="meme-end" type="text" placeholder="Bottom Text"/>
                <button onClick={getMeme}>Get New Meme Image &#128444;&#65039;</button>
            </form>
            <div className="image-container">
                <h2>{state_one.topText}</h2>
                {(state_one.randomImage) ? <img className="meme-image" src={state_one.randomImage} alt="img"/> : ''}
                <h2>{state_one.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme