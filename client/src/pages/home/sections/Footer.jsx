import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SectionWrapper } from '@/hoc';
import { Copyright } from 'lucide-react';

import { navlinks, socials } from '@/constants';

const SocialIcon = ({ social }) => (
  <a
    key={social.name}
    href={social.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <social.icon className='text-ring hover:text-ring/70 cursor-pointer'/>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-xs">{social.name}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </a>
);

const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 items-center justify-between p-16'>
      <Separator />
      <nav className='flex flex-row gap-4 font-medium capitalize justify-center items-center'>
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className='hover:text-ring'
          >
            {link.name}
          </a>
        ))}
      </nav>
      <div className='flex flex-row gap-4'>
        {socials.map((social) => (
          <SocialIcon key={social.name} social={social} />
        ))}
      </div>
      <div className='flex flex-row gap-2'>
        <Copyright className='text-ring hover:text-ring/70'/>
        <p>
          {new Date().getFullYear()} <span className='hover:text-ring'>The Wits Consulting Club</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;