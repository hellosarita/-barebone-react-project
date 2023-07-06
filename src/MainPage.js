import React from 'react';
import Table from './Table';

import './MainPage.css';
import TopThreeCards from './TopThreeCards';


const MainPage = () => (
    <div className='page'>
        <div className='sidebar-b'>
            <div className='sidebar' >
            <img
                src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
                height="15px"
                width="15px"
            />
            
            
             <img
                src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
                height="15px"
                width="15px"
            />
        
            
             <img
                src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
                height="15px"
                width="15px"
            />
            
            
             <img
                src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
                height="15px"
                width="15px"
            />
            
             <img
                src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
                height="15px"
                width="15px"
            />
            
            

            <img
            src="https://w7.pngwing.com/pngs/227/181/png-transparent-computer-icons-3ds-max-icon-angle-rectangle-symmetry.png"
            height="15px"
            width="15px"
        />
        </div>
        <div className='circle'>
            <p className='p'>DK</p>
        </div>
        </div>
        <div className='main-container'>
            <h2>Hi, Jennie Moss</h2>
            <TopThreeCards />
            <Table/>
        </div>
    </div>
);

export default MainPage;