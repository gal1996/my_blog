import React from 'react'
import '../../../../stylesheets/Header/header.css'

const header = (props) => (
    <div id='header'>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/article'>Article</a></li>
            <li><a href='/Profile'>Profile</a></li>
        </ul>
    </div>
)

export default header;
