import React, { useState, useEffect } from 'react'
import Card from './components/card'
import Board from './components/board'
import './App.css'

function App() {
  const CARD_NAMES = [
    'Bat', 'Cat', 'Cow',
    'Dragon', 'GarbageMan', 'GhostDog',
    'Hen', 'Horse', 'Pig',
    'Spider'
  ]

  const GRID_SIZES = [
    [3,4],
    [5,2],
    [4,4],
    [4,5]
  ]

  const [flipped, setFlipped] = useState([])
  const [cards, setCards] = useState([])

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
    setCards(initializeDeck(CARD_NAMES))
  }, [])

  const handleClick = (id) => setFlipped([...flipped, id])

  return (
    <div className="App">
      <Board
        cards={cards}
        flipped={flipped}
        grid={GRID_SIZES[2]}
      />
    </div>
  );
}

export default App;
