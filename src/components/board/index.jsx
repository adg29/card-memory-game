import React, { useState, useEffect } from 'react'
import Card from './../card'

function Board({ grid, cards, flipped, handleClick}) {
    // backNavButton@2x  

    const renderDnynamicBoard = ([cols, rows]) => {
        let rowMarkup = []
        console.log(`Building board with ${cols} cols and ${rows} rows`)
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < cols; x++) {
                console.log(`${x},${y} card${x}`, cards[cols * y + x])
                let col = (
                    <div className="flex-item" key={`x${x}y{y}`}>
                        <Card
                          key={cards[cols * y + x].id}
                          id={cards[cols * y + x].id}
                          name={cards[cols * y + x].name}
                          width={100}
                          height={100}
                          front={`/img/memory${cards[cols * y + x].name}CardFront@2x.png`}
                          flipped={flipped.includes(cards[cols * y + x].id)}
                          handleClick={() => handleClick(cards[cols * y + x].id)}
                        />
                    </div>
                )
                row.push(col)
            }
            rowMarkup.push(
                <div className="flex-container" key={`row${rowMarkup.length+1}`}>
                    {row}
                </div>
            )
        }

        return rowMarkup
    }

    return (
        <div
            className="board"
        >
            {cards.length > 0 && renderDnynamicBoard(grid)}
        </div>
    )
}

export default Board