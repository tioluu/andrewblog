import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [state, handleSubmit] = useForm("mvgpnadr"); // Replace with your Formspree form endpoint

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        try {
          await handleSubmit(e);
          toast.success('Thank you for your message!');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          });
        } catch (error) {
          toast.error('There was an error submitting the form.');
          console.error('Form submission error:', error);
        }
      };
    return (
        <div className="contact-form-container">
            <div className="contact-info">
                <div>
                    <h3>Phone</h3>
                    <p>+234 7063538500</p>
                </div>
                <div>
                    <h3>Email</h3>
                    <p>andyoged92@gmail.com</p>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <p>
                        <a href="https://x.com/natkingkol_" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </a>
                    </p>
                </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting}>Send</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;
