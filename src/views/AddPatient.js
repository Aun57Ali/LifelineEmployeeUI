import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

export default function AddPatient() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Patient</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>ID</label>
                      <Input defaultValue="" name="P_D_ID" placeholder="" type="Number" />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="4">
                    <FormGroup>
                      <label>Name</label>
                      <Input
                        defaultValue=""
                        name="P_Name"
                        placeholder="Last Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                    <label>Date Of Birth</label>
                      <Input defaultValue="" name="P_DOB" placeholder="DOB" type="date" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                    <label>Contact No.</label>
                      <Input
                        defaultValue=""
                        name="P_Mobile"
                        placeholder="Contact"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                    <label>Reason</label>
                      <Input
                        defaultValue=""
                        name="P_Reason"
                        placeholder="Health Issue"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                    <label>Email</label>
                      <Input
                        defaultValue=""
                        name="P_Email"
                        placeholder="example@gmail.com"
                        type="email"
                      />
                    </FormGroup>
                  </Col>
                  
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                    <label>Password</label>
                      <Input
                        defaultValue=""
                        name="P_Password"
                        placeholder=""
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="success" type="submit">
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
