import React from 'react'
import { useState, useEffect } from 'react'
import { historyPush } from "./../../router-diy"
import Card from './../card'

function Board({ grid, setViewOption, GAME_VIEWS }) {

    const [flipped, setFlipped] = useState([])
    const [cards, setCards] = useState([])
    const [matched, setMatched] = useState([])
    const [matchedAll, setMatchedAll] = useState(false)
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

    useEffect(() => {
        const CARD_NAMES = [
          'Bat', 'Cat', 'Cow',
          'Dragon', 'GarbageMan', 'GhostDog',
          'Hen', 'Horse', 'Pig',
          'Spider'
        ]

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

        setCards(initializeDeck(shuffle(CARD_NAMES).slice(0, (grid[0] * grid[1]) / 2 )))
    }, [grid])

    const handleClick = (id) => {
        setDisabled(true)
        if (flipped.length === 0) {
          setFlipped([id])
          setDisabled(false)
        } else if (!flipped.includes(id)){
          setFlipped([flipped[0], id])
          if (isMatch(id)) {
            setMatched([...matched, flipped[0], id])
            resetFlipped()
          } else {
            setTimeout(resetFlipped, 1000)
          }
        } else {
            setDisabled(false)
        }
    }

    useEffect(() => {
        if (matched.length > 0 && matched.length === (grid[0] * grid[1])) {
            setMatchedAll(true)
            setTimeout(() => {
               setViewOption(GAME_VIEWS.SUMMARY)
               historyPush('/summary')
            }, 2000)
        }
    }, [matched, GAME_VIEWS.SUMMARY, grid, setViewOption, setMatchedAll])

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
        for(let y = 0; y < rows; y++) {
            let row = []
            for(let x = 0; x < cols; x++) {
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
            rowMarkup.push(row)
            /*
            // This markup was being used to build a resposive board using flex-conatiner rows and flex item columns/cells
            // Ultimately, decided to go with Semantic UI convention
            (
                <div className="flex-container" key={`row${rowMarkup.length+1}`}>
                  {row}
                </div>
            )
            */
        }

        return rowMarkup
    }

    const getColumnsClassName = (columnsInt) => {
        let columnsClassName;
        switch (columnsInt) {
            case 3:
                columnsClassName = "three"
                break;
            case 4:
                columnsClassName = "four"
                break;
            case 5:
                columnsClassName = "five"
                break;
            default:
                columnsClassName = "five"
                break;
        }

        return columnsClassName
    }

    return (
        <div className="ui raised text container segment">
                <div
                    className={`
                        ui centered board 
                        ${getColumnsClassName(grid[0])} cards
                        ${matchedAll ? 'matched': ''}
                    `.trim()}
                >
                    {cards.length > 0 && renderDnynamicBoard(grid)}
                </div>
        </div>
    )
}

export default Board