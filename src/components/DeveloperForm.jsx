import { useReducer } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { developer } from "./Developer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DeveloperData () {
    const [ developers, dispatch ] = useReducer( developer, [] );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        const name = event.target.name.value;
        const favProgLanguages = event.target.favProgLanguages.value;
        const favTech = event.target.favTech.value;
        const favFood = event.target.favFood.value;
        const favDrink = event.target.favDrink.value;
        dispatch( {
            type: 'ADD_Developer',
            payload: {
                name: name,
                favProgLanguages: favProgLanguages,
                favTech: favTech,
                favFood: favFood,
                favDrink: favDrink
            }
        } );
    };

    const handleDelete = ( e, id ) => {
        e.preventDefault();
        dispatch( {
            type: 'DELETE_Developer',
            payload: id
        } );
    };
    return (
        <>
            <div>Created By @zaidalshibi</div>
            <Card style={{ width: '22rem', justifyContent: 'center', display: 'flex', margin: '10px auto' }}>
                <Card.Header>Developer Form</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favProgLanguages">
                            <Form.Label>Favorite Programming Languages</Form.Label>
                            <Form.Select aria-label="favProgLanguages">
                                <option>JavaSE</option>
                                <option>python</option>
                                <option>javaScript</option>
                                <option>php</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favTech">
                            <Form.Label>Favorite Tech</Form.Label>
                            <Form.Select aria-label="favTech">
                                <option>React.js</option>
                                <option>Node.js</option>
                                <option>Next.js</option>
                                <option>Laravel</option>
                                <option>Express.js</option>
                                <option>Django</option>
                                <option>Flask</option>
                                <option>Spring</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favFood">
                            <Form.Label>Favorite Food</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your favorite food" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="favDrink">
                            <Form.Label>Favorite Drink</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your favorite drink" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <section>
                <h1>Developer Data</h1>
                <Row xs={2} md={3} className="g-4">
                    {developers.length ? developers.map( ( developer ) => (
                        <Col key={developer.id}>
                            <Card style={{ width: '20rem', justifyContent: 'center', display: 'flex', margin: '10px auto' }}>
                                <Card.Body>
                                    <Card.Title>
                                        {developer.name}
                                    </Card.Title>
                                    <Card.Text>
                                        Favorite Programming Languages: {developer.favProgLanguages}<br />
                                        Favorite Technologies: {developer.favTech}<br />
                                        Favorite Food: {developer.favFood}<br />
                                        Favorite Drink: {developer.favDrink}
                                    </Card.Text>
                                    <Button variant="danger" onClick={(e) => handleDelete(e, developer.id)}>Delete Developer Data</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ) ) : <h3>No developers yet!</h3>}
                </Row>
            </section>
        </>
    );
}

export default DeveloperData;