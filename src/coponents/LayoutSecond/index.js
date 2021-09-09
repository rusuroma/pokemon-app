import React from "react"

import l2 from './style.module.css';

const LayoutSecond = (props) => {

    return(
        <div>
            <section className={l2.root}>
                <div className={l2.wrapper}>
                    <article>
                        <div className={l2.title}>
                            <h3>{props.title}</h3>
                            <span className={l2.separator}></span>
                        </div>
                    <div className='desc full'>
                        <p>{props.desc}</p>
                    </div>
                    </article>
                </div>
            </section>
        </div>
    )


}

export default LayoutSecond
