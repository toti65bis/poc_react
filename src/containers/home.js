import React , {Component} from 'react';
import JumboComponent from '../components/jumbotron.js';
import {Button , Container, Col,Row} from 'react-bootstrap';
import { Redirect, withRouter, Route  } from 'react-router-dom'


class Home extends Component {
    
    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        this.state = 
        { redirect: false,
          target: ''   
        };
        
      }

   
 setLogin = () => {
    this.setState({
      redirect: true,
      target: 'login'
    })
  }

  setJoin = () => {
    this.setState({
      redirect: true,
      target: 'join'
    })
  } 

  componentDidUpdate = () => {
    if (this.state.redirect && this.state.target==='login') {
        this.props.history.push('/login');
    }
    if (this.state.redirect && this.state.target==='join') {
        this.props.history.push('/join');
      }
  }


    render() {
    
  
    return (
        <Container fluid>
        <Row >
            <Col>
                <JumboComponent></JumboComponent>
            </Col>   
            
        </Row>    
        <Row className="justify-content-md-center">
        
            <Col  md="auto"> 
                <Button onClick={this.setLogin} variant="primary" size="lg">
                    Login
                </Button>{' '}
           
         
                <Button onClick={this.setJoin} variant="secondary" size="lg">
                    Unirse
                </Button>
            </Col>
        </Row>
        </Container>
        );
   }

}

export default withRouter(Home);