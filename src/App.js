import React, { useState } from 'react'
import Options from './components/options'
import Board from './components/board'
import './App.css'

function App() {
  const GRID_SIZES = [
    [3,4],
    [5,2],
    [4,4],
    [4,5]
  ]

  const GAME_VIEWS = {
    LOBBY: 'lobby',
    PLAYING: 'playing',
    SUMMARY: 'summary'
  }

  const [viewOption, setViewOption] = useState(GAME_VIEWS.LOBBY)
  const [gridSize, setGridSize] = useState(GRID_SIZES[1])

  const renderGame = (view) => {
    let toRender
    switch (view) {
      case GAME_VIEWS.LOBBY:
        toRender = (
          <Options
            GRID_SIZES={GRID_SIZES}
            setGridSize={setGridSize}
            GAME_VIEWS={GAME_VIEWS}
            setViewOption={setViewOption}
          />
        )
        break
      case GAME_VIEWS.PLAYING:
        toRender = (
          <Board
            grid={gridSize}
            GAME_VIEWS={GAME_VIEWS}
            setViewOption={setViewOption}
          />
        )
        break
      case GAME_VIEWS.SUMMARY:
      default:
        toRender = (
          <div
          >
            You win!
          </div>
        )
        break
    }

    return toRender
  }

  return (
    <div className="App">
      <header>
        <ul className="elements">
          <li className="back">
            {(viewOption !== GAME_VIEWS.LOBBY) && (
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
            )}
          </li>
          <li className="title">
            <h1>
                Memory Game
            </h1>
          </li>
        </ul>
      </header>

      {renderGame(viewOption)}
    </div>
  );
}

export default App;
