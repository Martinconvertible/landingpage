import { Col, Container, Nav, NavLink, Row, Tab, TabContent, TabPane } from "react-bootstrap";
import React, {useState} from "react";
import { Projectcard } from "./ProjectCards";
import imgen from "../images/donramon.jpg";
import imgen2 from "../images/superdebarrio.jpg";



export const Projects =()=>{
        
        const projects=[
            {
                index: 1,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen,
            },
            {   
                index: 2,
                tittle: "Bussiness Startup",
                description: "Design y development",
                imagen:imgen2,  // referenciar la imagen del import de arriba aqui sin envolver en {}, osea imgen y no {imgen}
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
                         Angular
                    </Nav.Link>
                    
                    </Nav.Item>
                 </Nav>
                    
                        <TabContent >
                            <TabPane eventKey="first" >
                            <Row >
                                {console.log(projects)}
                                {console.log (imgen)}
                                {projects.map((project,index)=>{
                                    return (
                                        <Projectcard key={index}{...project}/>
                                    )})}
                                    
                                
                            </Row>
                            </TabPane>
                            <TabPane eventKey="second">
                            <Row  >
                                {console.log(projects)}
                                {projects.map((project,index)=>{
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
                                {console.log(projects)}
                                {projects.map((project,index)=>{
                                    return (
                                        <h5 className="pepe" key={index}>{project.description}</h5>
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