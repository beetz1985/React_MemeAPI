

function Meme() {



    function handleClick(e) {
        e.preventDefault();
        console.log(e);
    }


    return (
        <main className="main-content">
            <form className="meme-form">
                <input className="meme-start" type="text" placeholder="Top Text"/>
                <input className="meme-end" type="text" placeholder="Bottom Text"/>
                <button onClick={handleClick}>Get New Meme Image &#128444;&#65039;</button>
            </form>
            
        </main>
    )
}

export default Meme