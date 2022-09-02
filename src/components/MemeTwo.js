import React from "react";

//https://api.imgflip.com/get_memes


function MemeTwo() {

    const [formState, setFormState] = React.useState({
        topText: "",
        btmText: "",
        memeURL: "" 
    });

    function handleChange(e) {

        const {name, value} = e.target;

        setFormState((s)=>{
            const obj = {...s};
            obj[name] = value;
            return obj;
        })
    }

    const [memeData, setMemeData] = React.useState([]);

    React.useEffect(()=>{
        fetch(`https://api.imgflip.com/get_memes`)
            .then(v=>v.json())
            .then(v=>setMemeData(v.data.memes))
    }, [])

    function handleClick(e) {
        e.preventDefault();
        
        const indx = Math.floor(Math.random() * memeData.length);
        const randomImage = memeData[indx].url;

        setFormState((s)=>{
            const obj = {...s};
            obj.memeURL = randomImage;
            return obj;
        })
    }

    console.log(formState);

    return (
        <main className="main-content">

            <form className="meme-form">
                <input 
                    value={formState.topText} 
                    name="topText" 
                    type="text" 
                    placeholder="Top Text"
                    className="meme-start" 
                    onChange={handleChange}
                />
                <input 
                    value={formState.btmText} 
                    name="btmText" 
                    type="text" 
                    placeholder="Bottom Text"
                    className="meme-end" 
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Get Meme</button>
            </form>

            <div className="image-container">
                {(formState.memeURL) && <h2>{formState.topText}</h2>}
                {(formState.memeURL) && <img className="meme-image" src={formState.memeURL} alt="img"/>}
                {(formState.memeURL) && <h2>{formState.btmText}</h2>}
            </div>

        </main>
    )
}

export default MemeTwo