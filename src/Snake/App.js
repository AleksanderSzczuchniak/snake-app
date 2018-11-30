import React from 'react'
import Snake from './Snake'
import {database} from './firebaseConfig'
const App = (props) => {
    <div>
        <Snake
        firebaseDatabase={database}
        />
    </div>
}