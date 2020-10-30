import React from "react";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const gridExamplesPage = () => {
  return (
    <div>
        <MDBContainer className="container">
        <MDBRow>
            <MDBCol><Button className="button">Tecnologia</Button></MDBCol>
            <MDBCol><Button className="button">Arte y Musica</Button></MDBCol>
            <MDBCol><Button className="button">Repuestos</Button></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Button className="button">Industrial</Button></MDBCol>
            <MDBCol><Button className="button">Domestico</Button></MDBCol>
            <MDBCol><Button className="button">Audiovisual</Button></MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol><Button className="button">Educacion</Button></MDBCol>
            <MDBCol><Button className="button">Recracion</Button></MDBCol>
            <MDBCol><Button className="button">Mecanica</Button></MDBCol>
        </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default gridExamplesPage;