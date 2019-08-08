import React from 'react'
// import { useState, useEffect } from 'react'

function Options({ GRID_SIZES, setGridSize, GAME_VIEWS, setViewOption }) {
    return (
        <>
        <h1>
            Memory Game
        </h1>
        <div
            className={`options `}
        >
            {GRID_SIZES.map(size => 
                <div
                    key={size.join('x')}
                    className={`flex-item`}
                    onClick={() => {
                        setGridSize(size)
                        setViewOption(GAME_VIEWS.PLAYING)
                    }}
                >
                    {size.join('x')}
                </div>
            )}
        </div>
        </>
    )
}

export default Options