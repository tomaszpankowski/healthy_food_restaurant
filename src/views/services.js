import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ServicesS1 from "../components/services-s1";
import ServicesS2 from "../components/services-s2";
import ServicesS3 from "../components/services-s3";

class Services extends Component{
    render(){
        return(        
            <Container fluid className="minh-100vh p-0">
                <ServicesS1/>
                <ServicesS2/>
                <ServicesS3/>
            </Container>    
        );
    }
}

export default Services;