import React from "react"

import l1 from './style.module.css';
import background from "../../assets/bg1.jpg";
const LayoutFirst = (props) => {

    return(
        <div style={{background: `url(${background})`}}>
            <section className={l1.root} >
                <div className={l1.wrapper}>
                {/* <h1 style={{background: `url(${background})`}}>Hello Style!</h1> */}
                    <article>
                        <div className={l1.title}>
                            <h3>{props.title}</h3>
                            <span className={l1.separator}></span>
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

export default LayoutFirst
