import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd,faMinus } from '@fortawesome/free-solid-svg-icons'

const Faq = () => {
    return (
        <div className='container'>
            <div className="accordion">
                <div className="accordion-item" id="Que1">
                    <a href="#Que1">
                        How to login to portal?
                        <FontAwesomeIcon icon={faMinus}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Faq
