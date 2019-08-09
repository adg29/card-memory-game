import React from 'react'

function Options({ GRID_SIZES, setGridSize, GAME_VIEWS, setViewOption }) {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className={`column`}>

                <h2 className="ui icon header">
                    <i className="keyboard outline icon"></i>
                    <div className="content">
                        Board Size Options
                    </div>
                </h2>        


                <div
                    className={`centered one link cards`}
                >
                    {GRID_SIZES.map(size => 

                        <div
                            key={size.join('x')}
                            className={`ui raised centered card`}
                            onClick={() => {
                                setGridSize(size)
                                setViewOption(GAME_VIEWS.PLAYING)
                            }}
                        >
                            <div class="ui animated fade button" tabindex="0">
                                <div className="visible content">
                                    {size.join('x')}
                                </div>
                                <div className="hidden content">
                                      <i class="play icon"></i>
                                        {size.join('x')}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Options