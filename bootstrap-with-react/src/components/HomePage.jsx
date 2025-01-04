import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()

    return (
        <Container fluid className="bg-secondary text-white border border-primary rounded p-4 mt-5 d-flex flex-column align-items-center">
            
            <h1>Welcome to the Marvel API</h1>

            <Button variant="primary" size="lg" className="shadow-lg" onClick={() => navigate('/browse-characters')}>Browse Now</Button>
            
            <div className="text-center m-3">
                <h2>New Shows</h2>
                <Row className="g-4">
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="/images/loki.png"/>
                            <Card.Body>
                                <Card.Title>Loki</Card.Title>
                                <Card.Text>
                                In Loki, the fan-favorite God of Mischief is arrested by the Time Variance Authority (TVA) 
                                after escaping with the Tesseract during the events of Avengers: Endgame. The show explores 
                                Loki's chaotic journey through alternate timelines, his unexpected partnership with TVA 
                                agent Mobius, and his encounters with Sylvie, a Loki variant with her own agenda. 
                                Together, they uncover a vast conspiracy about the true nature of the TVA, 
                                leading to groundbreaking revelations that reshape the multiverse.
                                </Card.Text>
                                <Button variant="primary" href="https://www.imdb.com/title/tt9140554/" target="_blank">Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="/images/Hawkeye.png"/>
                            <Card.Body>
                                <Card.Title>Hawkeye</Card.Title>
                                <Card.Text>
                                Hawkeye follows Clint Barton, the former Avenger, as he tries to enjoy a quiet Christmas 
                                with his family. His plans are derailed when Kate Bishop, a skilled young archer and avid 
                                fan, inadvertently draws him into a conflict with the criminal underworld. Together, 
                                they face off against new foes, including the Tracksuit Mafia, Yelena Belova, and the 
                                mysterious Kingpin, while exploring Clint’s past and passing the Hawkeye mantle to Kate.
                                </Card.Text>
                                <Button variant="primary" href="https://www.imdb.com/title/tt10160804/" target="_blank">Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="/images/Wanda.png"/>
                            <Card.Body>
                                <Card.Title>WandaVision</Card.Title>
                                <Card.Text>
                                WandaVision is a groundbreaking blend of classic sitcom homage and superhero mystery. 
                                Wanda Maximoff and Vision find themselves living an idyllic suburban life, complete with 
                                vintage TV tropes. However, as cracks in their seemingly perfect world emerge, it becomes 
                                clear that Wanda’s grief over Vision's death has led to the creation of a magical anomaly. 
                                The show delves into Wanda’s journey of loss, love, and acceptance, while setting the 
                                stage for her transformation into the Scarlet Witch and her role in the multiverse.
                                </Card.Text>
                                <Button variant="primary" href="https://www.imdb.com/title/tt9140560/" target="_blank">Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default HomePage;