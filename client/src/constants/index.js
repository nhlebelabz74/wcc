// exec individual photos
import August from '../assets/exec/August.webp';
import Banzi from '../assets/exec/Banzi.webp';
import Kat from '../assets/exec/Kat.webp';
import Awande from '../assets/exec/Awande.webp';
import Kamo from '../assets/exec/Kamo.webp';
import Khumo from '../assets/exec/Khumo.webp';
import Lexi from '../assets/exec/Lexi.webp';
import Tercia from '../assets/exec/Tercia.webp';
import Sinqobile from '../assets/exec/Sinqobile.webp';
import Emmanuel from '../assets/exec/Emmanuel.webp';
// import Tebogo from '../assets/exec/Tebogo.webp';

// icons
import { Globe, Camera, Users, Award, Flag, Sprout, Lightbulb, Shield, Linkedin, Instagram, AtSign, Mail, Hash } from 'lucide-react';

// partner logos
import bcg_light from '../assets/partners/bcg-light.svg';
import bcg_dark from '../assets/partners/bcg-dark.svg';
import mck_light from '../assets/partners/McK-light.svg';
import mck_dark from '../assets/partners/McK-dark.svg';
import cadena_light from '../assets/partners/cadena-light.svg';
import cadena_dark from '../assets/partners/cadena-dark.svg';
import bain_light from '../assets/partners/bain-light.svg';
import bain_dark from '../assets/partners/bain-dark.svg';
import monocle_light from '../assets/partners/monocle-light.svg';
import monocle_dark from '../assets/partners/monocle-dark.svg';
import wbs_light from '../assets/partners/wbs-light.svg';
import wbs_dark from '../assets/partners/wbs-dark.svg';
import ow_light from '../assets/partners/ow-light.svg';
import ow_dark from '../assets/partners/ow-dark.svg';
import kearney_light from '../assets/partners/kearney-light.svg';
import kearney_dark from '../assets/partners/kearney-dark.svg';
import anura_light from '../assets/partners/anura-light.svg';
import anura_dark from '../assets/partners/anura-dark.svg';
import simon_light from '../assets/partners/simon-light.svg';
import simon_dark from '../assets/partners/simon-dark.svg';

export const execs = [
  {
    name: "Augustine Ledwaba",
    title: "Head",
    image: August,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/augustine-ledwaba-46133b272/"
      }
    ]
  },
  {
    name: "Banzile Nhlebela",
    title: "Co-Head",
    image: Banzi,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/banzilenhlebela"
      },
      {
        icon: Globe,
        link: "https://banzilenhlebela.netlify.app"
      }
    ]
  },
  {
    name: "Katleho Rathai",
    title: "Head, Corporate Relations",
    image: Kat,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/katleho-rathai-6758a722b/"
      },
      {
        icon: Camera,
        link: "https://www.instagram.com/phosstudio.s?igsh=ajM0ZThhb2Zqem9n"
      }
    ]
  },
  {
    name: "Lexi Davies",
    title: "Head, Events and Planning",
    image: Lexi,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/lexi-davies-1880461a7/"
      }
    ]
  },
  {
    name: "Emmanuel Azubuike",
    title: "Head, Casing Committee",
    image: Emmanuel,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/emmanuel-obinna-azubuike-b39940274/"
      }
    ]
  },
  {
    name: "Kamohelo Mofokeng",
    title: "Secretary",
    image: Kamo,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/kamohelo-khanyisile-mofokeng-335b02334/"
      }
    ]
  },
  {
    name: "Awande Mtshali",
    title: "Treasurer",
    image: Awande,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/awande-mtshali-/"
      }
    ]
  },
  {
    name: "Khumo Morife",
    title: "Head, Social Media",
    image: Khumo,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/khumo-morife/"
      }
    ]
  },
  // {
  //   name: "Tebogo Zikalala",
  //   title: "Co-Head, Social Media",
  //   image: Tebogo,
  //   socials: [
  //     {
  //       icon: Linkedin,
  //       link: "https://www.linkedin.com/in/tebogo-zikalala-b286752b0/"
  //     }
  //   ]
  // },
  {
    name: "Tercia Banda",
    title: "Head, Writting Committee",
    image: Tercia,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/tercia-banda-06a4b9217/"
      }
    ]
  },
  {
    name: "Sinqobile Simelane",
    title: "Co-Head, Events",
    image: Sinqobile,
    socials: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/sinqobile-simelane-38a1ba1b7/"
      }
    ]
  },
];

export const partners = [
  {
    name: "McKinsey & Company",
    logos: {
      light: mck_light,
      dark: mck_dark
    },
    website: "https://www.mckinsey.com/"
  },
  {
    name: "BCG",
    logos: {
      light: bcg_light,
      dark: bcg_dark
    },
    website: "https://www.bcg.com/"
  },
  {
    name: "Bain & Company",
    logos: {
      light: bain_light,
      dark: bain_dark
    },
    website: "https://www.bain.com/"
  },
  {
    name: "Cadena Growth Partners",
    logos: {
      light: cadena_light,
      dark: cadena_dark
    },
    website: "https://www.cadenagrowthpartners.com/"
  },
  {
    name: "Monocle Solutions",
    logos: {
      light: monocle_light,
      dark: monocle_dark
    },
    website: "https://www.monoclesolutions.com/"
  },
  {
    name: "Wits Business School",
    logos: {
      light: wbs_light,
      dark: wbs_dark
    },
    website: "https://www.wbs.ac.za/"
  },
  {
    name: "Oliver Wyman",
    logos: {
      light: ow_light,
      dark: ow_dark
    },
    website: "https://www.oliverwyman.com/"
  },
  {
    name: "Kearney",
    logos: {
      light: kearney_light,
      dark: kearney_dark
    },
    website: "https://www.kearney.com/"
  },
  {
    name: "Anura Partners",
    logos: {
      light: anura_light,
      dark: anura_dark
    },
    website: "https://www.anura.partners/"
  },
  {
    name: "Simon-Kucher & Partners",
    logos: {
      light: simon_light,
      dark: simon_dark
    },
    website: "https://www.simon-kucher.com/en"
  }
];

export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export const values = [
  {
    title: "Excellence",
    description: " We strive for the highest standards in everything we do, from problem-solving to professional development. ",
    Icon: Award
  },
  {
    title: "Collaboration",
    description: " We foster a culture of teamwork, leveraging diverse perspectives to drive impactful solutions. ",
    Icon: Users
  },
  {
    title: "Integrity",
    description: "Ethical decision-making and accountability are at the core of our actions and engagements. ",
    Icon: Shield
  },
  {
    title: "Growth",
    description: "We believe in continuous learning and self-improvement, ensuring our members are always evolving. ",
    Icon: Sprout
  },
  {
    title: "Leadership",
    description: "We empower students to take initiative, develop leadership skills, and make a lasting impact. ",
    Icon: Flag
  },
  {
    title: "Innovation",
    description: "We embrace creative thinking and adaptability, staying ahead in a rapidly changing consulting landscape.",
    Icon: Lightbulb
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: ""
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: ""
  },
  {
    name: "Threads",
    icon: AtSign,
    link: ""
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:witsconsultingclub1@gmail.com"
  },
  {
    name: "Tiktok",
    icon: Hash,
    link: ""
  }
];

export const navlinks = [
  {
    name: "Mission",
    link: "#"
  },
  {
    name: "Values",
    link: "#values"
  },
  {
    name: "Partners",
    link: "#partners"
  },
  {
    name: "Team",
    link: "#team"
  },
  {
    name: "Join-Us",
    link: "#become-a-member"
  }
];