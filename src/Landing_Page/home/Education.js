import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <div className='col'>
                    <img src='media/images/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col p-5'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>Trading Q&A, the most active and trading investement community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;