import React from "react"

import l3 from './style.module.css';
import background from "../../assets/bg2.jpg";
const LayoutThird = (props) => {

    return(
        <div style={{background: `url(${background})`}}>
            <section className={l3.root} >
                <div className={l3.wrapper}>
                    <article>
                        <div className={l3.title}>
                            <h3>{props.title}</h3>
                            <span className={l3.separator}></span>
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

export default LayoutThird
