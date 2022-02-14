import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ReservationS1 from "../components/reservation-s1";
import ReservationS2 from "../components/reservation-s2";
import ReservationS3 from "../components/reservation-s3";
import ReservationS4 from "../components/reservation-s4";

class Reservation extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ReservationS1/>
                <ReservationS2/>
                <ReservationS3/>
                <ReservationS4/>
            </Container>    
        );
    }
}

export default Reservation;