import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ConsultationFormProps {
  serviceCategories: Array<{
    title: string;
    items: string[];
  }>;
  onSubmit?: (data: any) => void;
}

const ConsultationForm = ({ serviceCategories, onSubmit }: ConsultationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Consultation Request Sent",
        description: "We'll get back to you soon to discuss your needs.",
      });
      setIsSubmitting(false);
      if (onSubmit) onSubmit(formData);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" required placeholder="John Doe" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">Service Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceCategories.map(category => (
                <SelectItem key={category.title} value={category.title}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea 
          id="message" 
          placeholder="Please describe your project or requirements..."
          className="min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Consultation Request"}
      </Button>
    </form>
  );
};

export default ConsultationForm;
