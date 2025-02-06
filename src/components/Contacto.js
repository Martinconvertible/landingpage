import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import contactoImg from "../images/contact-img.svg"

export const Contacto =()=>{
    const formInitialDetalles ={
        nombre:'',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [ formDetalles, setformDetalles] =useState(formInitialDetalles);
    //const [buttonText , setbuttonText ]= useState('send');
    //const [status, setStatus]= useState({});

    const actualizarFormulario = ( categoria, valor) =>{
        setformDetalles (
            {
                ...formDetalles, [categoria]: valor
            }
        )
    }

    const handleSubmit = ()=> {
        
    }

    

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col>
                    <img src={contactoImg} alt="Contactame"></img>
                    </Col>
                    <Col md={6}>
                    <h2> Ponerse en Contacto </h2>
                    </Col>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetalles.nombre} placeholder="Nombre" onChange={(e)=>actualizarFormulario('nombre', e.target.value)} ></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetalles.apellido} placeholder="Apellido" onChange={(e)=>actualizarFormulario('apellido', e.target.value)} ></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" value={formDetalles.telefono} placeholder="Telefono" onChange={(e)=>actualizarFormulario('telefono', e.target.value)} ></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={formDetalles.email} placeholder="e-mail" onChange={(e)=>actualizarFormulario('email', e.target.value)} ></input>
                            </Col>
                            <textarea row="6" value={formDetalles.mensaje} placeholder="Escribe tu mensaje" onChange={(e)=>actualizarFormulario('mensaje', e.target.value)}></textarea>
                            {/*<button type="submit"> <span>{buttonText}</span></button>*/}
                            <Col>
                            </Col>
                            <Col>
                            {/*
                                status.mensaje &&
                                <p className={status.success === false? "danger" : "success"}> {status.mensaje}</p>*/
                            }
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Container>
        </section>
    )
}