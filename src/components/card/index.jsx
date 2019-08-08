import React, { useState, useEffect } from 'react'

function Card({ id, back , width, height}) {
    const front = `/img/allCardBacks@2x.png`
    return (
        <div
            className="flex-item"
            style={{
                height, width
            }}
        >
            <img 
                style={{
                    height, width
                }}
                src={front}
            />
        </div>
    )
}

export default Card