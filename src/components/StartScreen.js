import React from 'react'
import './StartScreen.css'

const StartScreen = props => {
    return (
        <div className="container screen">
            <div className="text-center">
                <h1 className="app-title">
                    CONNECT<span>4</span>
                </h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-primary start-game-button">
                        INVITE A FRIEND
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StartScreen
