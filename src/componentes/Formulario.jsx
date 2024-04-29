import React, { useState } from 'react';
import { limpiar } from "../utils/limpiar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function Formulario({ setAlert }) {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmContraseña, setConfirmContraseña] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    

    const enviarFormulario = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (user === "" || email === "" || contraseña === "" || confirmContraseña === "") {
            setErrorMessage("Completa todos los campos!");
            limpiar(setUser, setEmail, setContraseña, setConfirmContraseña);
            return;
        }
        if (contraseña !== confirmContraseña) {
            setErrorMessage("Las contraseñas deben coincidir");
            limpiar(setUser, setEmail, setContraseña, setConfirmContraseña);
            return;
        }
        if (!emailRegex.test(email)) {
            setErrorMessage("Ingrese un correo electrónico válido");
            return;
        }

        setSuccessMessage("Bienvenido");
        limpiar(setUser, setEmail, setContraseña, setConfirmContraseña);
        console.log({ user, email, contraseña, confirmContraseña });
    };

    return (
    
        <>
            <form onSubmit={enviarFormulario}> 

    <Form.Group className="mb-1">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Nombre" value={user} onChange={(e) => setUser(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-1">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="tuemail@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>
    
    <Form.Group className="mb-1">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-1">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Confirma tu contraseña" value={confirmContraseña} onChange={(e) => setConfirmContraseña(e.target.value)} />
    </Form.Group>

    <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-success" style={{ marginTop: '10px' }}>Registrarse</button>
    </div>
    
            </form>
        
            {errorMessage && <p style={{ color: "red", backgroundColor: "rgba(255, 0, 0, 0.1)", padding: "5px", borderRadius: "5px", marginTop: "15px"}}>{errorMessage}</p>}
            
            {successMessage && <p style={{ color: "green", backgroundColor: "rgba(0, 255, 0, 0.1)", padding: "5px", borderRadius: "5px", marginTop: "15px", textAlign:"center" }}>{successMessage}</p>}
            
        </>
    );
}

export default Formulario;
