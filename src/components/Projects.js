import { Col, Container, Nav, Row, Tab, TabContent, TabPane } from "react-bootstrap";
/*import React, {useState} from "react";*/
import { Projectcard } from "./ProjectCards";
import imgen from "../images/donramon.jpg";
import imgen2 from "../images/superdebarrio.jpg";
import imagenpresup from "../images/imagenpresup.jpg";
import imgen3 from "../images/landingpage.jpg";
import imgen4 from "../images/inversionito.jpg";
import imgen5 from "../images/argentina.jpg";



export const Projects =()=>{
        
        const projectsReact=[
            {
                index: 1,
                tittle: "Landing Personal Page",
                description: "Pagina personal desarrollada con React, Tailwind CSS",
                imagen:imgen3,
                enlace:"https://landingpagemartin.netlify.app/",
            },
            
        ];

        const projectsLaravel=[
            {
                index: 1,
                tittle: "Inversionito: evaluador de precio relativo de acciones",
                description: "Evlua rangos de precios mediante RSI por Apis. Desarrollada en Laravel. Link a repositorio",
                imagen:imgen4,
                enlace:"https://github.com/Martinconvertible/inversionito",
            },
            {   
                index: 2,
                tittle: "Venta de excursiones",
                description: "Trabajo final para Fullstack PhP. Realizado en Laravel con DB en Maria Db. Link a repositorio",
                imagen:imgen5,  // referenciar la imagen del import de arriba aqui sin envolver en {}, osea imgen y no {imgen}
                enlace:"https://github.com/Martinconvertible/argentina",
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
                    <h1> Proyectos Personales</h1>
                    
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
                                        <Projectcard key={index}{...project}/>
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