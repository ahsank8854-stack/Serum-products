import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ChevronDown } from 'lucide-react';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'How long does shipping take?',
      a: 'Orders are processed within 24 business hours. Express shipping arrives in 2–3 business days within North America and Europe.'
    },
    {
      q: 'Are your products safe during pregnancy?',
      a: 'Yes, all VERDANT products are 100% natural and free from endocrine disruptors, retinoic acid, or synthetic chemicals. We recommend consulting your doctor if you have specific oil sensitivities.'
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-Day Happiness Guarantee. If a formula does not suit your hair type, contact our concierge team for a full refund or exchange.'
    },
    {
      q: 'How do I track my shipment?',
      a: 'Once your order is dispatched, a tracking code and link will be automatically emailed to you.'
    }
  ];

  return (
    <div className="py-5" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container py-4">
        
        <div className="text-center max-w-xl mx-auto mb-5">
          <span className="section-tag">Client Support & Concierge</span>
          <h1 className="section-title">Get in Touch</h1>
          <p className="section-desc mx-auto">
            Have questions about our botanical formulas, custom hair consultations, or order tracking? Our trichology concierges are ready to assist.
          </p>
        </div>

        <div className="row g-5 mb-5">
          
          {/* Contact Form Left */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 bg-white rounded-3 border shadow-sm">
              <h3 className="font-serif fs-3 mb-4 text-dark">Send Us a Message</h3>

              {submitted ? (
                <div className="p-5 text-center bg-light rounded-3 fade-in-up">
                  <CheckCircle2 size={48} className="text-success mb-3" />
                  <h4 className="font-serif mb-2 text-dark">Message Sent Successfully</h4>
                  <p className="text-muted small mb-4">
                    Thank you, <strong>{formData.name}</strong>. A botanical concierge will respond to <strong>{formData.email}</strong> within 12 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="btn btn-verdant-outline btn-sm rounded-pill px-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="e.g. eleanor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-muted">Inquiry Subject</label>
                      <select
                        className="form-select"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Tracking">Order Tracking & Returns</option>
                        <option value="Hair Consultation">Hair Consultation</option>
                        <option value="Press & Wholesale">Press & Wholesale</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-bold text-muted">Message Details *</label>
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="How can our botanical experts help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-verdant-primary py-3 px-4 self-start">
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Right */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              
              <div className="p-4 bg-white rounded-3 border shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 bg-light text-success rounded-circle">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-dark fs-6">Email Support</h6>
                    <span className="small text-muted">24/7 Response Guarantee</span>
                  </div>
                </div>
                <p className="mb-0 text-dark fw-medium small">concierge@verdantbotanicals.com</p>
              </div>

              <div className="p-4 bg-white rounded-3 border shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 bg-light text-warning rounded-circle">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-dark fs-6">Telephone Concierge</h6>
                    <span className="small text-muted">Mon–Fri, 9am–6pm EST</span>
                  </div>
                </div>
                <p className="mb-0 text-dark fw-medium small">+1 (800) 482-3732</p>
              </div>

              <div className="p-4 bg-white rounded-3 border shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 bg-light text-success rounded-circle">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold text-dark fs-6">Flagship Boutique & Lab</h6>
                    <span className="small text-muted">Paris & London</span>
                  </div>
                </div>
                <p className="small text-muted mb-0">
                  24 Rue du Faubourg Saint-Honoré, 75008 Paris, France <br />
                  14 Bond Street, Mayfair, London W1S 4PS, UK
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-2xl mx-auto pt-4">
          <h3 className="section-title text-center mb-4">Frequently Asked Questions</h3>
          <div className="d-flex flex-column gap-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border rounded-3 bg-white overflow-hidden shadow-sm">
                <button
                  className="btn w-100 text-start p-4 d-flex align-items-center justify-content-between fw-bold text-dark"
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                >
                  <span className="font-serif fs-5">{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-muted small leading-relaxed border-top pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
