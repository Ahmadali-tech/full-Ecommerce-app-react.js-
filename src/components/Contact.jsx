import React, { useState } from 'react';
import axios from 'axios'; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        number: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/submit-form', formData);
            console.log('Contact info sent:', response.data);
            setFormData({
                name: '',
                email: '',
                message: '',
                number: ''
            });

        } catch (error) {
            console.log('Error sending contact info:', error);
            
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
            
                console.log('Error', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Number</label>
                <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact;

