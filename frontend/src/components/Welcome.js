import React from "react";
import { Card, Button } from "react-bootstrap";

//const cardStyle = {
//  backgroundColor: "blue",
//};style={{ width: "75rem" }}

const Welcome = () => (
  <Card className="mt-5" style={{ backgroundColor: "#eeeeee" }}>
    <h1 className="mt-5" style={{ fontWeight: "bold", marginLeft: "2rem" }}>
      Images Gallery
    </h1>
    <p style={{ fontSize: "1.3rem", marginLeft: "3rem" }}>
      Simple App for displaying photos from Unsplash.com. Enter text into the
      search field to begin.
    </p>
    <p>
      <Button
        style={{ marginLeft: "2rem", marginBottom: "3.5rem" }}
        variant="primary"
        href="https://unsplash.com"
        target="_blank"
      >
        Learn more
      </Button>
    </p>
  </Card>
);
export default Welcome;
