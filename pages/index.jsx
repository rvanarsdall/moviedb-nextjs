import Link from "next/link";
const linkLists = [{ url: "/1-getting-started", linkName: "Getting Started" }];
import { ListGroup, Container, Row, Col } from "react-bootstrap/";
export default function Home() {
  return (
    <div>
      <Container>
        <h1 className="text-center">Welcome to Learning React</h1>
        <Row>
          <Col sm={4}>
            <ListGroup className="mt-5">
              <ListGroup.Item>
                <Link href="/1-getting-started">Getting Started</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <p>Please select a link over to go to that topic area</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
