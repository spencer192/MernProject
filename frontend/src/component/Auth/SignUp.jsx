import { Form, Button } from "react-bootstrap";
import LayoutComp from '../LayoutComp';
import { useState } from 'react';
import { Link, useNavigate   } from "react-router-dom";
import  './signUp.css'
import ErrorMessage from "../LoadingCom/ErrorMessage";
import axios from "axios";
import Loading from "../LoadingCom/Loading";

function BasicExample() {

        const navigate = useNavigate ();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState ("")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(null)

const submitHandler = async(e) => {

    e.preventDefault()
    // console.log(name,email,password,confirmpassword)

    if (password !== confirmpassword) {
        setMessage("Password Does Noat Match")
    }
    else{
        setMessage(null)
        try {

            const config = {
                headers:{
                    "Content-Type": "application/json",
                }
            }

            setLoading(true)

            const{data}= await axios.post("/api/users",

            {
                name, email, password
            }, config
            );

            console.log(data);
            localStorage.setItem("UserInfo", JSON.Stringify(data))
            setLoading(false)
             navigate.push("/login");
        } catch (error) {
            setError(error.response?.data?.message || "Form Submitted Successfully");

            setLoading(false);
        }
    }

}

  return (
    <LayoutComp>
        <Form  className= "register-form" onSubmit={submitHandler}>
            {error && <ErrorMessage variant="info">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {loading && <Loading /> }
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" value = {name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value = {email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value = {password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" value = {confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Confirm Password" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
            Register
        </Button>
          <span>
           Do Your Already Have Account? <Link to={'/login'}>Login</Link>
        </span>
        </Form>
    </LayoutComp>
  );
}

export default BasicExample;