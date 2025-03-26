
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CalendarDays, MapPin, Book, Globe, Award, ExternalLink, GraduationCap, Briefcase, Mail, Phone, Linkedin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Dr. Festus Kunkyin-Saadaari data
const founderData = {
  name: "Dr. Festus Kunkyin-Saadaari",
  title: "CEO and Founder, Festari Group Limited",
  bio: "Dr. Festus Kunkyin-Saadaari is the CEO and founder of Festari Group Limited, a company that provides innovative and sustainable solutions for the mining industry. He has over three years of experience as a lecturer and researcher at the University of Mines and Technology (UMaT), Tarkwa, where he teaches and supervises students in mining engineering topics and projects.",
  longBio: "Dr. Festus Kunkyin-Saadaari holds a PhD and a BSc in Mining Engineering from UMaT, and has published several papers in reputable journals on mine reclamation and rehabilitation, rock mechanics and excavation stability, and the application of artificial intelligence and machine learning techniques to mining engineering systems. He is also a member of professional societies such as the ISRM, ARMA, and IAENG. He is passionate about advancing the knowledge and practice of mining engineering, and creating positive social and environmental impacts through his work.",
  profileImage: "/lovable-uploads/a6a7726e-4c17-47d2-beef-4193ca9b8444.png",
  location: "Tarkwa, Ghana",
  expertise: ["Geotechnical Engineering", "Rock Mechanics", "Mining Engineering", "Artificial Intelligence", "Machine Learning", "Slope Stability Analysis"],
  stats: {
    publications: 5,
    connections: 3,
    yearsExperience: 6
  },
  education: [
    {
      degree: "Ph.D. in Mining Engineering (Rock Mechanics Major)",
      institution: "University of Mines and Technology, Tarkwa",
      year: "2018 - 2021"
    },
    {
      degree: "B.Sc. in Mining Engineering",
      institution: "University of Mines and Technology, Tarkwa",
      year: "2011 - 2015"
    }
  ],
  experience: [
    {
      position: "CEO and Founder",
      company: "Festari Group Limited",
      period: "Nov 2023 - Present",
      description: "Leading a company that provides innovative and sustainable solutions for the mining industry."
    },
    {
      position: "Lecturer/Researcher",
      company: "University of Mines and Technology, Tarkwa",
      period: "Dec 2021 - Present",
      description: "Teaching and supervising students in mining engineering topics and projects."
    },
    {
      position: "Postdoctoral Researcher",
      company: "Missouri University of Science and Technology",
      period: "Jan 2022 - Dec 2022",
      description: "Conducted research in mining engineering and rock mechanics."
    },
    {
      position: "Postgraduate Assistant",
      company: "University of Mines and Technology, Tarkwa",
      period: "Feb 2020 - Nov 2021",
      description: "Assisted in teaching and research activities."
    }
  ],
  publications: [
    {
      title: "A Comparative Study on the Application of Intelligent Models in the Estimation of Backbreak in Mine Blasting Operations",
      publisher: "American Journal of Science, Engineering and Technology",
      year: "2024",
      link: "http://dx.doi.org/10.11648/j.ajset.20240901.11"
    },
    {
      title: "Maintaining production levels in underground mining operations during pandemics - a case study",
      publisher: "Journal of the Ghana Institution of Engineering (JGhIE)",
      year: "2024",
      link: "http://dx.doi.org/10.56049/jghie.v24i1.138"
    },
    {
      title: "Slope stability assessment of some waste rock dumps at a typical gold mine in Ghana",
      publisher: "Nigerian Journal of Technology",
      year: "2023",
      link: "http://dx.doi.org/10.4314/njt.v42i1.10"
    },
    {
      title: "A Feasibility Study on The Implementation of Neural Network Classifiers for Open Stope Design",
      publisher: "Geotechnical and Geological Engineering",
      year: "2021",
      link: "http://dx.doi.org/10.1007/s10706-021-01915-8"
    },
    {
      title: "Development of a Stope Stability Prediction Model Using Ensemble Learning Techniques - A Case Study",
      publisher: "Ghana Mining Journal",
      year: "2020",
      link: "http://dx.doi.org/10.4314/gm.v20i2.3"
    }
  ],
  contactInfo: {
    email: "festus@festari.com",
    phone: "+233 240699535",
    mobilePhone: "+1 5732026443"
  }
};

