import { useState, useEffect } from 'react';
import { navlinks } from '@/constants';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme/theme-provider';
import { Link, useNavigate } from 'react-router-dom';
import wcc_dark from '@/assets/logos/wcc-dark.svg';
import wcc_light from '@/assets/logos/wcc-light.svg';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const ScrolledNavbar = ({ isVisible }) => {
  const { theme } = useTheme();
  const logo = theme === 'light' ? wcc_light : wcc_dark;
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // Close mobile menu when navbar is hidden
  useEffect(() => {
    if (!isVisible && toggle) {
      setToggle(false);
    }
  }, [isVisible, toggle]);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full flex justify-center mt-4 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'}`}
    >
      <div className='w-11/12 md:w-4/5 lg:w-3/5 px-6 py-2 bg-background/90 backdrop-blur-md rounded-xl shadow-xl border border-ring'>
        <div className='flex justify-between items-center w-full'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt='WCC Logo'
              className='h-8 w-8'
            />
          </Link>

          <div className='hidden md:flex'>
            <ul className='flex gap-8'>
              {navlinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`${link.link}`}
                    className='hover:text-ring transition-colors duration-300 font-medium'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='flex items-center gap-4'>
            <div className='md:hidden'> 
              <Sheet open={toggle} onOpenChange={setToggle}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="cursor-pointer">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 p-5 -mt-5">
                    {navlinks.map((link) => (
                      <a
                        key={link.name}
                        href={`${link.link}`}
                        className="hover:text-ring transition-colors duration-300 font-medium text-lg"
                        onClick={() => setToggle(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                    <Button variant='outline' className="mt-4 w-1/2 cursor-pointer" onClick={() => navigate('/login')}>	
                      Login <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <Button variant='outline' className='cursor-pointer md:flex hidden' onClick={() => navigate('/login')}>
              Login <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();

  const logo = theme === 'light' ? wcc_light : wcc_dark;

  useEffect(() => {
    const handleScroll = () => {
      // First threshold - show scrolled navbar
      if (window.scrollY > 50) {
        setIsScrolled(true);
        
        // Second threshold - apply hide/show effect
        if (window.scrollY > 200) {
          if (window.scrollY > lastScrollY) { // scrolling down
            setIsVisible(false);
          } else { // scrolling up
            setIsVisible(true);
          }
        } else {
          // Between 50 and 200px scroll - always show
          setIsVisible(true);
        }
      } else {
        // Less than 50px scroll - show regular navbar
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isScrolled ? (
    <ScrolledNavbar isVisible={isVisible} />
  ) : (
    <nav className='flex justify-between items-center py-4 px-8 bg-background/90 fixed w-full z-50 top-0'>
      <div>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt='WCC Logo'
            className='h-10 w-10'
          />
        </Link>
      </div>
      <div className='justify-between items-center hidden md:flex'>
        <ul className='flex gap-8'>
          {navlinks.map((link) => (
            <li key={link.name}>
              <a
                href={`${link.link}`}
                className='hover:text-ring transition-colors duration-300 font-medium'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='md:hidden'> 
        <Sheet open={toggle} onOpenChange={setToggle}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-5 -mt-5">
              {navlinks.map((link) => (
                <a
                  key={link.name}
                  href={`${link.link}`}
                  className="hover:text-ring transition-colors duration-300 font-medium text-lg"
                  onClick={() => setToggle(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant='outline' className="mt-4 w-1/2 cursor-pointer" onClick={() => navigate('/login')}>
                Login <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Button variant='outline' className='cursor-pointer md:flex hidden' onClick={() => navigate('/login')}>
        Login <ArrowRight size={16} className="ml-2" />
      </Button>
    </nav>
  );
};

export default Navbar;