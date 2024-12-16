import { Col, Container, Row } from "react-bootstrap"
import logo from '../images/logo.svg'
import navIcon from '../images/nav-icon1.svg'
import navIcon2 from '../images/nav-icon2.svg'

export const Footer = () => {
    return(
    <Container>
        <Row className="align-item-center">
            <Col sm={6}>
            <img src={logo} alt="logo"/>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href=""> <img src={navIcon}/></a>
                    <a href=""> <img src={navIcon2}/></a>
                </div>
                <p> 2024</p>                 
            </Col>
        </Row>
    </Container>
    )

}