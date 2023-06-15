import React, {useState} from "react";
import '../../App.css'
import './SignUp.css'
import { Link } from "react-router-dom";

export default function SignUp(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      console.log(username, email, password);

      try {
        const response = await fetch('http://localhost:3001/sign-up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully!');
          console.log(response);
        } else {
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }

      window.location.href = '/login';
    };  

    return(
        <div className="sign-up-page">
            <div class="sign-up-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" value={username} onChange={(event) => setUsername(event.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                </div>
                <button className="submit" type="submit">Sign up</button>
                <div className="login">
                  <p>Already have an account? </p>
                  <Link to="/login">Log In</Link>
                </div>
                </form>

            </div>
        </div>
    )   
}