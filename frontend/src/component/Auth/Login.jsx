import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LayoutComp from '../LayoutComp';
import axios from 'axios';
import Loading from '../LoadingCom/Loading';
import ErrorMessage from '../LoadingCom/ErrorMessage';
import './LoginScreen.css'

function BasicExample() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useNavigate();

    const validateForm = () => {
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (password.trim() === "") {
            setError("Please enter your password.");
            return false;
        }
        return true;
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            };

            setLoading(true);

            const { data } = await axios.post('/api/users/login', {
                email,
                password,
            }, config);

            console.log(data);
            localStorage.setItem('User Info', JSON.stringify(data));
            setLoading(false);

            // Redirect to the home page upon successful login
            history.push('/home');
        } catch (error) {
            if (error.response && error.response.status === 404) {
                // Specific error message for email not found
                setError("Email does not exist. Please check your email.");
            } else {
                // Generic error message for other errors
            setError(error.response?.data?.message || "Form Submitted Successfully");
            }
            setLoading(false);
        }
    };

    return (
        <LayoutComp>
            <Form className='login-form' onSubmit={submitHandler}>
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email Here" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <span>
                    New Customer Register Here <Link to={'/register'}>Sign Up</Link>
                </span>
            </Form>
        </LayoutComp>
    );
}

export default BasicExample;
