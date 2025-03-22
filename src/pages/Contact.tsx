
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { cn } from '@/lib/utils';

const Contact = () => {
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll respond shortly.",
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // Contact info
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['123 Festari Way, Suite 100', 'New York, NY 10001'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@festari.com', 'support@festari.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM'],
    },
  ];

  return (
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Get in Touch</h1>
              <p className="text-festari-100 mb-6">
                Have questions about our services, properties, or educational offerings? 
                We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-display font-bold text-festari-900 mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-festari-800 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-festari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-festari-800 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-festari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-festari-800 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-festari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Property Inquiry">Property Inquiry</option>
                        <option value="Course Information">Course Information</option>
                        <option value="Research Collaboration">Research Collaboration</option>
                        <option value="Speaking Engagement">Speaking Engagement</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-festari-800 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full p-3 border border-festari-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className={cn(
                        "w-full p-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all",
                        isSubmitted 
                          ? "bg-green-600 text-white hover:bg-green-700" 
                          : "bg-accent text-white hover:bg-accent/90"
                      )}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle size={18} />
                          <span>Message Sent</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Contact info */}
              <div className="lg:col-span-5">
                <div className="bg-festari-50 p-8 rounded-lg h-full">
                  <h2 className="text-2xl font-display font-bold text-festari-900 mb-6">Contact Information</h2>
                  
                  <div className="space-y-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm">
                          <info.icon size={24} className="text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium text-festari-900 mb-1">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-festari-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-festari-200">
                    <h3 className="font-medium text-festari-900 mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="py-0">
          <div className="h-80 w-full bg-festari-100 relative">
            {/* Replace with actual map implementation */}
            <div className="absolute inset-0 flex items-center justify-center bg-festari-200">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-festari-400 mb-2" />
                <p className="text-festari-800 font-medium">Map will be displayed here</p>
                <p className="text-festari-600 text-sm">123 Festari Way, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
