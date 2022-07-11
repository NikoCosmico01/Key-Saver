import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function Home() {
    return(
       <div className='containerHome'>
            <Navbar/>
            <div className='row'>
                <Card/>
            </div>
       </div>
    );
}

export default Home;