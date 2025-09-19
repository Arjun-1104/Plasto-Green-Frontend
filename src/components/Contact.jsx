import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-gradient-to-br mt-16 from-green-50 to-emerald-100 min-h-screen pt-20 pb-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
          Contact Plasto Green
        </h1>
        <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
          Have questions about our eco-friendly solutions? We’d love to hear
          from you. Fill out the form or use our contact details below.
        </p>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject *"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Message *"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-md p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-4 text-green-700">
                <li>
                  <span className="font-semibold">Address:</span> 123 Eco Park,
                  Green Valley, CA
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> +1 (555)
                  123-4567
                </li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  info@plastogreen.com
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-md border border-green-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.2436849846818!3d34.05223908060612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1635959542132!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Plasto Green Location"
              ></iframe>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ 100% Eco-Friendly Materials</li>
                <li>✅ Fast 24-Hour Response</li>
                <li>✅ Expert Consultation</li>
                <li>✅ Sustainable Green Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
