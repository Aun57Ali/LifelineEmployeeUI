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

export default function Emergency() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Emergency Contact</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>ID</label>
                      <Input defaultValue="" name="EC_H_ID" placeholder="" type="Number" />
                    </FormGroup>
                  </Col>
                  
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                    <label>Emergency No. 2</label>
                      <Input
                        defaultValue=""
                        name="EC_Number1"
                        placeholder="Contact"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                    <label>Emergency No. 2</label>
                      <Input
                        defaultValue=""
                        name="EC_Number2"
                        placeholder="Contact"
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
  )
}
