import React, { useState, useEffect } from 'react'
import Card from './../card'

function Board({ grid, cards, flipped, handleClick}) {
    // backNavButton@2x  

    const renderDnynamicBoard = ([cols, rows]) => {
        let rowMarkup = []
        console.log(`Building board with ${cols} cols and ${rows} rows`)
        console.log(cards)
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < cols; x++) {
                console.log(cards[x])
                let col = (
                    <div class="flex-item">
                        <Card
                          key={cards[x].id}
                          id={cards[x].id}
                          name={cards[x].name}
                          width={100}
                          height={100}
                          front={`/img/memory${cards[x].name}CardFront@2x.png`}
                          flipped={flipped.includes(cards[x].id)}
                          handleClick={() => handleClick(cards[x].id)}
                        />
                    </div>
                )
                row.push(col)
            }
            rowMarkup.push(
                <div className="flex-container">
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