import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../images/base imagen.png";
import { useState, useEffect } from "react";



export const Banner = () => {
    const torotate= ["React", "Laravel", "Javascript"];
    const [loopNum , setLoopNum] = useState(0);
    const [text , setText] = useState (''); 
    const [delta , setDelta] = useState (300 - Math.random () * 100) ;
    const [isDeleting , setIsDeleting] = useState (false);
    const period = 2000 ;
    

    /* el modulo % de un numero es igual a por ej 4%3 se calcula... division  4 en 3 entra 1 vez dentro del 4, y luego
        restarle al 4 el numero (3*1 ---que es la cantidad de veces que entra osea 1), entonces
        4%3 =   4-(3*1) ---- de la misma forma 2%3-- 3 entra 0 veces en 2 por lo que será  2-(3*0)=2 ------------ es usara para repetir infinitamente 
         las tres palabras guardadas*/

         useEffect (()=> {
            let ticker = setInterval (()=> { 
            tick()}, delta)

            return ()=> {
                clearInterval (ticker)
            };}, [text] )

         
            const tick= () =>{
            let i = loopNum%torotate.length; 
            let fullText = torotate[i];
            let updatedText = isDeleting? fullText.substring (0,text.length -1) : fullText.substring (0, text.length +1);
            setText (updatedText); 

            if (isDeleting){
                setDelta (prevDelta => prevDelta/2)
            }
            if (!isDeleting && updatedText === fullText) {
                setIsDeleting (true);
                setDelta (period);}
                else if ( isDeleting && updatedText=== ''){
                    setIsDeleting (false);
                    setLoopNum (loopNum + 1);
                    setDelta (500)
                }

            }
            


    return (
        <section className="banner" id="home">
            <Container>
                 <Row className="align-items-center">
                    {/* el col xs, bootstrap para diseño adaptativo en xs 12 es la unidad , osea 1 (pantalla completa) , en md 6 (la mitad) */}
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my portfolio </span>
                        <h1> {'Hi! Im web developer JR.. '} <span className="wrap">{text} </span></h1>
                        <p> Estoy incursionando en la programación desde hace tres años, he tomado cursos</p>
                        <button onClick={()=> alert ( " conectemseee")}> Contactame </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header Img"/>
                    </Col>
                 </Row>
            </Container>
        </section>
    )
}