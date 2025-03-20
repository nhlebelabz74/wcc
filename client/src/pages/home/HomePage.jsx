import Values from './sections/Values';
import Team from './sections/Team';
import JoinTheClub from './sections/JoinTheClub';
import Partners from './sections/Partners';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';
import Navbar from './sections/Navbar';

import bg_light from '/bg-dark.webp';
import bg_dark from '/bg-light.webp';

import { useTheme } from '@/components/theme/theme-provider';

const HomePage = () => {
  const { theme } = useTheme();
  const bg = theme === 'light' ? bg_dark : bg_light;

  return (
    <div className='relative z-0'>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 2,
        }}
      >
        <Navbar />
        <AboutUs />
      </div>
      
      <Values />
      <Partners />
      <Team />

      <div className='relative z-0'>
        <JoinTheClub />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;