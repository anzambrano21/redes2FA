import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../css/app.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Exaplecontect } from "../context/contexto"
import { Routes, Route } from 'react-router-dom';

export const Inicio = () => {

    const example = useContext(Exaplecontect)


    const iniciar = async () => {
        let user = document.getElementById("loginName").value;
        let pasw = document.getElementById("loginPassword").value;
        let usur = {
            email: user,
            password: pasw
        }
        const response = await axios.post('http://127.0.0.1:8000/api/log', usur);
        console.log(response);
        example.setDatos(response.data)

        if (response.data.home === 'Login successful') {
            // Redirige al usuario a la página deseada
            window.location.href = '/admin';
        } else {
            alert("inicio de secion fallida");
        }
    }
    const Compro=()=>{
        return(
            <div data-mdb-input-init className="form-outline mb-4 container1">
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">enviar comporovante</button>
           
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">verificador</label>
            </div>
        )
    }
    const Defaul = () => {
        return (
            <div className="container1">
                <Navega />

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>

                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="loginName" className="form-control" />
                                <label className="form-label" htmlFor="loginName">Correo</label>
                            </div>


                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="password" id="loginPassword" className="form-control" />
                                <label className="form-label" htmlFor="loginPassword">Contraceña</label>
                            </div>


                            <button type="button" onClick={iniciar} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Iniciar</button>


                            <div className="text-center">
                                <p>Estas Registrado <a href="http://127.0.0.1:8000/registro">Registrar</a></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
    return (
        <Routes>
            <Route path='/' element={<Defaul />} />
            <Route path='/comprovar' element={<Compro  />} />
        </Routes>


    );
}

export const Navega = () => {
    const location = useLocation();

    let estilo = {};
    let estilo2 = {};

    switch (location.pathname) {
        case '/inicio':
            estilo = { background: 'blue', color: 'white' };
            break;
        case '/registro':
            estilo2 = {
                background: 'blue',
                color: 'white'
            };
            break;
        default:

    }


    return (
        <div className="container">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-login" data-mdb-pill-init to="/inicio" role="tab"
                        aria-controls="pills-login" aria-selected="true" style={estilo}>Iniciar Secion</Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link className="nav-link" id="tab-register" data-mdb-pill-init to="/registro" role="tab"
                        aria-controls="pills-register" aria-selected="false" style={estilo2}>Registrarce</Link>
                </li>
            </ul>
        </div>
    );

}
export const Registro = () => {
    const example = useContext(Exaplecontect)

    const guardar = async () => {
        let user = document.getElementById("registerUsername").value;
        let emai = document.getElementById("registerEmail").value;
        let pasw1 = document.getElementById("registerPassword").value
        let pasw2 = document.getElementById("registerRepeatPassword").value
        let pswd
        if (pasw1 === pasw2) {
            pswd = pasw1;
        }
        let guar = {
            nom: user,
            email: emai,
            password: pswd
        }

        const response = await axios.post('http://127.0.0.1:8000/api/usuario', guar);
        let res= await axios.get("http://127.0.0.1:8000/seguridad")

        window.location.href = "http://127.0.0.1:8000/registro/comprovar";

        console.log(res.data);




    }
    const Defaul=()=>{
        return(
            <div className="container1">
            <Navega />
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="text-center mb-3">
                            <p></p>
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">Nombre de Usuario</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Correo </label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Contraseña</label>
                        </div>


                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repite Contraseña</label>
                        </div>





                        <button type="button" onClick={guardar} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
    const Compro=()=>{
        return(
            <div data-mdb-input-init className="form-outline mb-4 container1">
            <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">enviar comporovante</button>
           
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">verificador</label>
            </div>
        )
    }
    return (

            <Routes>
                <Route path='/' element={<Defaul  />} />
                <Route path='/comprovar' element={<Compro  />} />
            </Routes>
    

    );

}

