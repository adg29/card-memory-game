import React from 'react'
import ReactCardFlip from 'react-card-flip';


function Card({ name, id, xy, front , flipped, matched, disabled, handleClick, width, height}) {
    const back = `/img/allCardBacks@2x.png`
    return (
        <div
            className={`ui card borderless ${name}${id}  ${flipped ? 'flipped': ''}`}
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

                {(flipped || matched) && 
                    (<a className="ui teal pointing label">{name}</a>)

                }
                {(!flipped && !matched) && 
                    (<a className="ui transparent pointing label">{'\u00A0'}</a>)

                }
        </div>
    )
}

export default Card