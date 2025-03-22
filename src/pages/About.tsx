
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Award, Briefcase, MapPin, Mail, ExternalLink, FileText, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Founder information
  const founderInfo = {
    name: "Dr. Alexandra Bennett",
    title: "Founder & CEO, Festari",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&q=80",
    bio: "Dr. Alexandra Bennett is a distinguished real estate economist and educator with over 15 years of experience in property markets, urban development, and housing policy. After completing her Ph.D. in Urban Economics at Stanford University, she held faculty positions at several prestigious institutions before founding Festari to bridge the gap between academic research and practical real estate solutions.",
    education: [
      { degree: "Ph.D. in Urban Economics", institution: "Stanford University", year: "2008" },
      { degree: "Master's in Real Estate Development", institution: "MIT", year: "2005" },
      { degree: "Bachelor's in Economics", institution: "Harvard University", year: "2003" },
    ],
    experience: [
      { position: "Associate Professor", organization: "Columbia University", period: "2013-2019" },
      { position: "Research Fellow", organization: "Urban Land Institute", period: "2011-2013" },
      { position: "Consultant", organization: "World Bank Housing Division", period: "2009-2011" },
    ],
    awards: [
      { title: "Urban Housing Policy Innovation Award", year: "2018" },
      { title: "Young Economist Achievement Award", year: "2015" },
      { title: "Best Paper Award, Journal of Urban Economics", year: "2013" },
    ],
    vision: "My vision for Festari is to create a platform where real estate practice, academic research, and education converge to foster innovation and sustainable development in the property sector. By bridging theory and practice, we aim to empower stakeholders with evidence-based insights and practical solutions to address the complex challenges of modern urban environments."
  };

  // Recent publications
  const recentPublications = [
    {
      title: "Urban Housing Affordability in Developing Economies",
      journal: "Journal of Urban Economics",
      year: "2023",
      url: "https://example.com/publication1",
    },
    {
      title: "Sustainable Development Practices in Real Estate: A Comparative Analysis",
      journal: "Environmental Economics Review",
      year: "2022",
      url: "https://example.com/publication2",
    },
    {
      title: "The Impact of Climate Change on Coastal Property Markets",
      journal: "Real Estate Finance Journal",
      year: "2021",
      url: "https://example.com/publication3",
    },
  ];

  // Speaking engagements
  const speakingEngagements = [
    {
      event: "International Real Estate Summit",
      topic: "Future of Housing in Megacities",
      location: "Singapore",
      date: "May 2023",
    },
    {
      event: "Urban Development Conference",
      topic: "Sustainable Cities and Property Investment",
      location: "Barcelona",
      date: "November 2022",
    },
    {
      event: "Property Technology Forum",
      topic: "Digital Transformation in Real Estate",
      location: "New York",
      date: "March 2022",
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
                      <span className="text-festari-700">New York, NY</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-accent mt-0.5" />
                      <a href="mailto:alexandra@festari.com" className="text-accent hover:underline">
                        alexandra@festari.com
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="text-accent mt-0.5" />
                      <span className="text-festari-700">15+ years in real estate and urban economics</span>
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
                    Awards & Recognition
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {founderInfo.awards.map((award, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-festari-200 shadow-sm">
                        <h4 className="font-medium text-festari-900">{award.title}</h4>
                        <p className="text-sm text-festari-500">{award.year}</p>
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
