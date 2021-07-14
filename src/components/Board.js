import React, { useState } from 'react'
import Square from './Square'
import { checkIfWinningState, columns } from '../connectFour.js'
import { range } from '../functionalJS'
import { v4 as uuidv4 } from 'uuid'

const createEmptyBoard = () => {
    return Array(6)
        .fill(null)
        .map(() => Array(7).fill(null))
}

const Board = props => {
    const [squares, setSquares] = useState(createEmptyBoard())
    const [redIsNext, setRedIsNext] = useState(true)

    const resetClickHandler = event => {
        setSquares(prevState => createEmptyBoard())
    }

    const handleClick = (x, y) => {
        const newSquaresState = [...squares]

        const clickedCollumn = columns(newSquaresState)[x]
        const lastPieceInCollumn = clickedCollumn.findIndex(x => x !== null)
        const collPosition = lastPieceInCollumn === -1 ? 5 : lastPieceInCollumn - 1
        newSquaresState[collPosition][x] = redIsNext ? 'X' : 'O'

        setSquares(prevState => newSquaresState)
        setRedIsNext(prevState => !prevState)
    }

    const renderSquare = (x, y) => (
        <Square key={uuidv4()} value={squares[y][x]} onClick={() => handleClick(x, y)} />
    )

    let status
    let lastMover = redIsNext ? 'O' : 'X'
    if (checkIfWinningState(squares, lastMover)) {
        status = 'Winner: ' + (redIsNext ? 'yellow' : 'red')
    } else {
        status = 'Next player: ' + (redIsNext ? 'red' : 'yellow')
    }

    return (
        <div>
            <div className="status">{status}</div>
            {range(0, 6).map(index => (
                <div key={uuidv4()} className="board-row">
                    {range(0, 7).map(innerIndex => renderSquare(innerIndex, index))}
                </div>
            ))}
            <button onClick={resetClickHandler}>Reset</button>
        </div>
    )
}

export default Board
