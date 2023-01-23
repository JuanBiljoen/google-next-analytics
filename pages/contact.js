import Layout from '../components/Layout'
import React, { useRef } from "react";
//page for contact details and nav included with styled jsx
export default () => {
  return (
    <Layout>
    <form>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" rows="5" required />
      </label>
      <br />
      <input type="submit" value="Submit" className="submit-btn" />
    </form>
    <div className="contact-details">
      <h3>Contact Details</h3>
      <p>Email: juangaljoen@gmail.com</p>
      <p>Phone: 555-555-5555</p>
      <p>Address: 123 Main St, Anytown USA</p>
    </div>
    <style jsx>{`
      form {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid gray;
        border-radius: 5px;
      }
      label {
        display: block;
        margin-bottom: 10px;
      }
      input[type='text'],
      input[type='email'],
      textarea {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid gray;
        border-radius: 4px;
      }
      .submit-btn {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      .submit-btn:hover {
        background-color: #45a049;
        }
        .contact-details {
        text-align: center;
        margin: 20px 0;
        }
        .contact-details h3 {
        margin-bottom: 10px;
        }
        `}</style>
        
        </Layout>
  
  );
};