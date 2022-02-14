import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import DeliveryS1 from "../components/delivery-s1";
import DeliveryS2 from "../components/delivery-s2";

class Delivery extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <DeliveryS1/>
                <DeliveryS2/>
            </Container>    
        );
    }
}

export default Delivery;