import React , {Component} from 'react';
import {Jumbotron, Container, Image, Row, Col, Button, Card} from 'react-bootstrap';


class Join extends Component {

    render() {
    
    var styles = {

    }    
   
    return (
         <Jumbotron  style={{ padding: 0 , backgroundImage: `url(../../assets/logo-dixit.png)` ,
           backgroundColor: "black" , 
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center" }} >
            <Container>
                    <Row className ="show-grid"  float="center"> 
                        <Col>
                                    
                            <Card.Text className="text-white text-center font-bold">
                                Este es el Join
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className ="show-grid"  float="center">
                        <Col>
                            <Button variant="primary" outline color="white" size="lg" active >Login</Button>{' '}
                            <Button variant="secondary" outline color="white" size="lg" active >Register</Button>
                        </Col>
                    </Row>
            </Container>    
          </Jumbotron>
       );
       
   }

}

export default Join;