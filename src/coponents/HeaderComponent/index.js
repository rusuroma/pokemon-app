import React from "react"

import s from './style.module.css';

function Header(){
    return (
        <div>
            <header class={s.root}>
                <div class={s.forest}></div>
                <div class={s.container}>
                    <h1>This is title</h1>
                    <p>This is Description!</p>
                </div>
            </header>
        </div>
        
    )
}

export default Header