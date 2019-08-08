import React, { useState, useEffect } from 'react'

function Card({ id, front , flipped, handleClick, width, height}) {
    const back = `/img/allCardBacks@2x.png`
    return (
        <div
            className={`flex-item ${flipped ? 'flipped': ''}`}
            style={{ height, width }}
            onClick={() => handleClick(id)}
        >
            <img 
                style={{ height, width }}
                className={flipped ? 'back': 'front'}
                src={flipped ? front : back}
            />
        </div>
    )
}

export default Card