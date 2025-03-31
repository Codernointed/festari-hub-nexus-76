
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-indigo/90 to-indigo/80 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Business with Festari?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl">
              Whether you're looking for expert consultancy, premium real estate, agricultural solutions, 
              or comprehensive enterprise services, our team is ready to help you achieve your goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-white text-indigo hover:bg-white/90 px-6 py-6" size="lg">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-6" size="lg">
              <Link to="/about" className="flex items-center">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