const Founder = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative py-20 bg-festari-900 text-white">
          <div className="container-custom flex flex-col md:flex-row gap-8 items-center">
            <div className="w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-white/30 shadow-lg">
              <img 
                src={founderData.profileImage} 
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">{founderData.name}</h1>
              <p className="text-xl text-festari-100 mb-4">{founderData.title}</p>
              
              <div className="flex items-center mb-6">
                <MapPin size={18} className="text-festari-200 mr-2" />
                <span className="text-festari-100">{founderData.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {founderData.expertise.map((skill, index) => (
                  <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <p className="text-festari-100">{founderData.bio}</p>
            </div>
          </div>
        </section>
      
        {/* Stats section */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.publications}</p>
                <p className="text-sm text-festari-600">Publications</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.connections}</p>
                <p className="text-sm text-festari-600">Professional Connections</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.yearsExperience}+</p>
                <p className="text-sm text-festari-600">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content tabs */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              
              {/* About Tab */}
              <TabsContent value="about" className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-festari-700 mb-6">{founderData.longBio}</p>
                
                    <h2 className="text-xl font-bold text-festari-900 mb-4">Education</h2>
                    <div className="space-y-6">
                      {founderData.education.map((edu, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mt-1 mr-4">
                            <GraduationCap size={20} className="text-festari-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-festari-900">{edu.degree}</h3>
                            <p className="text-festari-600">{edu.institution}</p>
                            <p className="text-sm text-festari-500">{edu.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <h2 className="text-xl font-bold text-festari-900 mb-4">Fields of Expertise</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founderData.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-festari-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-festari-700 mt-4">
                      Dr. Kunkyin-Saadaari specializes in rock mass characterization, slope stability analysis, 
                      soil dynamics testing, and the application of artificial intelligence techniques to mining engineering problems.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Publications Tab */}
              <TabsContent value="publications" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-festari-900 mb-6">Research Publications</h2>
                    <div className="space-y-6">
                      {founderData.publications.map((pub, index) => (
                        <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="mt-1 mr-4">
                            <Book size={20} className="text-festari-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-festari-900">{pub.title}</h3>
                            <p className="text-festari-600">{pub.publisher}</p>
                            <p className="text-sm text-festari-500">{pub.year}</p>
                          </div>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-festari-accent hover:underline flex items-center">
                            <span className="mr-1">View</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Experience Tab */}
              <TabsContent value="experience" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-festari-900 mb-6">Professional Experience</h2>
                    <div className="space-y-6">
                      {founderData.experience.map((exp, index) => (
                        <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="mt-1 mr-4">
                            <Briefcase size={20} className="text-festari-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-festari-900">{exp.position}</h3>
                            <p className="text-festari-600">{exp.company}</p>
                            <p className="text-sm text-festari-500">{exp.period}</p>
                            <p className="text-sm text-festari-700 mt-1">{exp.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Contact Tab */}
              <TabsContent value="contact">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-festari-900 mb-6">Contact Information</h2>
                    <div className="space-y-4 p-4">
                      <div className="flex items-center space-x-3">
                        <Mail size={20} className="text-festari-accent" />
                        <a href={`mailto:${founderData.contactInfo.email}`} className="text-festari-700 hover:text-festari-accent">
                          {founderData.contactInfo.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone size={20} className="text-festari-accent" />
                        <a href={`tel:${founderData.contactInfo.phone}`} className="text-festari-700 hover:text-festari-accent">
                          {founderData.contactInfo.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone size={20} className="text-festari-accent" />
                        <span className="text-festari-700">Mobile: {founderData.contactInfo.mobilePhone}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin size={20} className="text-festari-accent" />
                        <span className="text-festari-700">{founderData.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button className="mt-2">
                        <Mail size={16} className="mr-2" />
                        Send a Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Founder;
