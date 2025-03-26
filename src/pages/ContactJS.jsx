
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';
import { useToastJS } from '@/hooks/use-toast-js';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ButtonJS from '@/components/ui/ButtonJS';
import {
  FormJS,
  FormFieldJS,
  FormItemJS,
  FormLabelJS,
  FormControlJS,
  FormDescriptionJS,
  FormMessageJS
} from '@/components/ui/FormJS';
import InputJS from '@/components/ui/InputJS';
import TextareaJS from '@/components/ui/TextareaJS';

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactJS = () => {
  const { toast } = useToastJS();
  
  // Initialize React Hook Form with Zod validation
  const formMethods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll be in touch soon.",
        variant: "success"
      });
      formMethods.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-festari-900 sm:text-4xl font-display">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-festari-600">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
            <FormJS
              formMethods={formMethods}
              onSubmit={onSubmit}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormFieldJS
                  name="name"
                  render={({ field, fieldState }) => (
                    <FormItemJS>
                      <FormLabelJS>Name</FormLabelJS>
                      <FormControlJS>
                        <InputJS 
                          placeholder="Your name" 
                          {...field} 
                        />
                      </FormControlJS>
                      <FormMessageJS />
                    </FormItemJS>
                  )}
                />

                <FormFieldJS
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItemJS>
                      <FormLabelJS>Email</FormLabelJS>
                      <FormControlJS>
                        <InputJS 
                          type="email" 
                          placeholder="your.email@example.com" 
                          {...field} 
                        />
                      </FormControlJS>
                      <FormMessageJS />
                    </FormItemJS>
                  )}
                />
              </div>

              <FormFieldJS
                name="subject"
                render={({ field, fieldState }) => (
                  <FormItemJS>
                    <FormLabelJS>Subject</FormLabelJS>
                    <FormControlJS>
                      <InputJS 
                        placeholder="What is your message about?" 
                        {...field} 
                      />
                    </FormControlJS>
                    <FormMessageJS />
                  </FormItemJS>
                )}
              />

              <FormFieldJS
                name="message"
                render={({ field, fieldState }) => (
                  <FormItemJS>
                    <FormLabelJS>Message</FormLabelJS>
                    <FormControlJS>
                      <TextareaJS 
                        placeholder="Your message..." 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControlJS>
                    <FormDescriptionJS>
                      Please provide as much detail as possible.
                    </FormDescriptionJS>
                    <FormMessageJS />
                  </FormItemJS>
                )}
              />

              <div className="flex justify-center sm:justify-end">
                <ButtonJS
                  type="submit"
                  variant="highlight"
                  size="lg"
                  className="min-w-[150px]"
                  disabled={formMethods.formState.isSubmitting}
                >
                  {formMethods.formState.isSubmitting ? "Sending..." : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </ButtonJS>
              </div>
            </FormJS>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-festari-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-festari-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-festari-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-festari-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-festari-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-festari-600">info@festari.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto bg-festari-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-festari-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-festari-600">1234 Market Street<br />San Francisco, CA 94103</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactJS;
