import React from 'react';
import { partners } from "@/constants";
import { SectionWrapper } from '@/hoc';
import { useTheme } from '@/components/theme/theme-provider';

const Partner = ({ name, website, logos }) => {
  const { theme } = useTheme();

  const logo = theme === "dark" ? logos.dark : logos.light;

  return (
    <a 
      key={name}
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-primary/5 dark:bg-primary/20 rounded-lg hover:border-ring border border-primary transition-shadow duration-300"
    >
      <div className="h-30 w-full flex items-center justify-center p-5">
        <img
          src={logo} // light mode ? logos.light : logos.dark
          alt={`${name} logo`}
          className="max-h-full max-w-full object-contain scale-110"
        />
      </div>
    </a>
  );
}

const Partners = () => {
  return (
    <section className='flex flex-col gap-5'>
      <h2 className="text-4xl font-bold bg-clip-text">Our Partners</h2>
      <p className="leading-relaxed text-lg max-w-5xl">
        We collaborate with leading consulting firms and educational institutions to deliver exceptional value to our students.
      </p>
        
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {partners.map((partner) => (
          <Partner key={partner.name} {...partner} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Partners, "partners");