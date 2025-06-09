import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                <a href='' style={{textDecoration:"none"}}> <h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left",lineHeight:"2.3",fontSize:"12px"}} className='text-muted'>
                       <li> Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</li>
                       <li> When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
                       <li> Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                       <li> BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
                       <li> BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                    </ul>
    
                </div>
            <div className='col-4 p-4'>
               <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
            </div>
            </div>
        </div>
     );
}

export default Brokerage;