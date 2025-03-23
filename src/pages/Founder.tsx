
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CalendarDays, MapPin, Book, Globe, Award, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Dummy founder data
const founderData = {
  name: "Dr. Jonathan Festari",
  title: "Real Estate Expert & Agricultural Innovator",
  bio: "Dr. Jonathan Festari is a distinguished authority in real estate development and agricultural innovation with over 20 years of experience. He holds a Ph.D. in Urban Planning from Harvard University and has pioneered sustainable development practices across multiple continents.",
  profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&q=80",
  location: "New York, NY",
  expertise: ["Real Estate Development", "Sustainable Agriculture", "Urban Planning", "Investment Strategy"],
  stats: {
    publications: 28,
    courses: 15,
    speakingEngagements: 47,
    yearsExperience: 20
  },
  education: [
    {
      degree: "Ph.D. in Urban Planning",
      institution: "Harvard University",
      year: "2003"
    },
    {
      degree: "Master of Science in Real Estate Development",
      institution: "Massachusetts Institute of Technology",
      year: "1999"
    },
    {
      degree: "Bachelor of Architecture",
      institution: "Cornell University",
      year: "1997"
    }
  ],
  experience: [
    {
      position: "Founder & CEO",
      company: "Festari Real Estate & Agriculture",
      period: "2010 - Present",
      description: "Founded and leads a multi-dimensional platform integrating real estate services, agricultural innovation, and educational resources."
    },
    {
      position: "Senior Consultant",
      company: "Global Development Partners",
      period: "2005 - 2010",
      description: "Advised major real estate developers and agricultural enterprises on sustainable development strategies and market expansion."
    },
    {
      position: "Research Fellow",
      company: "Urban Future Institute",
      period: "2003 - 2005",
      description: "Led research initiatives on urban planning and sustainable development in rapidly growing metropolitan areas."
    }
  ],
  publications: [
    {
      title: "Sustainable Urban Development: Balancing Growth and Environmental Preservation",
      publisher: "Journal of Urban Planning",
      year: "2021",
      link: "#"
    },
    {
      title: "Agricultural Innovation in Urban Spaces",
      publisher: "Agricultural Economics Review",
      year: "2019",
      link: "#"
    },
    {
      title: "The Future of Real Estate: Technology Integration in Property Management",
      publisher: "Real Estate Economics",
      year: "2018",
      link: "#"
    },
    {
      title: "Investment Strategies in Emerging Real Estate Markets",
      publisher: "International Journal of Property Investment",
      year: "2017",
      link: "#"
    }
  ],
  upcomingEvents: [
    {
      title: "Future of Urban Development Conference",
      date: "June 15-16, 2023",
      location: "Chicago, IL",
      description: "Keynote speaker on sustainable urban planning strategies",
      link: "#"
    },
    {
      title: "Agricultural Innovation Summit",
      date: "August 10, 2023",
      location: "San Francisco, CA",
      description: "Panel discussion on integrating technology in farming",
      link: "#"
    },
    {
      title: "Real Estate Investment Workshop",
      date: "September 5, 2023",
      location: "Online (Virtual)",
      description: "Interactive workshop on property investment strategies",
      link: "#"
    }
  ]
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.publications}</p>
                <p className="text-sm text-festari-600">Publications</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.courses}</p>
                <p className="text-sm text-festari-600">Courses Created</p>
              </div>
              <div className="text-center p-4">
                <p className="text-3xl font-bold text-festari-accent">{founderData.stats.speakingEngagements}</p>
                <p className="text-sm text-festari-600">Speaking Engagements</p>
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
                <TabsTrigger value="events">Speaking Events</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              
              {/* About Tab */}
              <TabsContent value="about" className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
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
                    
                    <h2 className="text-xl font-bold text-festari-900 mb-4">Professional Experience</h2>
                    <div className="space-y-6">
                      {founderData.experience.map((exp, index) => (
                        <div key={index} className="flex items-start">
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
                          <a href={pub.link} className="text-festari-accent hover:underline flex items-center">
                            <span className="mr-1">View</span>
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button>View All Publications</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Events Tab */}
              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-festari-900 mb-6">Upcoming Speaking Engagements</h2>
                    <div className="space-y-6">
                      {founderData.upcomingEvents.map((event, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="p-5">
                            <h3 className="font-semibold text-festari-900 text-lg">{event.title}</h3>
                            <div className="flex items-center mt-2 text-festari-600">
                              <CalendarDays size={16} className="mr-2" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center mt-1 text-festari-600">
                              <MapPin size={16} className="mr-2" />
                              <span>{event.location}</span>
                            </div>
                            <p className="mt-3 text-festari-700">{event.description}</p>
                            <div className="mt-4">
                              <a href={event.link} className="text-festari-accent hover:underline flex items-center">
                                <span className="mr-1">Event Details</span>
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button>View All Events</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Contact Tab */}
              <TabsContent value="contact">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold text-festari-900 mb-6">Contact Information</h2>
                    <div className="text-center p-8 space-y-4">
                      <p className="text-festari-700">
                        For speaking engagements, consulting requests, or general inquiries, please contact:
                      </p>
                      <p className="font-medium text-lg text-festari-900">office@festari.com</p>
                      <p className="text-festari-700">or</p>
                      <Button className="mt-2">
                        <Globe size={16} className="mr-2" />
                        Contact via Form
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
