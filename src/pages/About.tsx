import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Award, Briefcase, MapPin, Mail, ExternalLink, FileText, BookOpen, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Founder information
  const founderInfo = {
    name: "Dr. Festus Kunkyin-Saadaari",
    title: "CEO and Founder, Festari Group Limited",
    image: "/lovable-uploads/a6a7726e-4c17-47d2-beef-4193ca9b8444.png",
    bio: "Dr. Festus Kunkyin-Saadaari is the CEO and founder of Festari Group Limited, a company that provides innovative and sustainable solutions for the mining industry. He has over three years of experience as a lecturer and researcher at the University of Mines and Technology (UMaT), Tarkwa, where he teaches and supervises students in mining engineering topics and projects.",
    education: [
      { degree: "Ph.D. in Mining Engineering (Rock Mechanics Major)", institution: "University of Mines and Technology, Tarkwa", year: "2021" },
      { degree: "B.Sc. in Mining Engineering", institution: "University of Mines and Technology, Tarkwa", year: "2015" },
    ],
    experience: [
      { position: "CEO and Founder", organization: "Festari Group Limited", period: "2023-Present" },
      { position: "Lecturer/Researcher", organization: "University of Mines and Technology, Tarkwa", period: "2021-Present" },
      { position: "Postdoctoral Researcher", organization: "Missouri University of Science and Technology", period: "2022" },
    ],
    contactInfo: {
      email: "festus@festari.com",
      phone: "+233 240699535",
      mobilePhone: "+1 5732026443",
      location: "Tarkwa, Ghana"
    },
    vision: "My vision is to advance the knowledge and practice of mining engineering, and create positive social and environmental impacts through innovative and sustainable solutions for the mining industry."
  };

  // Recent publications
  const recentPublications = [
    {
      title: "A Comparative Study on the Application of Intelligent Models in the Estimation of Backbreak in Mine Blasting Operations",
      journal: "American Journal of Science, Engineering and Technology",
      year: "2024",
      url: "http://dx.doi.org/10.11648/j.ajset.20240901.11",
    },
    {
      title: "Maintaining production levels in underground mining operations during pandemics - a case study",
      journal: "Journal of the Ghana Institution of Engineering (JGhIE)",
      year: "2024",
      url: "http://dx.doi.org/10.56049/jghie.v24i1.138",
    },
    {
      title: "Slope stability assessment of some waste rock dumps at a typical gold mine in Ghana",
      journal: "Nigerian Journal of Technology",
      year: "2023",
      url: "http://dx.doi.org/10.4314/njt.v42i1.10",
    },
  ];

  // Speaking engagements
  const speakingEngagements = [
    {
      event: "AusIMM Tarkwa Student Chapter Webinar",
      topic: "Ghana's Mining Investment",
      location: "Virtual",
      date: "2023",
    },
    {
      event: "Mining Engineering Department Seminar",
      topic: "Application of AI in Mining Engineering",
      location: "University of Mines and Technology, Tarkwa",
      date: "2022",
    },
    {
      event: "Mining Industry Forum",
      topic: "Sustainable Mining Practices",
      location: "Accra, Ghana",
      date: "2022",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header component */}
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container-custom">
          {/* Page title */}
          <h1 className="text-3xl font-display font-bold text-festari-900 mb-8 text-center">
            About Us
          </h1>
          {/* Content section */}
          <div className="text-festari-700 space-y-6">
            <p>
              Festari Hub is a multi-functional digital platform that serves as a real estate listing service, research and education hub, agriculture marketplace, and personal branding space. Our mission is to connect people with opportunities and resources to achieve their goals.
            </p>
            <p>
              Whether you're looking to buy or rent a property, enroll in educational courses, explore agricultural products, or build your personal brand, Festari Hub is here to help.
            </p>
            <p>
              Our team is dedicated to providing a seamless and user-friendly experience, ensuring that you have access to the best tools and services to succeed.
            </p>
          </div>
        </div>
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default About;
