import React, { useState, useEffect } from 'react'

function Card({ id, front, width, height}) {
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