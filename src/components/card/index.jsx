import React from 'react'

function Card({ name, id, xy, front , flipped, matched, disabled, handleClick, width, height}) {
    const back = `/img/allCardBacks@2x.png`
    return (
        <div
            className={`ui fluid raised card ${name}${id}  ${flipped ? 'flipped': ''}`}
            onClick={() => disabled? null : handleClick(id)}
            data-xy={`${xy}`}
        >
{/*
            <div className={`ui move reveal disabled ${flipped ? 'back': 'front'}`}>
              <div className="visible content">
                <img src={front} className="ui small image" />
              </div>
              <div className="hidden content">
                <img src={back} className="ui small image" />
              </div>
            </div>

*/}
            <div className="image">
                <img 
                    className={flipped ? 'back': 'front'}
                    src={flipped || matched ? front : back}
                    alt={flipped ? name : `?`}
                />
            </div>

            <div className="content">
                <a className="header">{flipped || matched ? name : '\u00A0'}</a>
            </div>
        </div>
    )
}

export default Card