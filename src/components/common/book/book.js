import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from "gatsby"
import Button from 'react-bootstrap/Button'
import { FaChevronRight, FaCross } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup'

const Book = ({ children, title, count, data, book, colSize }) => {
    const link = "/kjv21/" + title.toLowerCase() +"/1"
    const cols = "col-" + colSize
    return (
        <>
            {/* <Link to={link} state={data}> */}
                {/* <button type="button" className="btn btn-light me-3 mb-3">
                    {title}  <span class="badge bg-danger">{title.substring(0,1)}</span>
                </button> */}
                {/* <div className="col-3">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header"><div></div>50 Chapters</div>
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                </div> */}
            <div className={cols} >
            <Link to={link} state={data}>
            <Card
                border="dark"
                text='dark'
                className="mb-2"
            >
                    <Card.Header>
                        <div className="d-flex justify-content-between">
                            
                            <div>50 Chapters</div>
                            <div>20 verses</div>
                        </div>
                    </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {/* <Link to={link} state={data}> */}
                            {/* <Button variant="danger"> */}
                                {/* {title} */}
                            {/* </Button> */}
                        {/* </Link> */}
                                <div className="d-flex justify-content-between">
                                    {/* <Link to={link} state={data}> */}
                                    <div><FaCross /> {title}</div>
                                    <Button variant="light">
                                        <FaChevronRight />
                                    </Button>
                                    {/* </Link> */}
                                </div>
                    </Card.Title>
              
                </Card.Body>
                <Card.Footer> 
                     {/* <div className="d-flex justify-content-end">
                        <Link to={link} state={data}>
                            <Button variant="danger">
                                <FaChevronRight />
                            </Button>
                        </Link>
                    </div> */}
                    {/* <div className="d-flex justify-content-between">

                            <div className="">
                                <ListGroup horizontal>
                                    <ListGroup.Item variant="dark"><FaDotCircle /></ListGroup.Item>
                                    <ListGroup.Item variant="danger"><FaDotCircle /></ListGroup.Item>
                                    <ListGroup.Item variant="dark"><FaDotCircle /></ListGroup.Item>
                                </ListGroup>
                            </div>
                        <div>
                            <Link to={link} state={data}>
                                <Button variant="danger">
                                    <FaChevronRight />
                                </Button>
                            </Link>
                        </div>
                    </div> */}
                </Card.Footer>
            </Card>
                </Link>
            </div>
            {/* </Link> */}

        </>
    )
}

export default Book