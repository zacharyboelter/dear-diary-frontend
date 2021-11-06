import React from 'react'
import './pages-styles.css';

function Startpage() {
    return (
        <div className="wrapper">
            <h3>Welcome to...</h3>
            <div className="main">
                <span class="letter"></span>
                <span>H</span>
                <span>∙</span>
                <span>D</span>
                <span>E</span>
                <span>A</span>
                <span>R</span>
                <span>∙</span>
                <span>D</span>
                <span>I</span>
                <span>A</span>
                <span>R</span>
                <span>Y</span>
            </div>
            <h3><a href=""><button className='button'>Tell Me About Your Day ➔</button></a> </h3>
            <p>a diary for developers</p>
        </div>
    )
}

export default Startpage
