import React from 'react'
// import { useState, useEffect } from 'react'

function Card({ name, id, xy, front , flipped, disabled, handleClick, width, height}) {
    const back = `/img/allCardBacks@2x.png`
    return (
        <div
            className={`card ${name}${id} flex-item ${flipped ? 'flipped': ''}`}
            style={{ height, width }}
            onClick={() => disabled? null : handleClick(id)}
            data-xy={`${xy}`}
        >
            <img 
                style={{ height, width }}
                className={flipped ? 'back': 'front'}
                src={flipped ? front : back}
                alt={flipped ? name : `?`}
            />
        </div>
    )
}

export default Card