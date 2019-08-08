import React, { useState, useEffect } from 'react'
import Board from './components/board'
import './App.css'

function App() {
  const GRID_SIZES = [
    [3,4],
    [5,2],
    [4,4],
    [4,5]
  ]

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
      return deck
    }, [])
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
        setTimeout(resetFlipped, 2000)
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
    console.log(cardClicked.name, cardToMatch.name, matchCondition, cardToMatch)
    return matchCondition
  }


  return (
    <div className="App">
      <Board
        cards={cards}
        flipped={flipped}
        grid={GRID_SIZES[1]}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
