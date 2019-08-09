import React from 'react'
import ReactCardFlip from 'react-card-flip';


function Card({ name, id, xy, front , flipped, matched, disabled, handleClick, width, height}) {
    const back = `/img/allCardBacks@2x.png`
    return (
        <div
            className={`ui fluid raised card ${name}${id}  ${flipped ? 'flipped': ''}`}
            onClick={() => disabled? null : handleClick(id)}
            data-xy={`${xy}`}
        >
            <div className="image">
                <ReactCardFlip 
                    className={`centered ${flipped || matched ? 'back': 'front'}`}
                    isFlipped={flipped || matched} 
                    flipDirection="vertical"
                >
                    <img key="front" src={back} className="ui medium centered image" alt="?" />
                    <img key="back" src={front} className="ui medium centered image" alt={name} />
                </ReactCardFlip>

            </div>

            <div className="content">
                <span className="header">{flipped || matched ? name : '\u00A0'}</span>
            </div>
        </div>
    )
}

export default Card