import React, {useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio,Registro } from './inicio'
import ExamplecontexProvier, {Exaplecontect}from "../context/contexto"
import {Adimistrador} from "./adimistrador";


export default function Prin() {
   
    
    return (
        <BrowserRouter>
            
            <Routes>
                
                <Route path='/inicio/*' element={<Inicio/>}/>
                <Route path='/registro/*' element={<Registro/>} />
                <Route path='/admin' element={<Adimistrador/>} />
                
            </Routes>

            
        </BrowserRouter>
    );
}
