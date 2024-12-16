import { Container, Row ,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
/*import { Carousel } from "react-multi-carousel";*/
import "react-multi-carousel/lib/styles.css";
import metere1 from "../images/meter1.svg";
import metere2 from "../images/meter2.svg";
import metere3 from "../images/meter3.svg";
import colorSharp from "../images/color-sharp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
        return (
            <section href="#tete" className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Arquitecto pies descalzos
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={metere1} alt="image" />
                                    <h5> Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={metere2} alt="image" />
                                    <h5> Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={metere3} alt="image" />
                                    <h5> Web Developer</h5>
                                </div>
                            </Carousel>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-left" src={colorSharp}/>
            </section>
        )

}