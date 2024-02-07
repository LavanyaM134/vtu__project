import React from 'react';
import {Carousel, Row, Col, Button} from 'react-bootstrap';

const HomeScreen =() => {

    return(
       <> 
        <div>
            <marquee> VTU Results 2024 out - check Exam results Here!!! 
                <a href='#'>click here...</a> Best of Luck!!!
            </marquee>
        </div>

        <div>
            <Carousel>
                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img4.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img height="550px"
                    className="d-block w-100"
                    src="images/img5.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <br/>
            <div>
                <Row>
                    <Col>
                        <h3><a href="#">Vision</a></h3>
                        <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
                        <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
                        <Button variant='warning'>Read more</Button>
                    </Col>
                    <Col>
                    <h3><a href="#">Mission</a></h3>
                        <p className='p-style'>To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                        <p className='p-style'>To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                        <Button variant='warning'>Read more</Button>
                    </Col>
                    <Col>
                        <h3><a href="#">Mandate</a></h3>
                        <p className='p-style'>The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.</p>
                        <p className='p-style'>*Design need based programs that ensure adequate human resource of the right kind.</p>
                        <p className='p-style'>*Establish objective evaluation and certification systems for students,programs and institutions.</p>
                        <p className='p-style'>*Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.</p>
                        <Button variant='warning'>Read more</Button>

                    </Col>
                </Row>
            </div>

        </div>

        </>
    )
}
export default HomeScreen