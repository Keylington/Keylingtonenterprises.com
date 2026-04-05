import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Business Information</h2>
                <p>Name: Keylington Enterprises</p>
                <p>Address: 123 Keylington St, Keylington City, Keylantis</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;