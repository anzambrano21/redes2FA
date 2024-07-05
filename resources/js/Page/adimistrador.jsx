import React, { useContext, useState } from 'react';

import '../../css/app.css'
import { Button } from 'react-bootstrap';
import { Exaplecontect } from "../context/contexto"
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
const itemsPerPage = 5;
let res = await fetch('http://127.0.0.1:8000/api/usuario');
let myData = await res.json();
let data2 = myData;

const DesBar = ({ show }) => {
  return (
    <nav className={show ? 'bgPurLit menu-des show ?' : 'bgPurLit menu-des '}>
      <ul className="navigation">

        <li><Link className='enlace' to="color" >Ir a Cambiar Color</Link></li>
        <li><Link className='enlace' to="/admin" >Lista de usuario</Link></li>
        <li><a href="" >Nosotros</a></li>
        <li><a href="" >Contacto</a></li>
      </ul>
    </nav>
  );
}




export const Adimistrador = () => {
  
  const [shownav, setshownav] = useState(false)
 
  
  return (
    <div className="min-h-screen bg-yellow-400" >

      <header>


        <nav className="bg-purple-700 text-yellow-400 shadow-md p-4 flex justify-between items-center borderInfer navar">
          <i className=" font-bold" onClick={() => setshownav(!shownav)}>=</i>
          <div className="space-x-4">
          <a href="/home" className="hover:underline">Inicio</a>
            <a href="/user" className="hover:underline">Usuario</a>
          </div>
        </nav>
        <DesBar show={shownav} />
      </header>
      <CutomTable show={shownav}/>

    </div>
  );
}
export const CutomTable = ({ show }) => {


  const [currentPage, setCurrentPage] = useState(1);
  const [globalFilter, setglobalfilter] = useState('');


  if (globalFilter !== '') {
    data2 = myData.filter(dato => {
      return Object.values(dato).some(val =>
        String(val).toLowerCase().includes(globalFilter.toLowerCase())
      );
    });

  } else {

    data2 = myData;

  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let currentData = data2.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data2.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const actualizar = (id) => {
    fetch(`http://127.0.0.1:8000/api/usuario/${id}`, {
      method: 'PUT',
    })
    window.location.reload();
  }

  // Función para filtrar los datos según el término de búsqueda
  return (
    <div >


      <div className={show ?'conTabl activo bg-yellow-400':'conTabl bg-yellow-400'} >
        <table className="table table-striped">

          <thead>
            <tr>


              <th >Nombre</th>
              <th >Apellido</th>
              <th >Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {currentData.map((item) => (

              <tr key={item.id} >

                <td >{item.nombre}</td>
                <td >{item.correo}</td>
                <td><button className="btn btn-warning" onClick={() => dataedit = item} >Editar</button></td>
                <td>

                  {item.est === 'activado' ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => actualizar(item.id)}
                      
                    >
                      desactivar
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => actualizar(item.id)}
                      
                    >
                      Activar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={show ?'conBoton activo justify-content-center ' :'conBoton  justify-content-center '}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary col"  >
          Anterior
        </Button>
        <span className='col'>Página {currentPage} de {totalPages}</span>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary col" >
          Siguiente
        </Button>
      </div>


    </div>
  );
};
export const CambiarColor = ({ show }) => {
  const [selectedValue, setSelectedValue] = useState('nada');
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const cargar = async () => {
    
    let cp = document.getElementById("cP").value;
    let cs = document.getElementById("cS").value;
    let cc = document.getElementById("cC").value;
    let tp = document.getElementById("tP").value;
    let tt = document.getElementById("tT").value;
    let ts = document.getElementById("tS").value;
    let tb = document.getElementById("tB").value;
    if (!(Number(tt) > Number(ts) && Number(ts) > Number(tp))) {
      alert("Los Tamaños de los Titulos debe ser Mayor que los Subtitulos  ");
    }

    let id
    if (selectedValue === "nada") {
      id = 1

    } else if (selectedValue === "Triada") {
      id = 2


    } else if (selectedValue === "Monocromatico") {
      id = 0

    } else if (selectedValue === "Cuadrado") {
      id = 3

    }
    let mod = {
      Cp: cp,
      Cs: cs,
      Cc: cc,
      Tp: tp,
      Tt: tt,
      Ts: ts,
      Tb: tb,
      st: 1
    }


    const response = await axios.put(`http://127.0.0.1:8000/api/color/${id}`, mod);

    window.location.reload();


  }
  const desactivar = async () => {
    let mod = {
      st: 0

    }
    const response = await axios.put(`http://127.0.0.1:8000/api/color/${0}`, mod);
    window.location.reload();
  }
  return (
    <div className={show?'contaiColor activo bg-purple-700':'contaiColor  bg-purple-700'} >
      <div className='contaiP'>
        <div className="row mb-2 justify-content-center">
          <p className="col-sm-5 col-md-6" >color primario</p>
          <input type="color" name="" id="cP" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >color secundario</p>
          <input type="color" name="" id="cS" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >color complementario</p>
          <input type="color" name="" id="cC" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >tamaño de parrafo</p>
          <input type="number" name="" id="tP" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >tamaño de titulos</p>
          <input type="number" name="" id="tT" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >tamaño de subtitulos</p>
          <input type="number" name="" id="tS" className="col-5" />
        </div>
        <div className="row mb-2  justify-content-center">
          <p className="col-sm-5 col-md-6" >tamaño de botones</p>
          <input type="number" name="" id="tB" className="col-5" />
        </div>
        <br />
        <div className="row mb-2  justify-content-center">
          <p className='col-sm-5 col-md-6 '>Modo de Distribucion</p>
          <select value={selectedValue} onChange={handleSelectChange} className='col-5'>
            <option value="nada"></option>
            <option value="Triada">Triada</option>
            <option value="Monocromatico">Monocromatico</option>
            <option value="Cuadrado">Cuadrado</option>
          </select>

        </div>
        <br />
        <div className="row mb-2  justify-content-center">

          <input type="button" value="cargar" className='col-2 boton' onClick={cargar}  />
          <input type="button" value="desactivar" className='col-2 boton' onClick={desactivar}  />
        </div>


      </div>
    </div>
  );
}

