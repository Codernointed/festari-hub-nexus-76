
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
    <div>
      <Header />
      <main className="pt-20">
        {/* Hero section */}
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">About the Founder</h1>
              <p className="text-festari-100 mb-6">
                Learn about the visionary behind Festari and the mission driving our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Founder profile */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Photo and basic info */}
              <div className="lg:col-span-4 space-y-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={founderInfo.image}
                    alt={founderInfo.name}
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-festari-50 rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-festari-900 mb-1">{founderInfo.name}</h2>
                  <p className="text-festari-600 mb-6">{founderInfo.title}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-accent mt-0.5" />
                      <span className="text-festari-700">{founderInfo.contactInfo.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-accent mt-0.5" />
                      <a href={`mailto:${founderInfo.contactInfo.email}`} className="text-accent hover:underline">
                        {founderInfo.contactInfo.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-accent mt-0.5" />
                      <a href={`tel:${founderInfo.contactInfo.phone}`} className="text-festari-700">
                        {founderInfo.contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="text-accent mt-0.5" />
                      <span className="text-festari-700">Mining engineering and rock mechanics expert</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-festari-200">
                    <h3 className="text-festari-900 font-semibold mb-3">Education</h3>
                    <div className="space-y-3">
                      {founderInfo.education.map((edu, index) => (
                        <div key={index} className="text-sm">
                          <p className="font-medium text-festari-800">{edu.degree}</p>
                          <p className="text-festari-600">{edu.institution}, {edu.year}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bio and experience */}
              <div className="lg:col-span-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-display font-bold text-festari-900 mb-6">Biography</h2>
                  <p className="text-festari-700 text-lg mb-6">{founderInfo.bio}</p>
                  
                  <div className="bg-festari-50 p-6 rounded-lg border-l-4 border-accent mb-8">
                    <h3 className="text-xl font-medium text-festari-900 mb-3">Vision & Mission</h3>
                    <p className="text-festari-700 italic">{founderInfo.vision}</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-festari-900 mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-accent" />
                    Professional Experience
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    {founderInfo.experience.map((exp, index) => (
                      <div key={index} className="relative pl-8 border-l-2 border-festari-200 pb-6">
                        <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
                        <h4 className="font-bold text-festari-900">{exp.position}</h4>
                        <p className="text-festari-600">{exp.organization}</p>
                        <p className="text-sm text-festari-500">{exp.period}</p>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-festari-900 mb-4 flex items-center gap-2">
                    <Award size={20} className="text-accent" />
                    Fields of Expertise
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      "Rock Mechanics", 
                      "Mining Engineering", 
                      "Geotechnical Engineering", 
                      "Slope Stability Analysis",
                      "Artificial Intelligence in Mining",
                      "Soil Dynamics"
                    ].map((expertise, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-festari-200 shadow-sm">
                        <h4 className="font-medium text-festari-900">{expertise}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Publications and Speaking */}
        <section className="section-padding bg-festari-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Publications */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <FileText size={22} className="text-accent" />
                  <h2 className="text-2xl font-display font-bold text-festari-900">Recent Publications</h2>
                </div>
                
                <div className="space-y-6">
                  {recentPublications.map((pub, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <h3 className="font-semibold text-festari-900 mb-2">{pub.title}</h3>
                      <p className="text-sm text-festari-600 mb-3">
                        {pub.journal}, {pub.year}
                      </p>
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm flex items-center gap-1 text-accent hover:underline"
                      >
                        View Publication <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/research#publications" className="btn-ghost text-accent">
                    View All Publications
                  </Link>
                </div>
              </div>
              
              {/* Speaking Engagements */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={22} className="text-accent" />
                  <h2 className="text-2xl font-display font-bold text-festari-900">Speaking Engagements</h2>
                </div>
                
                <div className="space-y-6">
                  {speakingEngagements.map((event, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-festari-900 mb-1">{event.event}</h3>
                          <p className="text-festari-700 mb-3">"{event.topic}"</p>
                          <div className="flex items-center gap-2 text-sm text-festari-600">
                            <MapPin size={14} className="text-festari-400" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-festari-100 text-festari-700 px-3 py-1 rounded-full text-sm">
                          <Calendar size={14} />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="btn-ghost text-accent">
                    Inquire About Speaking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-r from-festari-900 to-accent text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Connect With Our Founder</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Interested in collaborating, consulting services, or booking for speaking engagements? 
              Get in touch today.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-festari-900 hover:bg-white/90 px-8 py-3">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
