import { Col } from "react-bootstrap"


export const Projectcard =({tittle,description,imagen}) =>{
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imagen}/>
                <div className="proj-txtx">
                    
                    <h4>{tittle}</h4>
                    <span> {description}</span>
                </div>
            </div>
        </Col>
    )
}