import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const styles = {
    shadow: {
        textShadow: "5px 5px 25px black"
    },
    yellow: {
        color: "#F7B801",
    }
};

const Contact = () => {
    const [form, setForm] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    
    const handleSubmit = event => {
        event.preventDefault();
        emailjs.sendForm('service_c7rxoqk', 'template_dia2ck5', event.target, 'user_HRpuwBHjAKteVvrKCOZrz')
            .then(result => {
                console.log(result.text);
                setForm({
                    user_name: "",
                    user_email: "",
                    message: ""
                });
            }, error => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <h4 className="text-center text-lg-right text-white" style={styles.shadow}><span className="font-weight-bold" style={styles.yellow}>Email:</span> DanielJHersh@gmail.com</h4>
            <h4 className="text-center text-lg-right text-white mb-5" style={styles.shadow}><span className="font-weight-bold" style={styles.yellow}>Phone Number:</span> &zwj;(818) &zwj;632-9905</h4>
            <section className="form-group">
                <h1 class="display-4 font-weight-bold text-white text-center" style={styles.shadow}>Let's Work Together!</h1>
                <article class="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="hidden" name="contact_number" />
                            <label for="name" class="text-white">
                                <h3>Name</h3>
                            </label>
                            <input type="text" name="user_name" value={form.user_name} class="form-control" placeholder="Enter name" onChange={e => setForm({ ...form, user_name: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label for="Email" className="text-white">
                                <h3>Email address</h3>
                            </label>
                            <input type="email" name="user_email" value={form.user_email} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setForm({ ...form, user_email: e.target.value })}/>
                        </div>
                        <div className="form-group">
                            <label for="message" className="text-white">
                                <h3>Message</h3>
                            </label>
                            <textarea name="message" value={form.message} className="form-control" rows="3" placeholder="Enter message" onChange={e => setForm({ ...form, message: e.target.value })}/>
                        </div>
                        <button type="submit" value="send" className="btn btn-lg text-white repo">
                            <h3 className="font-weight-bold" style={{marginBottom: "-.5px", textShadow: "none"}}>Submit</h3>
                        </button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default Contact;