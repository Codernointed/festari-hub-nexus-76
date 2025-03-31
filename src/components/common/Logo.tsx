import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  theme?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ variant = 'full', theme = 'light', className, size = 'md' }: LogoProps) => {
  const getLogoSrc = () => {
    if (variant === 'full') {
      return theme === 'light' 
        ? '/base_logo_transparent_background.png'
        : '/black_text-logoname_transparent_background.png';
    }
    if (variant === 'icon') {
      return theme === 'light' 
        ? '/logo-icon.png'
        : '/logo-icon-black.png';
    }
    // text-only variant
    return theme === 'light'
      ? '/base_logo_transparent_background.png'
      : '/black_text-logoname_transparent_background.png';
  };

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  return (
    <img 
      src={getLogoSrc()}
      alt="Festari Logo"
      className={cn(
        'w-auto object-contain',
        sizeClasses[size],
        className
      )}
    />
  );
};

export default Logo;
