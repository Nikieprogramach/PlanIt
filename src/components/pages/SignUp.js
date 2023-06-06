import React, {useState} from "react";
import '../../App.css'
import './SignUp.css'

export default function SignUp(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/submit', {
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
    };  

    return(
        // <div className="sign-up-container">
        //     <h1 className="sign-up">Sign Up</h1>
        //     <form className="sign-up-form">
        //         <input type="email" name="email" placeholder="Your Email" className="email-input"/>
        //         <input type="password" name="password" placeholder="Your Password" className="password-input"/>
        //         <button className="sign-up-button">Sign Up</button>
        //     </form>
        // </div>
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
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )   
}