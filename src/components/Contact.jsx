import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.mp4";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);

        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);

        alert("Something went wrong.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <p
            style={{
              color: "#aaa6c3",
              letterSpacing: "6px",
              marginBottom: "35px",
            }}
          >
            GET IN TOUCH
          </p>

          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "60px",
            }}
          >
            Contact.
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <div>
              <label style={{ fontWeight: "600" }}>Your Name</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontWeight: "600" }}>Your email</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontWeight: "600" }}>Subject</label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="subject?"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontWeight: "600" }}>Your Message</label>

              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                required
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "140px",
                padding: "14px",
                background: "#151030",
                color: "white",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
                className="w-full h-full object-cover md:object-right rounded-3xl"
                width="8030"
                height="750"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                poster=""
              >
                <source src={contact} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
         
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "16px",
  background: "#151030",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontSize: "15px",
  outline: "none",
};

export default Contact;