import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col></Col>
        <Col>
          <Form.Control type="search" placeholder="Search for image..." />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
