
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationRequestForm from '@/components/common/ConsultationRequestForm';
import { serviceCategories } from '@/data/services';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, MessageSquare } from 'lucide-react';

const ConsultationPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('request');

  // Parse query parameters to pre-select category and service
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category');
  const serviceParam = searchParams.get('service');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-accent/10 p-4 sm:p-8 rounded-lg mb-8">
            <h1 className="text-3xl font-display font-bold text-festari-900 mb-4 text-center">
              Professional Consultation Services
            </h1>
            <p className="text-festari-600 text-center max-w-2xl mx-auto">
              Connect with our experts to discuss your specific needs and receive tailored solutions for your project or business requirements.
            </p>
          </div>

          <Tabs defaultValue="request" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="request" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> 
                <span>Consultation Request</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>FAQ & Information</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="request" className="space-y-6">
              <ConsultationRequestForm 
                serviceCategories={serviceCategories}
                title="Request a Professional Consultation"
                description="Our team of experts is ready to assist you with specialized solutions tailored to your needs."
              />
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What happens after I submit a consultation request?</h3>
                  <p className="text-festari-600">
                    Our team will review your request and get back to you within 24-48 hours to schedule an initial discussion or provide further information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Is there a fee for the initial consultation?</h3>
                  <p className="text-festari-600">
                    The initial consultation is complimentary. Any fees for subsequent services will be discussed during this consultation based on your specific requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How long does a typical consultation process take?</h3>
                  <p className="text-festari-600">
                    The consultation timeline varies depending on the complexity of your needs. We aim to provide initial insights and recommendations within one week of our first meeting.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Can consultations be conducted remotely?</h3>
                  <p className="text-festari-600">
                    Yes, we offer both in-person and remote consultations via video conferencing to accommodate your preferences and location.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationPage;
