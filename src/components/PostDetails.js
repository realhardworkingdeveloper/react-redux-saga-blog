import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function PostDetails() {
  const { post, loadingPostDetails } = useSelector(
    (state) => state.PostReducer
  );

  return (
    <Container>
      {loadingPostDetails ? (
        <div className="loader">
          <h1>loading</h1>
        </div>
      ) : (
        <Row className="posts">
          <Col lg={8} md={10} sm={12}>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
          </Col>
        </Row>
      )}
    </Container>
  );
}