import React, { useState, useEffect } from 'react'
import Card from './components/card'
import './App.css'

/*
memoryBatCardFront@2x.png
memoryCatCardFront@2x.png
memoryCowCardFront@2x.png
memoryDragonFront@2x.png
memoryGarbageManCardFront@2x.png
memoryGhostDogCardFront@2x.png
memoryHenCardFront@2x.png
memoryHorseCardFront@2x.png
memoryPigCardFront@2x.png
memorySpiderCardFront@2x.png
*/

function App() {
  const CARD_NAMES = [
    'Bat', 'Cat', 'Cow',
    'Dragon', 'GarbageMan', 'GhostDog',
    'Hen', 'Horse', 'Pig',
    'Spider'
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
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          width={100}
          height={100}
          front={`/img/memory${card.name}CardFront@2x.png`}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  );
}

export default App;
