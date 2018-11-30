import React from 'react'

const style ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '10%'
}

const GameCell = (props) => (
    <div
    style={style}
    >
        {props.cell}
    </div>

)
export default GameCell