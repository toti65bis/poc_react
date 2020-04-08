import React , {Component} from 'react';
import {Jumbotron as Jumbo , Container} from 'react-bootstrap';
import styled from 'styled-components';
import dixitImage from '../assets/dixit-logo-3.jpg';

class JumboComponent extends Component {

    Styles = styled.div`
        .jumbo {
          background: url(${dixitImage}) no-repeat  top;
          background-size: cover;
          color: #ccc;
          position: relative;
          z-index: -2;
          overflow: hidden;
          width: 100%;
          height: 300px;
        }

        .overlay {
            background-color: #000;
            opacity: 0.7;
            position: absolute;
            top:0;
            left:0;
            bottom:0;
            rigth:0;
            z-index: -1;
        }

        .h1 {
            color: #FFFFFF;
            font-weight: bold;
        }

        .p {
            color: #FFFFFF;
        }

    `

    
     render() {
         return (
            <this.Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1 className="h1">Dixit Online</h1>
                        <p className="p">Divertite con tus amigos siendo creativo.</p>
                    </Container>
                    
                </Jumbo>

            </this.Styles>
         );
     }

}

export default JumboComponent;