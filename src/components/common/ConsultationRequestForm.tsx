
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceCategory } from '@/types/navigation';

interface ConsultationRequestFormProps {
  serviceCategories: ServiceCategory[];
  title?: string;
  description?: string;
}

const ConsultationRequestForm = ({ 
  serviceCategories,
  title = "Request a Consultation",
  description = "Fill out the form below to request a consultation with our experts."
}: ConsultationRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    service: '',
    message: ''
  });
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    const category = serviceCategories.find(cat => cat.title.toLowerCase() === value.toLowerCase());
    setSelectedCategory(category || null);
    setFormData(prev => ({ ...prev, category: value, service: '' }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

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
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        service: '',
        message: ''
      });
      setSelectedCategory(null);
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required 
                placeholder="John Doe" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="john@example.com" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Service Category</Label>
              <Select value={formData.category} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map(category => (
                    <SelectItem key={category.title} value={category.title.toLowerCase()}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {selectedCategory && (
            <div className="space-y-2">
              <Label htmlFor="service">Specific Service</Label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {selectedCategory.activities.map(activity => (
                    <SelectItem key={activity.title} value={activity.title}>
                      {activity.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please describe your project or requirements..."
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Consultation Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationRequestForm;
