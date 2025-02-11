import { Col, Container, Row } from "react-bootstrap"
import logo from '../images/logo.jpg'
import navIcon from '../images/nav-icon1.svg'
import navIcon2 from '../images/nav-icon2.svg'

export const Footer = () => {
    return(
        <section className="footer" id="footer">
    <Container>
        <Row className="align-item-center">
            <Col sm={6}>
            <img src={logo} alt="logo"/>
            <div>
                <p>+34 663964834 / martinfcardone@gmail.com</p>
            </div>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="https://es.linkedin.com/in/martin-cardone-arquitecto"><img src={navIcon}/></a>
                    <a href="https://www.facebook.com/martin.cardone.3"> <img src={navIcon2}/></a>
                </div>
                <p> 2024</p>                 
            </Col>
        </Row>
    </Container>
    </section>
    )

}