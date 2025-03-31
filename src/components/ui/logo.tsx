import { LOGOS } from '@/constants/logos';

type LogoVariant = 'base' | 'text' | 'icon' | 'icon-black';
type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const sizesMap = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-10'
} as const;

const Logo = ({ variant = 'base', size = 'md', className }: LogoProps) => {
  const logoSrc = {
    base: LOGOS.BASE_TRANSPARENT,
    text: LOGOS.TEXT_TRANSPARENT,
    icon: LOGOS.ICON_COLOR,
    'icon-black': LOGOS.ICON_BLACK
  }[variant];

  return (
    <img 
      src={logoSrc}
      alt="Festari"
      className={`${sizesMap[size]} ${className || ''}`}
    />
  );
};

export default Logo;
