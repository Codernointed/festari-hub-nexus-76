
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, CheckCircle } from 'lucide-react';
import HeaderJS from '@/components/layout/HeaderJS';
import Footer from '@/components/layout/Footer';
import ButtonJS from '@/components/ui/ButtonJS';
import InputJS from '@/components/ui/InputJS';
import CheckboxJS from '@/components/ui/CheckboxJS';
import { useToastJS } from '@/hooks/use-toast-js';

const RegisterJS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('user');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToastJS();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration - in a real app, this would connect to an auth system
    try {
      // Mock registration
      setTimeout(() => {
        toast({
          title: "Success",
          description: "Your account has been created successfully.",
          variant: "success"
        });
        navigate('/login');
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderJS />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-festari-900 font-display">
              Create Your Account
            </h2>
            <p className="mt-2 text-sm text-festari-600">
              Join Festari to explore properties, courses, and more
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-festari-400" />
                </div>
                <InputJS
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="pl-10"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-festari-400" />
                </div>
                <InputJS
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-festari-400" />
                </div>
                <InputJS
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="pl-10 pr-10"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-festari-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-festari-400" />
                  )}
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-festari-400" />
                </div>
                <InputJS
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="pl-10 pr-10"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-festari-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-festari-400" />
                  )}
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-festari-700">Account Type</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div 
                    className={`border rounded-md p-3 cursor-pointer transition-colors ${
                      accountType === 'user' ? 'border-festari-accent bg-festari-50' : 'border-gray-200'
                    }`}
                    onClick={() => setAccountType('user')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-festari-600 mr-2" />
                        <span className="font-medium">Regular User</span>
                      </div>
                      {accountType === 'user' && <CheckCircle className="h-5 w-5 text-festari-accent" />}
                    </div>
                    <p className="text-xs text-festari-600 mt-1">Browse properties and enroll in courses</p>
                  </div>
                  
                  <div 
                    className={`border rounded-md p-3 cursor-pointer transition-colors ${
                      accountType === 'vendor' ? 'border-festari-accent bg-festari-50' : 'border-gray-200'
                    }`}
                    onClick={() => setAccountType('vendor')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-festari-600 mr-2" />
                        <span className="font-medium">Vendor</span>
                      </div>
                      {accountType === 'vendor' && <CheckCircle className="h-5 w-5 text-festari-accent" />}
                    </div>
                    <p className="text-xs text-festari-600 mt-1">List properties or agricultural products</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <CheckboxJS 
                id="terms" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                label="I agree to the Terms of Service and Privacy Policy"
              />
            </div>

            <ButtonJS
              type="submit"
              className="w-full bg-festari-accent hover:bg-festari-accent/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </ButtonJS>
            
            <div className="text-center text-sm">
              <span className="text-festari-600">Already have an account? </span>
              <Link to="/login" className="font-medium text-festari-accent hover:text-festari-accent/80">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterJS;
