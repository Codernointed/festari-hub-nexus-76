import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion'; // Corrected import
import { Award, Briefcase, MapPin, Mail, Building, Users, Target, Heart, 
         Lightbulb, Leaf, HandshakeIcon, Globe, School, Trees, 
         Factory, Handshake, GraduationCap, 
         FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  // Subsidiaries data
  const subsidiaries = [
    {
      name: "Festari Research & Consultancy Institute (FRCI)",
      icon: School,
      description: "Research and consulting services for industry advancement."
    },
    {
      name: "Festari International Academy (FIA)",
      icon: GraduationCap,
      description: "Professional education and skill development programs."
    },
    {
      name: "Festari Estates Agency (FEA)",
      icon: Building,
      description: "Real estate development and property management."
    },
    {
      name: "Festari Farms & Agribusinesses (FFA)",
      icon: Trees,
      description: "Sustainable agriculture and food production."
    },
    {
      name: "Festari Enterprise (FEnt)",
      icon: Factory,
      description: "Strategic trade and business development."
    }
  ];

  // Company Values
  const coreValues = [
    { icon: Target, title: "Purpose-Driven", description: "Everything we do is grounded in meaning and directed toward long-term transformation." },
    { icon: Award, title: "Excellence Without Compromise", description: "We uphold the highest standards of quality, precision, and impact." },
    { icon: FileText, title: "Integrity at the Core", description: "We lead with truth, transparency, and ethical responsibility." },
    { icon: Users, title: "People First", description: "We believe that progress begins with empowered individuals and inclusive growth." },
    { icon: Lightbulb, title: "Innovation in Action", description: "We merge cutting-edge knowledge with indigenous insights to create bold, relevant solutions." },
    { icon: Leaf, title: "Sustainability Matters", description: "We are committed to strategies that respect both people and planet." },
    { icon: HandshakeIcon, title: "Collaboration as a Culture", description: "We build bridges — across disciplines, borders, and generations — to create shared success." },
  ];

  // Partnership Opportunities
  const partnershipTypes = [
    { type: "Academic Institutions", description: "Collaborate on research, curriculum development, or joint training programs through FIA and FRCI." },
    { type: "Industry Stakeholders", description: "Partner in mining projects, consulting services, or technology transfer initiatives." },
    { type: "NGOs & Development Agencies", description: "Co-create community empowerment projects in agriculture, safety, and education." },
    { type: "Real Estate Developers", description: "Work with FEA to scale housing, infrastructure, and investment projects." },
    { type: "Agribusiness Investors", description: "Co-invest in sustainable farming and value-added agribusiness through FFA." },
    { type: "Entrepreneurs & Traders", description: "Join forces with Festari Enterprise (FEnt) for distribution, trading, or commercial services." },
    { type: "International Bodies", description: "Form joint ventures or knowledge exchange platforms that amplify regional and global impact." },
  ];

  // Current Projects
  const currentProjects = [
    {
      title: "Organic Vegetable Farming Initiative",
      description: "We are developing an organic vegetable farming project to supply healthy produce to local and institutional markets. Support is welcome in the form of technical expertise, irrigation systems, farm input sponsorship, and distribution partnerships.",
    },
    {
      title: "250-Student Hostel Facility",
      description: "We are constructing a modern hostel facility to accommodate 250 university students in Tarkwa. We welcome partnerships for each construction phase, including materials support, co-development, or infrastructure funding.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - More Dynamic */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-festari-900 via-festari-800 to-festari-700">
            <div className="absolute inset-0 opacity-30 bg-[url('/path/to/pattern.svg')] animate-slide"></div>
          </div>
          <motion.div 
            className="container-custom relative z-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight text-white
                         bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              About Festari Group Ltd
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90
                         backdrop-blur-sm bg-white/5 p-6 rounded-2xl">
              A multidisciplinary holding company based in Ghana, focused on delivering practical, 
              research-informed, and transformative solutions across key sectors. With a strong 
              foundation in innovation, quality, and community impact, we are committed to driving 
              sustainable development and sectoral excellence across Africa.
            </p>
          </motion.div>
        </section>

        {/* Subsidiaries Section - More Interactive */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-festari-50/30"></div>
          <motion.div className="container-custom relative z-10" {...staggerChildren}>
            <h2 className="text-4xl md:text-5xl font-bold text-festari-900 mb-16 text-center
                         bg-gradient-to-r from-festari-900 to-festari-700 bg-clip-text text-transparent">
              Our Ecosystem of Subsidiaries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsidiaries.map((subsidiary, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm
                           hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                           border border-gray-100/50"
                  {...fadeInUp}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-festari-50/20 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <subsidiary.icon className="w-16 h-16 text-festari-600 mb-6 
                                           group-hover:scale-110 group-hover:rotate-3 transition-all" />
                  <h3 className="text-xl font-bold text-festari-900 mb-3">{subsidiary.name}</h3>
                  <p className="text-festari-700">{subsidiary.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision - More Dynamic */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/path/to/pattern-light.svg')] opacity-5"></div>
          <motion.div className="container-custom grid md:grid-cols-2 gap-12" {...staggerChildren}>
            {/* Mission Card */}
            <motion.div
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl 
                       transition-all duration-500 overflow-hidden"
              {...fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-festari-50/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-3xl font-bold text-festari-900 mb-6">Our Mission</h2>
              <p className="text-lg text-festari-700 leading-relaxed">
                To deliver transformative solutions through innovation, education, consulting, 
                and enterprise — advancing Africa's potential, one empowered individual, 
                thriving community, and resilient institution at a time.
              </p>
            </motion.div>
            {/* Vision Card - Similar styling */}
            <motion.div
              className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl 
                       transition-all duration-500 overflow-hidden"
              {...fadeInUp}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-festari-50/10 to-transparent 
                           opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-3xl font-bold text-festari-900 mb-6">Our Vision</h2>
              <p className="text-lg text-festari-700 leading-relaxed">
                To become Africa's most trusted and pioneering force in multidisciplinary 
                development — where bold ideas meet grounded solutions, and where local 
                expertise fuels global relevance.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Core Values - More Engaging */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-festari-50/20"></div>
          <motion.div className="container-custom relative z-10" {...staggerChildren}>
            <h2 className="text-3xl font-bold text-festari-900 mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  {...fadeInUp}
                >
                  <value.icon className="w-12 h-12 text-festari-600 mb-4" />
                  <h3 className="text-xl font-bold text-festari-900 mb-2">{value.title}</h3>
                  <p className="text-festari-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Partnership Section - More Dynamic */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-festari-50 to-white"></div>
          <motion.div className="container-custom relative z-10" {...staggerChildren}>
            <h2 className="text-3xl md:text-4xl font-bold text-festari-900 mb-8 text-center">
              Partner With Us
            </h2>
            <p className="text-xl text-festari-700 max-w-3xl mx-auto mb-16 text-center leading-relaxed">
              We welcome individuals, institutions, and organizations to join us in delivering 
              impactful solutions. Whether you're an investor, academic, nonprofit, consultant, 
              or industry leader — there's a space for you within our ecosystem.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipTypes.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-festari-50 p-6 rounded-lg"
                  {...fadeInUp}
                >
                  <h3 className="text-xl font-bold text-festari-900 mb-3">{partner.type}</h3>
                  <p className="text-festari-700">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section - More Interactive */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-festari-50/20"></div>
          <motion.div className="container-custom relative z-10" {...staggerChildren}>
            <h2 className="text-3xl md:text-4xl font-bold text-festari-900 mb-16 text-center">
              Current Initiatives
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm"
                  {...fadeInUp}
                >
                  <h3 className="text-2xl font-bold text-festari-900 mb-4">{project.title}</h3>
                  <p className="text-festari-700">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact CTA - More Engaging */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-festari-900 via-festari-800 to-festari-700">
            <div className="absolute inset-0 bg-[url('/path/to/pattern-dark.svg')] opacity-10 animate-slide"></div>
          </div>
          <motion.div 
            className="container-custom relative z-10 text-center"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Make an Impact?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join us in creating transformative solutions for Africa's future. Together, 
              we can drive sustainable development and sectoral excellence.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact" 
                    className="inline-block bg-white text-festari-900 px-8 py-4 rounded-lg 
                             font-bold hover:bg-festari-50 transition-colors text-lg">
                Contact Us Today
              </Link>
              <Link to="/projects" 
                    className="inline-block border-2 border-white text-white px-8 py-4 
                             rounded-lg font-bold hover:bg-white/10 transition-colors text-lg">
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
