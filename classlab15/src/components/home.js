import React from 'react'
import flower from '../images/flower.jpg'

const Home = function(){
    return(<>
        <header className="header">
            <h1 className="headertitle">Homepage</h1>
        </header>

        <main className="maincontainer">
            <div>
                <img src = {flower} />
            </div>
        </main>
        </>)
}

export default Home