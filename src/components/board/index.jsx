import React from 'react'
import { useState, useEffect } from 'react'
import Card from './../card'

function Board({ grid, setViewOption, GAME_VIEWS }) {

    const [flipped, setFlipped] = useState([])
    const [cards, setCards] = useState([])
    const [matched, setMatched] = useState([])
    const [disabled, setDisabled] = useState(false)

    const initializeDeck = (cardNames) => {
    let id = 0
    let newDeck = cardNames.reduce((deck, name) => {
            deck.push({
                id: id++,
                name
            })
            deck.push({
                id: id++,
                name
            })
            return deck}
        , [])
        return newDeck
    }

    useEffect(() => {
        const CARD_NAMES = [
          'Bat', 'Cat', 'Cow',
          'Dragon', 'GarbageMan', 'GhostDog',
          'Hen', 'Horse', 'Pig',
          'Spider'
        ]
        setCards(initializeDeck(CARD_NAMES))
    }, [])

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
          setFlipped([id])
          setDisabled(false)
        } else {
          if (flipped.includes(id)) return
          setFlipped([flipped[0], id])
          if (isMatch(id)) {
            setMatched([...matched, flipped[0], id])
            resetFlipped()
          } else {
            setTimeout(resetFlipped, 1000)
          }
        }
    }

    const resetFlipped = () => {
        setFlipped([])
        setDisabled(false)
    }

    const isMatch = (id) => {
        const cardClicked = cards.find(card => card.id === id)
        const cardToMatch = cards.find(card => flipped[0] === card.id)
        let matchCondition = (cardClicked.name === cardToMatch.name)
        return matchCondition
    }

    const renderDnynamicBoard = ([cols, rows]) => {
        let rowMarkup = []
        // console.log(`Building board with ${cols} cols and ${rows} rows`)
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < cols; x++) {
                // console.log(`${x},${y} card${x}`, cards[cols * y + x])
                let col = (
                        <Card
                          key={cards[cols * y + x].id}
                          xy={`x${x}y{y}`}
                          id={cards[cols * y + x].id}
                          name={cards[cols * y + x].name}
                          width={100}
                          height={100}
                          front={`/img/memory${cards[cols * y + x].name}CardFront@2x.png`}
                          handleClick={() => handleClick(cards[cols * y + x].id)}
                          flipped={flipped.includes(cards[cols * y + x].id)}
                          disabled={disabled || matched.includes(cards[cols * y + x].id)}
                          matched={matched.includes(cards[cols * y + x].id)}
                        />
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
        <>
            <div
                onClick={() => {
                    setViewOption(GAME_VIEWS.LOBBY)
                }}
            >
                <img
                    className={`backToLobby`}
                    src={`/img/backNavButton@2x.png`}
                    alt={`Back to Lobby`}
                />
            </div>
            <div
                className="board"
            >
                {cards.length > 0 && renderDnynamicBoard(grid)}
            </div>
        </>
    )
}

export default Board