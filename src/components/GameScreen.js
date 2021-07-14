import React, { useState } from 'react'
import Board from './Board'
import './GameScreen.css'

const GameScreen = props => {
    const [nextMover, setNextMover] = useState('O')
    const [playerColor, setPlayerColor] = useState('O')

    return (
        <div className="container screen">
            <div className="row justify-content-center move-indicator o-move">
                <div className="col-md-12 text-center">WAIT FOR MOVE</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Board></Board>
                </div>
            </div>
        </div>
    )
}

export default GameScreen
