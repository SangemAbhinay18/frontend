import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading investement experience even further with our platforms.</p>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/smallcaseLogo.png' />
          <p className='text-small text-muted mt-3'>Thematic investement platform</p>
        </div>
       <div className="col-4 p-3 mt-5">
          <img src='media/images/streakLogo.png' style={{width:"50%"}}/>
          <p className='text-small text-muted'>Algo $ strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/sensibullLogo.svg' style={{width:"50%"}}/>
          <p className='text-small text-muted mt-3'>Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/zerodhaFundhouse.png' style={{width:"50%"}}/>
          <p className='text-small text-muted'>Assest management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/goldenpiLogo.png' />
          <p className='text-small text-muted mt-3'> Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src='media/images/dittoLogo.png' style={{width:"35%"}}/>
          <p className='text-small text-muted'>insurance</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-3' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
     );
}

export default Universe;