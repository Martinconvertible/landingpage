import { Col, Container, Nav, NavLink, Row, Tab, TabContent, TabPane } from "react-bootstrap";
import React, {useState} from "react";
import { Projectcard } from "./ProjectCards";
import imgen from "../images/donramon.jpg";
import imgen2 from "../images/superdebarrio.jpg";
import imagenpresup from "../images/imagenpresup.jpg";



export const Projects =()=>{
        
        const projectsReact=[
            {
                index: 1,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen,
                enlace:"https://presupuestadorreforma.netlify.app/",
            },
            {   
                index: 2,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen2,  // referenciar la imagen del import de arriba aqui sin envolver en {}, osea imgen y no {imgen}
                enlace:"https://presupuestadorreforma.netlify.app/",
            },
        ];

        const projectsLaravel=[
            {
                index: 1,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen,
                enlace:"https://presupuestadorreforma.netlify.app/",
            },
            {   
                index: 2,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen2,  // referenciar la imagen del import de arriba aqui sin envolver en {}, osea imgen y no {imgen}
                enlace:"https://presupuestadorreforma.netlify.app/",
            },
        ];

        const projectsJs=[
            {
                index: 1,
                tittle: "Presupuestador rápido Cocinas LM",
                description: "Presupuestador express para orientar al cliente desarollado en Js/HTML/CSS",
                imagen:imagenpresup,
                enlace:"https://presupuestadorreforma.netlify.app",
            },
            {   
                index: 2,
                tittle: "Supermercado Familiar",
                description: "Carrito de compras desarollado en Js/HTML/CSS. Se conecta a base de datos plataforma para extraer las actualizaciones de productos. Formulario de contacto con validaciones en Js. ",
                imagen:imgen2,  // referenciar la imagen del import de arriba aqui sin envolver en {}, osea imgen y no {imgen}
                enlace:"https://supermercadodebarrio.netlify.app",
            },
        ];

    return (
        <section className="project" id="project">
            
            <Container>
                <Row>
                    <Col>
                    <h1> Proyectos </h1>
                    <p>Los proyectos se realizaron de la siguiente manera</p>
                    <p> Estos son los proyectos en los que trabajé</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                    <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link eventKey="second">Laravel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">
                         Javascript
                    </Nav.Link>
                    
                    </Nav.Item>
                 </Nav>
                    
                        <TabContent >
                            <TabPane eventKey="first" >
                            <Row >
                                {console.log(projectsReact)}
                                {console.log (imgen)}
                                {projectsReact.map((project,index)=>{
                                    return (
                                        <Projectcard key={index}{...project}/>
                                    )})}
                                    
                                
                            </Row>
                            </TabPane>
                            <TabPane eventKey="second">
                            <Row  >
                                {console.log(projectsLaravel)}
                                {projectsLaravel.map((project,index)=>{
                                    return (
                                        <div>
                                        <a href="https://buscadorletrasdecanciones.netlify.app" target="blank" className="btn btn-primary">
                                        <h5 className="pepe" key={index}>Proyecto </h5></a>
                                        </div>
                                    )})}
                                    
                                          
                            </Row>
                            </TabPane>
                            <TabPane eventKey="third" >
                            <Row  >
                                {console.log(projectsJs)}
                                {projectsJs.map((project,index)=>{
                                    return (
                                        
                                        
                                        <Projectcard key={index}{...project}/>
                                       
                                        
                                    )})}
                                    
                                
                            </Row>
                            </TabPane>
                            </TabContent>
                            </Tab.Container>
                    </Col> 
                </Row>
            </Container>
            
        </section>
    )
}