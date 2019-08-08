import React from 'react'
// import { useState, useEffect } from 'react'

function Options({ GRID_SIZES, setGridSize }) {
    return (
        <div
            className={`options `}
        >
            {GRID_SIZES.map(size => 
                <div
                    onClick={() => setGridSize(size)}
                >
                    {size}
                </div>
            )}
        </div>
    )
}

export default Options