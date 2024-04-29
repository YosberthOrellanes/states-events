import React, { useState } from 'react';
import SocialButton from "./SocialButton"
import Formulario from './Formulario'
import Alert from './Alert';


export default function Registro() {
    const [alert, setAlert] = useState({ mensaje: "", color: "" });

    return (

        <div className="container">
            <div className="mb-3 formIngresoDiv">
                <div>
                <h1 className='titulo' >Crea una Cuenta</h1>
                </div>
                <div className='social'>
                    <div className="footer-icon" style={{ border: "2px solid black", borderRadius: "50%", padding: "10px", margin: "0 10px" }}>
                        <SocialButton iconClass="fa-brands fa-facebook" />
                    </div>
                    <div className="footer-icon" style={{ border: "2px solid black", borderRadius: "50%", padding: "10px", margin: "0 10px" }}>
                        <SocialButton iconClass="fa-brands fa-github" />
                    </div>
                    <div className="footer-icon" style={{ border: "2px solid black", borderRadius: "50%", padding: "10px", margin: "0 10px" }}>
                        <SocialButton iconClass="fa-brands fa-linkedin-in" />
                    </div>
                </div>
                <div>
                    <div>
                        <h6 className='mensaje'>o usa tu email para registrarte</h6>
                    </div>
                    <Formulario setAlert={setAlert} />
            {alert.mensaje && <h1 style={{ color: alert.color }}>{alert.mensaje}</h1>}
                </div>
            </div>
        </div>
    );
}
