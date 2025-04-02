import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  CalendarDays, 
  MapPin, 
  Book, 
  Globe, 
  Award, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone, 
  Linkedin,
  Building,
  BookOpen,
  Users,
  ChevronsRight,
  FileText,
  Check,
  MessageSquare,
  Star
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

// Add TypeScript interfaces
interface Publication {
  title: string;
  publisher: string;
  year: string;
  date: string;
  authors: string;
  link: string;
  description?: string;
  volume?: string;
  issue?: string;
  pages?: string;
}

interface VolunteerExperience {
  position: string;
  organization: string;
  period: string;
  description: string;
}

// Dr. Festus Kunkyin-Saadaari data
const founderData = {
  name: "Dr. Festus Kunkyin-Saadaari",
  title: "Founder & CEO, Festari Group Ltd",
  bio: "Dr. Festus Kunkyin-Saadaari is a Ghanaian academic, mining engineer, researcher, and visionary entrepreneur. Currently serving as a Lecturer at UMaT and Faculty Examinations Officer, he has trained over 300 professionals across 8 countries in mining engineering and safety.",
  longBio: `Dr. Festus Kunkyin-Saadaari is a distinguished Ghanaian academic, mining engineer, researcher, and visionary entrepreneur. He holds both a PhD and a BSc in Mining Engineering from the University of Mines and Technology (UMaT), Tarkwa. Beginning his teaching journey with home tutoring at the kindergarten level, Dr. Kunkyin-Saadaari has taught across all levels of Ghana's educational ladder — from basic and secondary education to undergraduate and postgraduate university levels.

  He currently serves as a Lecturer at UMaT, where he also functions as the Faculty Examinations Officer for the Faculty of Mining and Minerals Technology. In addition to supervising over 70 students across BSc, PgD, MSc, MPhil, and PhD programs, he has also served as a visiting scholar at the Missouri University of Science and Technology in the USA. His academic and industrial insights span rock mechanics, mining systems, and predictive modeling.`,
  profesionalImpact: `Since 2018, Dr. Kunkyin-Saadaari has trained over 300 professionals in short courses and certification programs in mining, occupational health and safety, and geotechnical engineering. His participants span across Ghana, Mali, Guinea, Burkina Faso, Côte d'Ivoire, Liberia, Spain, and the United States. These efforts have resulted in professional and proficiency certifications and demonstrate his commitment to industry-aligned capacity building.`,
  companyVision: `Festari Group Ltd (FGL) was founded by Dr. Saadaari as a transformative force to bridge the gap between academia, industry, and sustainable development. FGL is a multidisciplinary holding company offering services through its subsidiaries: Festari Research & Consultancy Institute (FRCI), Festari International Academy (FIA), Festari Estates Agency (FEA), Festari Farms & Agribusinesses (FFA), and Festari Enterprise (FEnt). These subsidiaries deliver innovative, practical, and scalable solutions in mining consultancy, professional training, real estate, agribusiness, and general trading. Together, they embody FGL's mission to empower individuals, support industry excellence, and drive socio-economic transformation in Ghana and beyond.`,
  founderMessage: `At Festari Group Ltd., we don't just provide services — we build partnerships that transform industries and empower individuals. Our mission is to offer premier solutions tailored to Africa's growth needs, driven by expertise, ethics, and innovation.`,
  keyHighlights: [
    "Lecturer and Faculty Examinations Officer at UMaT's largest faculty",
    "Over 70 students supervised across BSc, PgD, MSc, MPhil, and PhD programs",
    "Taught across every level of the Ghanaian educational system",
    "Trained 300+ professionals from 8 countries in industry-recognized short courses",
    "Visiting Scholar at Missouri University of Science and Technology, USA",
    "Founder of FRCI and FIA under Festari Group Ltd",
    "Over 10 peer-reviewed journal publications",
    "Member of 8+ international professional bodies"
  ],
  profileImage: "/lovable-uploads/a6a7726e-4c17-47d2-beef-4193ca9b8444.png",
  location: "Tarkwa, Ghana",
  contactInfo: {
    email: "fksaadaari@festarigroup.com",
    academicEmail: "fsaadaari@umat.edu.gh",
    phone: "+233 240699535",
    mobilePhone: "+1 5732026443",
    linkedin: "https://www.linkedin.com/in/festus-kunkyin-saadaari-98462267/",
    scopusId: "58644424800",
    orcid: "https://orcid.org/0000-0002-8202-2021"
  },
  stats: {
    publications: 10,
    connections: 8,
    yearsExperience: 6,
    studentsSupervised: 70,
    professionalsTrained: 300,
    countriesImpacted: 8
  },
  languages: [
    { name: "English", level: "Full professional proficiency" },
    { name: "French", level: "Elementary proficiency" },
    { name: "Twi", level: "Native or bilingual proficiency" },
    { name: "Fanti", level: "Full professional proficiency" }
  ],
  expertise: [
    "Mining Engineering",
    "Rock Mechanics",
    "Geotechnical Engineering",
    "Mining Systems",
    "Predictive Modeling",
    "Professional Training",
    "Mining Education",
    "Occupational Safety"
  ],
  organizations: [
    { name: "West African Institute of Mining, Metallurgy and Petroleum (WAIMM)", role: "Member", period: "2020 - Present" },
    { name: "International Society for Rock Mechanics (ISRM)", role: "Member", period: "2019 - Present" },
    { name: "Canadian Institute of Mining (CIM)", role: "Member", period: "2020 - Present" },
    { name: "American Rock Mechanics Association (ARMA)", role: "Member", period: "2020 - Present" },
    { name: "Ghana Geotechnical Society (GGS)", role: "Member", period: "2019 - Present" },
    { name: "International Society for Soil Mechanics and Geotechnical Engineering (ISSMGE)", role: "Member", period: "2020 - Present" },
    { name: "African Institute of Mining Professionals (AfIMPP)", role: "Member", period: "2021 - Present" },
    { name: "International Association of Engineers (IAENG)", role: "Member", period: "2021 - Present" }
  ],
  certifications: [
    { name: "Diploma in Research Skills", issuer: "UniAthena", date: "Jan 2023", id: "8675-4134-1122" },
    { name: "Lean Six Sigma White Belt", issuer: "MF Treinamentos", date: "Jan 2023", id: "FLQLJQQQWT-QDLQRDKJ-WNHTKWKQNZ" }
  ],
  education: [
    {
      degree: "Ph.D. in Mining Engineering (Rock Mechanics Major)",
      institution: "University of Mines and Technology, Tarkwa",
      year: "2018 - 2021",
      activities: "Canadian Institute of Mining, GRASAG"
    },
    {
      degree: "B.Sc. in Mining Engineering",
      institution: "University of Mines and Technology, Tarkwa",
      year: "2011 - 2015",
      activities: "Mining and Mineral Engineering Student Association"
    }
  ],
  experience: [
    {
      position: "CEO and Founder",
      company: "Festari Group Limited",
      period: "Nov 2023 - Present",
      location: "Western Region, Ghana",
      description: "Leading a company that provides innovative and sustainable solutions for the mining industry through multiple subsidiaries."
    },
    {
      position: "Lecturer/Researcher",
      company: "University of Mines and Technology, Tarkwa",
      period: "Dec 2021 - Present",
      location: "Tarkwa, Ghana",
      description: "Teaching and supervising students in mining engineering topics and projects. Faculty Examinations Officer for Mining and Minerals Technology."
    },
    {
      position: "Postdoctoral Researcher",
      company: "Missouri University of Science and Technology",
      period: "Jan 2022 - Dec 2022",
      location: "United States",
      description: "Conducted research in mining engineering and rock mechanics."
    }
  ],
  volunteerExperience: [
    {
      position: "Teacher",
      organization: "St. Andrew Junior High School",
      period: "Jul 2010 - Feb 2011",
      description: "Taught Science and Technology voluntarily to support education in the community."
    }
  ],
  publications: [
    {
      title: "A Comparative Study on the Application of Intelligent Models in Mine Operations",
      publisher: "American Journal of Science, Engineering and Technology",
      year: "2024",
      date: "Jan 18, 2024",
      authors: "Festus Kunkyin-Saadaari, Victor K. Agadzie, Richard Gyebuni",
      link: "http://dx.doi.org/10.11648/j.ajset.20240901.11",
      description: "This study explores the use of intelligent models in optimizing mine operations.",
      volume: "9",
      issue: "1",
      pages: "1-8"
    }
  ] as Publication[],
  scholarProfiles: {
    google: "https://scholar.google.com/citations?user=XXXXXXXXXXXX",
    scopus: "58644424800",
    orcid: "https://orcid.org/0000-0002-8202-2021"
  },
  courses: {
    postgraduate: [
      "MN 261 – Introduction to Mining Engineering",
      "MN 551 – Research Methods",
      "MN 559 – Applied Rock Mechanics",
      "MN 575 – Fundamentals of Mining Engineering",
      "MN 586 – Mine Rock Mechanics"
    ],
    undergraduate: [
      "MN 178 – Rock Physics",
      "MN 261 – Introduction to Mining",
      "MN 273 – Construction Materials",
      "MN 254 – Soil Mechanics",
      "MN 357 – Rock Mechanics",
      "MN 451 – Project Work I"
    ],
    certificate: [
      "EV/GA/HS/MT/SU/WR 131 – Basic Mining Principles"
    ],
    professional: [
      "Professional Certificate in Mining Engineering Technologies",
      "Advanced Professional Certificate in Drilling, Blasting & Exploration Technologies",
      "Proficiency Certificate in Mine Occupational Health, Safety & Environment"
    ]
  }
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

const AboutContent = () => (
  <TabsContent value="about" className="space-y-8">
    <Card className="border-none shadow-md">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-festari-900 mb-4">Biography</h2>
        <p className="text-festari-700 mb-6 text-lg leading-relaxed">{founderData.longBio}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-bold text-festari-900 mb-4 flex items-center gap-2">
              <Award size={20} className="text-festari-accent" />
              Professional Organizations
            </h2>
            <div className="space-y-4">
              {founderData.organizations.map((org, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg border border-festari-100/30 hover:bg-festari-50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <h3 className="font-semibold text-festari-900">{org.name}</h3>
                    <p className="text-festari-600 text-sm">{org.role} • {org.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-festari-900 mb-4 flex items-center gap-2">
              <FileText size={20} className="text-festari-accent" />
              Certifications
            </h2>
            <div className="space-y-4">
              {founderData.certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg border border-festari-100/30 hover:bg-festari-50 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <h3 className="font-semibold text-festari-900">{cert.name}</h3>
                    <p className="text-festari-600 text-sm">{cert.issuer} • {cert.date}</p>
                    <p className="text-festari-500 text-xs">ID: {cert.id}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <h2 className="text-xl font-bold text-festari-900 mb-4 flex items-center gap-2">
          <Check size={20} className="text-festari-accent" />
          Fields of Expertise
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {founderData.expertise.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-festari-50 px-3 py-1 text-sm">
              {skill}
            </Badge>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-festari-900 mt-8 mb-4 flex items-center gap-2">
          <Globe size={20} className="text-festari-accent" />
          Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {founderData.languages.map((language, index) => (
            <div key={index} className="p-3 rounded-lg border border-festari-100/30 bg-festari-50/50">
              <h3 className="font-semibold text-festari-900">{language.name}</h3>
              <p className="text-festari-600 text-sm">{language.level}</p>
            </div>
          ))}
        </div>

        {/* New Message from Founder section */}
        <div className="my-12 p-8 bg-festari-50/50 rounded-xl border border-festari-100/30">
          <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
            <MessageSquare size={24} className="text-festari-accent" />
            Message from the Founder
          </h2>
          <blockquote className="text-xl text-festari-700 italic">
            "{founderData.founderMessage}"
          </blockquote>
        </div>

        {/* New Key Highlights section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
            <Star size={24} className="text-festari-accent" />
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {founderData.keyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-festari-100/30">
                <Check className="text-festari-accent flex-shrink-0 mt-1" />
                <p className="text-festari-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Scholar Profiles section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
            <BookOpen size={24} className="text-festari-accent" />
            Academic Profiles
          </h2>
          <div className="flex flex-wrap gap-4">
            <a 
              href={founderData.scholarProfiles.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-festari-100/30 hover:bg-festari-50/50 transition-colors"
            >
              <img src="/icons/google-scholar.svg" alt="Google Scholar" className="w-6 h-6" />
              Google Scholar
            </a>
            {/* Add similar buttons for Scopus and ORCID */}
          </div>
        </div>
      </CardContent>
    </Card>
  </TabsContent>
);

const Founder = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header component */}
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative py-20 bg-gradient-to-r from-festari-900 to-festari-accent/90 text-white"
        >
          <div className="container-custom flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="w-40 h-40 md:w-64 md:h-64 overflow-hidden rounded-full border-4 border-white/30 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={founderData.profileImage} 
                alt={founderData.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-3 text-balance">{founderData.name}</h1>
              <p className="text-xl text-festari-100 mb-4">{founderData.title}</p>
              
              <div className="flex items-center mb-6">
                <MapPin size={18} className="text-festari-200 mr-2" />
                <span className="text-festari-100">{founderData.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {founderData.expertise.slice(0, 5).map((skill, index) => (
                  <Badge key={index} className="bg-white/20 hover:bg-white/30 text-white">
                    {skill}
                  </Badge>
                ))}
                {founderData.expertise.length > 5 && (
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">
                    +{founderData.expertise.length - 5} more
                  </Badge>
                )}
              </div>
              
              <p className="text-festari-100 text-lg leading-relaxed">{founderData.bio}</p>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor" className="text-gray-50"></path>
            </svg>
          </div>
        </motion.section>
      
        {/* Stats section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="py-10"
        >
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-4 bg-white rounded-xl p-4 shadow-md">
              <motion.div variants={itemVariant} className="text-center p-4">
                <p className="text-4xl font-bold text-festari-accent">{founderData.stats.publications}</p>
                <p className="text-sm text-festari-600">Publications</p>
              </motion.div>
              <motion.div variants={itemVariant} className="text-center p-4 border-x border-festari-100/20">
                <p className="text-4xl font-bold text-festari-accent">{founderData.stats.connections}</p>
                <p className="text-sm text-festari-600">Professional Connections</p>
              </motion.div>
              <motion.div variants={itemVariant} className="text-center p-4">
                <p className="text-4xl font-bold text-festari-accent">{founderData.stats.yearsExperience}+</p>
                <p className="text-sm text-festari-600">Years Experience</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
        
        {/* Content tabs */}
        <section className="py-12">
          <div className="container-custom">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-festari-50">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="publications">Publications</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                
                {/* About Tab */}
                <AboutContent />
                
                {/* Experience Tab */}
                <TabsContent value="experience" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
                        <Briefcase size={22} className="text-festari-accent" />
                        Professional Experience
                      </h2>
                      <div className="space-y-8">
                        {founderData.experience.map((exp, index) => (
                          <motion.div 
                            key={index} 
                            className="relative pl-8 border-l-2 border-festari-100"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-festari-accent"></div>
                            <div className="p-4 rounded-lg border border-festari-100/30 hover:bg-festari-50/50 transition-colors ml-4">
                              <h3 className="font-bold text-festari-900 text-lg">{exp.position}</h3>
                              <div className="flex items-center text-festari-600 mb-1">
                                <Building size={16} className="mr-1" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center text-festari-500 text-sm mb-3">
                                <div className="flex items-center mr-4">
                                  <CalendarDays size={14} className="mr-1" />
                                  <span>{exp.period}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin size={14} className="mr-1" />
                                  <span>{exp.location}</span>
                                </div>
                              </div>
                              <p className="text-festari-700 mt-2">{exp.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {founderData.volunteerExperience?.length > 0 && (
                        <>
                          <h2 className="text-xl font-bold text-festari-900 mt-12 mb-6 flex items-center gap-2">
                            <Users size={20} className="text-festari-accent" />
                            Volunteer Experience
                          </h2>
                          <div className="space-y-6">
                            {founderData.volunteerExperience.map((exp, index) => (
                              <motion.div 
                                key={index} 
                                className="p-4 rounded-lg border border-festari-100/30 hover:bg-festari-50/50 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <h3 className="font-bold text-festari-900">{exp.position}</h3>
                                <p className="text-festari-600">{exp.organization}</p>
                                <p className="text-festari-500 text-sm">{exp.period}</p>
                                <p className="text-festari-700 mt-2">{exp.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Education Tab */}
                <TabsContent value="education">
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
                        <GraduationCap size={22} className="text-festari-accent" />
                        Education
                      </h2>
                      <div className="space-y-8">
                        {founderData.education.map((edu, index) => (
                          <motion.div 
                            key={index} 
                            className="relative pl-8 border-l-2 border-festari-100"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-festari-accent"></div>
                            <div className="p-4 rounded-lg border border-festari-100/30 hover:bg-festari-50/50 transition-colors ml-4">
                              <h3 className="font-bold text-festari-900 text-lg">{edu.degree}</h3>
                              <div className="flex items-center text-festari-600 mb-1">
                                <BookOpen size={16} className="mr-1" />
                                <span className="font-medium">{edu.institution}</span>
                              </div>
                              <div className="flex items-center text-festari-500 text-sm mb-3">
                                <CalendarDays size={14} className="mr-1" />
                                <span>{edu.year}</span>
                              </div>
                              {edu.activities && (
                                <div className="mt-2">
                                  <p className="text-festari-600 text-sm font-medium">Activities & Societies:</p>
                                  <p className="text-festari-700">{edu.activities}</p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Publications Tab */}
                <TabsContent value="publications" className="space-y-6">
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
                        <Book size={22} className="text-festari-accent" />
                        Research Publications
                      </h2>
                      <div className="space-y-6">
                        {founderData.publications.map((pub, index) => (
                          <motion.div 
                            key={index} 
                            className="p-5 border rounded-lg hover:bg-festari-50/50 transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="flex items-start">
                              <div className="min-w-8 mt-1 mr-4">
                                <div className="w-8 h-8 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent">
                                  <Book size={18} />
                                </div>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-festari-900 text-lg mb-2">{pub.title}</h3>
                                <div className="flex flex-wrap gap-y-2 text-sm text-festari-600 mb-3">
                                  <div className="flex items-center mr-4">
                                    <CalendarDays size={14} className="mr-1" />
                                    <span>{pub.date || pub.year}</span>
                                  </div>
                                  {pub.publisher && (
                                    <div className="flex items-center mr-4">
                                      <BookOpen size={14} className="mr-1" />
                                      <span>{pub.publisher}</span>
                                    </div>
                                  )}
                                  {(pub.volume || pub.issue) && (
                                    <div className="mr-4">
                                      <span>
                                        {pub.volume && `Vol. ${pub.volume}`}
                                        {pub.issue && `, Issue ${pub.issue}`}
                                      </span>
                                    </div>
                                  )}
                                  {pub.pages && (
                                    <div className="mr-4">
                                      <span>Pages {pub.pages}</span>
                                    </div>
                                  )}
                                </div>
                                <p className="text-festari-700 text-sm mb-3"><strong>Authors:</strong> {pub.authors}</p>
                                {pub.description && (
                                  <p className="text-festari-600 text-sm mt-2 mb-4">{pub.description}</p>
                                )}
                                <div className="mt-2">
                                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-festari-accent hover:underline flex items-center text-sm">
                                    <span className="mr-1">View Publication</span>
                                    <ExternalLink size={14} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Contact Tab */}
                <TabsContent value="contact">
                  <Card className="border-none shadow-md">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold text-festari-900 mb-6 flex items-center gap-2">
                        <Mail size={22} className="text-festari-accent" />
                        Contact Information
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-festari-100/30">
                          <div className="space-y-6">
                            <motion.div 
                              className="flex items-center space-x-4"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="w-10 h-10 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent flex-shrink-0">
                                <Mail size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-festari-500">Email</p>
                                <a href={`mailto:${founderData.contactInfo.email}`} className="text-festari-900 hover:text-festari-accent font-medium">
                                  {founderData.contactInfo.email}
                                </a>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center space-x-4"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="w-10 h-10 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent flex-shrink-0">
                                <Phone size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-festari-500">Phone</p>
                                <a href={`tel:${founderData.contactInfo.phone}`} className="text-festari-900 hover:text-festari-accent font-medium">
                                  {founderData.contactInfo.phone}
                                </a>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center space-x-4"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="w-10 h-10 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent flex-shrink-0">
                                <Phone size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-festari-500">Mobile Phone (International)</p>
                                <a href={`tel:${founderData.contactInfo.mobilePhone}`} className="text-festari-900 hover:text-festari-accent font-medium">
                                  {founderData.contactInfo.mobilePhone}
                                </a>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center space-x-4"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="w-10 h-10 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent flex-shrink-0">
                                <MapPin size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-festari-500">Location</p>
                                <p className="text-festari-900 font-medium">{founderData.location}</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center space-x-4"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <div className="w-10 h-10 bg-festari-accent/10 rounded-full flex items-center justify-center text-festari-accent flex-shrink-0">
                                <Linkedin size={20} />
                              </div>
                              <div>
                                <p className="text-sm text-festari-500">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/dr-festus-kunkyin-saadaari/" target="_blank" rel="noopener noreferrer" className="text-festari-900 hover:text-festari-accent font-medium">
                                  Connect on LinkedIn
                                </a>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        
                        <div className="bg-festari-50/50 p-6 rounded-xl border border-festari-100/30">
                          <h3 className="text-xl font-bold text-festari-900 mb-4">Send a Message</h3>
                          <form className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-festari-700 mb-1">Name</label>
                              <input 
                                type="text" 
                                id="name" 
                                className="w-full px-4 py-2 rounded-md border border-festari-200 focus:outline-none focus:ring-2 focus:ring-festari-accent/50"
                                placeholder="Your name"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-festari-700 mb-1">Email</label>
                              <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-2 rounded-md border border-festari-200 focus:outline-none focus:ring-2 focus:ring-festari-accent/50"
                                placeholder="Your email address"
                              />
                            </div>
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium text-festari-700 mb-1">Message</label>
                              <textarea 
                                id="message" 
                                rows={4} 
                                className="w-full px-4 py-2 rounded-md border border-festari-200 focus:outline-none focus:ring-2 focus:ring-festari-accent/50"
                                placeholder="Your message"
                              ></textarea>
                            </div>
                            <Button className="w-full bg-festari-accent hover:bg-festari-accent/90">
                              <Mail size={16} className="mr-2" />
                              Send Message
                            </Button>
                          </form>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16 bg-festari-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Interested in collaborating?</h2>
            <p className="text-festari-100 max-w-2xl mx-auto mb-8">
              Dr. Kunkyin-Saadaari is open to research collaborations, consulting opportunities, and speaking engagements related to mining engineering, rock mechanics, and artificial intelligence applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-festari-900">
                <Mail size={18} className="mr-2" />
                Contact for Consulting
              </Button>
              <Button className="bg-festari-accent hover:bg-festari-accent/90">
                <Users size={18} className="mr-2" />
                Research Collaboration
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Founder;
