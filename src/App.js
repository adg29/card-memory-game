import 'semantic-ui-css/semantic.css';
import './App.css'
import React, { useState } from 'react'
import Options from './components/options'
import Board from './components/board'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


function App({ history }) {
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
            viewOptions={viewOption}
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
          <h2 className="ui icon header">
            <i className="thumbs up outline icon"></i>
            <div className="content">
              Finished!
              <div className="sub header">You matched all the cards,<br/>Good memory!</div>
            </div>
          </h2>        
        )
        break
    }

    return toRender
  }

  return (
    <div className="App">
      <div className="ui huge borderless stackable menu">
        <div className="item">
          {(viewOption !== GAME_VIEWS.LOBBY) && (
              <i
                  className={`huge icon backToLobby`}
                  onClick={() => {
                    setViewOption(GAME_VIEWS.LOBBY)
                    history.push('/lobby')
                  }}
              ></i>
          )}
          {(viewOption === GAME_VIEWS.LOBBY) && (
            <i className="th huge icon"></i>
          )}
        </div>
        <a className="item" href="/">
        <span className="ui header">
        Memory Game
        </span>
        </a>
      </div>


      <Route exact path="/" render={() => renderGame(GAME_VIEWS.LOBBY) } />
      <Route path="/lobby" render={() => renderGame(GAME_VIEWS.LOBBY) } />
      <Route path="/playing" component={() => {
        setViewOption(GAME_VIEWS.PLAYING)
        return renderGame(GAME_VIEWS.PLAYING) 
      }} />
      <Route path="/summary" render={() => renderGame(GAME_VIEWS.SUMMARY) } />
    </div>
  );
}

export default withRouter(App)