import React from 'react'
import { useState, useEffect } from 'react'
import Card from './../card'

function Board({ grid, setViewOption, GAME_VIEWS }) {

    const [flipped, setFlipped] = useState([])
    const [cards, setCards] = useState([])
    const [matched, setMatched] = useState([])
    const [disabled, setDisabled] = useState(false)

    /**
     * Randomly shuffle an array
     * https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
     * https://stackoverflow.com/a/2450976/1293256
     */
    var shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };

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
        return shuffle(newDeck)
    }

    useEffect(() => {
        const CARD_NAMES = [
          'Bat', 'Cat', 'Cow',
          'Dragon', 'GarbageMan', 'GhostDog',
          'Hen', 'Horse', 'Pig',
          'Spider'
        ]
        setCards(initializeDeck(shuffle(CARD_NAMES).slice(0, (grid[0] * grid[1]) / 2 )))
    }, [])

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
          setFlipped([id])
          setDisabled(false)
        } else if (!flipped.includes(id)){
          setFlipped([flipped[0], id])
          if (isMatch(id)) {
            // console.log('matched currently', matched)
            setMatched([...matched, flipped[0], id])
            resetFlipped()
          } else {
            setTimeout(resetFlipped, 1000)
          }
        }
    }

    useEffect(() => {
        if (matched.length > 0 && matched.length === (grid[0] * grid[1])) {
            // console.log('setMatched', matched, grid)
            setViewOption(GAME_VIEWS.SUMMARY)
        }
    }, [matched, GAME_VIEWS.SUMMARY, grid, setViewOption])

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
                          xy={`x${x}y${y}`}
                          id={cards[cols * y + x].id}
                          name={cards[cols * y + x].name}
                          width={100}
                          height={100}
                          front={`/img/memory${cards[cols * y + x].name}CardFront@2x.png`}
                          handleClick={handleClick}
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
                className="board"
            >
                {cards.length > 0 && renderDnynamicBoard(grid)}
            </div>
        </>
    )
}

export default Board