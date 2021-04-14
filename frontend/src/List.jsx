import React from "react";
import {
    Card,
    Col,
    Container,
    Form,
    Button,
    Row,
    Table,
} from "react-bootstrap";

export default function List() {
    const [content, setContent] = React.useState("");
    const [list, setList] = React.useState([]);

    const handleContent = (e) => {
        const { value } = e.target;

        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { length } = list;

        const item = (
            <tr key={length}>
                <td>{length}</td>
                <td>{content}</td>
                <td>
                    <Form.Check type="checkbox" />
                </td>
            </tr>
        );

        setList([...list, item]);
    };

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={10} lg={10}>
                    <Card style={{ marginBottom: 30 }}>
                        <Card.Header>
                            <Card.Title>To-do list</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Content</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Please enter the content.."
                                        onChange={handleContent}
                                        value={content}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col xs={12} sm={12} md={10} lg={10}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th width="80%">To-do</th>
                                <th>Check</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.length ? (
                                list
                            ) : (
                                <tr>
                                    <td colSpan="3" align="center">
                                        No body :(
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
