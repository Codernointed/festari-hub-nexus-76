import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { serviceCategories } from '@/data/services';

export function ConsultationForm() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Service Category</label>
            <Select onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Select service category" />
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

          {selectedService && (
            <div>
              <label className="text-sm font-medium">Activity</label>
              <Select onValueChange={setSelectedActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories
                    .find(cat => cat.title === selectedService)
                    ?.activities.map(activity => (
                      <SelectItem key={activity.title} value={activity.title}>
                        {activity.title}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input placeholder="Your full name" required />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="Your email address" required />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input type="tel" placeholder="Your phone number" required />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Please describe your requirements or questions"
                className="h-32"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">Preferred Contact Method</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select contact method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Submit Consultation Request
        </Button>
      </form>
    </div>
  );
}
