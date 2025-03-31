import ConsultationForm from '@/components/consultation/ConsultationForm';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ConsultationPage = () => {
  // Main component rendering the consultation request page
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header component */}
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container-custom">
          {/* Page title */}
          <h1 className="text-3xl font-display font-bold text-festari-900 mb-8 text-center">
            Request a Consultation
          </h1>
          {/* Consultation form */}
          <ConsultationForm serviceCategories={[]} />
        </div>
      </main>
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default ConsultationPage;
