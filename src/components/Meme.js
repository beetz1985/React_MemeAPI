import React from 'react';
import data from '../memesData'

function Meme() {

    // const [newImageState, setState] = React.useState('');
    
    // function getMeme(e) {
    //     e.preventDefault();
    //     const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    //     setState(data.data.memes[randomIndex].url);
    // }

    const [memeData, setMemeImages] = React.useState(data);

    const [formState, setFormState] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    
    function handleChange(e) {
        const {name, value} = e.target;
        setFormState((s)=>{
            const obj = {...s}
            obj[name] = value
            return obj
        })
    }

    function getMeme(e) {
        e.preventDefault();

        const memesArray = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);

        setFormState((s)=>{
            return {
                ...s,
                randomImage: memesArray[randomIndex].url
            }
        })
    }

    return (
        <main className="main-content">

            <form className="meme-form">
                <input 
                    name="topText" 
                    value={formState.topText} 
                    className="meme-start" 
                    type="text" 
                    placeholder="Top Text" 
                    onChange={handleChange}
                />
                <input 
                    name="bottomText" 
                    value={formState.bottomText} 
                    className="meme-end" 
                    type="text" 
                    placeholder="Bottom Text" 
                    onChange={handleChange}
                />
                <button onClick={getMeme}>Get New Meme Image &#128444;&#65039;</button>
            </form>

            <div className="image-container">
                {formState.randomImage !== "" && <h2>{formState.topText}</h2>}
                {(formState.randomImage) ? <img className="meme-image" src={formState.randomImage} alt="img"/> : ''}
                {formState.randomImage !== "" && <h2>{formState.bottomText}</h2>}
            </div>

        </main>
    )
}

export default Meme