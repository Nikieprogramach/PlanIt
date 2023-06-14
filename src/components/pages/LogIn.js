import React, {useState} from "react";
import '../../App.css'
import './LogIn.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function LogIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      console.log(email, password);

      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password }),
        }).then(response => response.json())
          .then(data => {
          console.log(data.session_id, data.username);
          localStorage.setItem('sessionId', data.session_id);
          localStorage.setItem('sessionUsername', data.username);

          const sessionId = localStorage.getItem('sessionId');
          console.log("session id from browser", sessionId)

          window.location.href = '/';
          // Do something with the received JSON data
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });

        // if (response.ok) {
        //   console.log('Form submitted successfully!');
        // } else {
        //   console.error('Form submission failed.');
        // }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };  

    return(
        <div className="sign-up-page">
            <div class="sign-up-container">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                </div>
                <button type="submit">Submit</button>
                </form>
                <p>Don't have an account? </p>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    )   
}