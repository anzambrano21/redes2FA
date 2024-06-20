import React, {useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio,Registro } from './inicio'




export default function Prin() {
   
    
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path='/inicio/*' element={<Inicio/>}/>
                <Route path='/registro/*' element={<Registro/>} />
                
            </Routes>

            
        </BrowserRouter>
    );
}
