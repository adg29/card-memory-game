import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'

function Summary({ GAME_VIEWS, setViewOption, history, gameStats }) {
    if (!gameStats.matched) {
        return <Redirect to='/lobby'/>
    }

    return (
        <h2 className="ui icon header">
            <i className="thumbs up outline icon"></i>
            <div className="content">
                Finished!
                <div className="sub header">You matched all {gameStats.matched.length} cards,<br/>Good memory!</div>
            </div>
        </h2>        

    )
}

export default withRouter(Summary)
