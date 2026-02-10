import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from './images/silly_cat.jpg';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Aiman Ahmed!
            </header>
            <h2>Welcome to my website😊</h2>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                Hello World!
            </p>
            <img src={image} alt="A picture of a silly cat" style={{width:"500px", height:"500px"}}/>
            <ul>
                <li>silly cats</li>
                <li>boring cats</li>
                <li>cute cats</li>
            </ul>
            <Button onClick= { () =>{console.log("Hello World!")}}>Log Hello World</Button>
            <Container>
                <Row>
                    <Col><div style={{ backgroundColor: "red", width: "150px", height: "100px"}}></div></Col>
                    <Col> <div style= {{backgroundColor: "red", width: "150px", height: "100px"}}></div></Col>
                </Row>
            </Container>
       
       
        </div>
    );
}

export default App;
