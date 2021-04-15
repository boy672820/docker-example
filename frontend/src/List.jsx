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
import axios from "axios";

export default function List() {
    const [content, setContent] = React.useState("");
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://127.0.0.1:8081").then((response) => {
            const { data } = response;

            const res = data.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.content}</td>
                        <td>
                            <Form.Check type="checkbox" value={row.ID} />
                        </td>
                    </tr>
                );
            });

            setList(res);
        });
    }, []);

    const handleContent = (e) => {
        const { value } = e.target;

        setContent(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { length } = list;

        axios({
            method: "post",
            url: "http://127.0.0.1:8081/create",
            data: {
                content: content,
            },
        }).then((response) => {
            if (response.status === 201) {
                const item = (
                    <tr key={length + 1}>
                        <td>{length + 1}</td>
                        <td>{content}</td>
                        <td>
                            <Form.Check type="checkbox" />
                        </td>
                    </tr>
                );

                setList([...list, item]);
            }
        });
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
