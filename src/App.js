
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import dateFormat from 'dateformat';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function App() {

  const [name, setName] = useState("");
  const [namewi, setNamewi] = useState("");
  const [bday, setBday] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [Dep, setDep] = useState("");
  const [job, setJob] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    Axios.get("https://nsbm-smp-project.herokuapp.com/api/get").then((response) => {
      setEmployeeList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("https://nsbm-smp-project.herokuapp.com/api/insert", {
      full_name: name,
      name_with_in: namewi,
      birth_day: bday,
      age: age,
      address: address,
      city: city,
      telephone_no: tel,
      email: email,
      department: Dep,
      job_roll: job,
    });
    alert("Successfully Inserted");
    window.location.reload(true);

  };
  const deleteEmployee = (EmployeeId) => {
    Axios.delete(`https://nsbm-smp-project.herokuapp.com/api/delete/${EmployeeId}`);
    alert("Successfully Deleted");
    window.location.reload(true);

  };
  return (
    <Container>
      <Row>
        <Col className="align_center align_textCenter title-shadow">
          <h1>Employee Registration System</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="align_center">
          <Card style={{ width: '100%' }}>
            <Form>
              <Card.Body>
                <Card.Title>Add Employee Details</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter full name" data-testid ="full_name" onChange={(e) => {
                          setName(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name with Initials</Form.Label>
                        <Form.Control type="text" name="namewi" placeholder="Enter name with initials" onChange={(e) => {
                          setNamewi(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> {/*End Row*/}
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Birth Day</Form.Label>
                        <Form.Control type="date" name="bday" placeholder="Enter birth day" onChange={(e) => {
                          setBday(e.target.value)
                        }} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" name="age" placeholder="Enter age" onChange={(e) => {
                          setAge(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Enter address" onChange={(e) => {
                          setAddress(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Enter city" onChange={(e) => {
                          setCity(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> 
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telephone No</Form.Label>
                        <Form.Control type="number" name="tel" placeholder="Enter Telephone No" data-testid ="tel" onChange={(e) => {
                          setTel(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter Email" data-testid ="email"  onChange={(e) => {
                          setEmail(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> 
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" name="Dep" placeholder="Enter Department" onChange={(e) => {
                          setDep(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Job Roll</Form.Label>
                        <Form.Control type="text" name="job" placeholder="Enter job roll" onChange={(e) => {
                          setJob(e.target.value)
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row> 
                      
                </Card.Text>
                      
                <div className="align_buttonCenter">
                  <Button onClick={submitReview} className="button-size" variant="primary">Register</Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Button type="reset" className="button-size" variant="danger">Clear</Button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Card.Title>Employee Details</Card.Title>
                &nbsp;&nbsp;
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Name with Initials</th>
                      <th>Birth Day</th>
                      <th>Age</th>
                      <th>Address</th>
                      <th>City</th>
                      <th>TP No</th>
                      <th>Email</th>
                      <th>Department</th>
                      <th>Job Roll</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {employeeList.map((val) => {
                    return (
                      <tbody>
                        <tr>
                          <td>{val.full_name}</td>
                          <td>{val.name_with_in}</td>
                          <td>{dateFormat(val.birth_day,"dd-mm-yyyy")}</td>
                          <td>{val.age}</td>
                          <td>{val.address}</td>
                          <td>{val.city}</td>
                          <td>{val.telephone_no}</td>
                          <td>{val.email}</td>
                          <td>{val.department}</td>
                          <td>{val.job_roll}</td>
                          <td>
                          <Button onClick={()=>{deleteEmployee(val.id)}}  variant="danger"><RiDeleteBin6Fill/></Button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </Card.Body>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
