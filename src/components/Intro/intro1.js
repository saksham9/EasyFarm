import React from 'react';
import './intro1.scss';

const Intro1 = () => {
    return (
            <div id='Home' className="intro">
            <div className='Heading'>
            {/* <h1>EasyFarm</h1> */}
            {/* <svg viewBox="0 0 1350 600">
                <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                    EasyFarm
                </text>
            </svg> */}
            </div>
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text">
                    For the
                    </p>
                    
                    <ul class="content__container__list">
                    <li class="content__container__list__item">&nbsp;People</li>
                    <li class="content__container__list__item">&nbsp;Nature</li>
                    <li class="content__container__list__item">&nbsp;Animals</li>
                    <li class="content__container__list__item">&nbsp;World</li>
                    </ul>
                </div>
                </div>
            </div>
            
    )
}

export default Intro1;
