import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Row className={"justify-content-center"}>
          <Col></Col>
          <Col>
            <Form.Control
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search for image..."
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
