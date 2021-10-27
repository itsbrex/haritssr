import { SubTopic, Topic } from '../DesignSystem';
import { Box } from '@/components/Box';
import {
  TypeScriptLogo,
  TailwindCSSLogo,
  ReactLogo,
  NextJSLogo,
  FramerMotionLogo,
  MotionOneLogo,
  GitLogo,
  VercelLogo,
} from '../webTechIcon';

export default function WebTech() {
  return (
    <div>
      <Topic name='Web Technology' />
      <SubTopic>
        Web technology that I feel eloquent enough to make an aesthetic integrity websites
      </SubTopic>
      <div className='grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2'>
        <TechLink name='TypeScript' href='https://www.typescriptlang.org/'>
          <TypeScriptLogo />
        </TechLink>

        <TechLink name='React JS' href='https://beta.reactjs.org/'>
          <ReactLogo />
        </TechLink>

        <TechLink name='Next.js' href='https://nextjs.org/'>
          <NextJSLogo />
        </TechLink>

        <TechLink name='Tailwind CSS' href='https://www.tailwindcss.com/'>
          <TailwindCSSLogo />
        </TechLink>

        <TechLink name='Framer Motion' href='https://www.framer.com/motion/'>
          <FramerMotionLogo />
        </TechLink>

        <TechLink name='Motion One' href='https://motion.dev/'>
          <MotionOneLogo />
        </TechLink>

        <TechLink name='Git' href='https://git-scm.com/'>
          <GitLogo />
        </TechLink>

        <TechLink name='Vercel' href='https://vercel.com/'>
          <VercelLogo />
        </TechLink>
      </div>
    </div>
  );
}

const TechLink = ({ children, name, href }) => {
  return (
    <Box href={href}>
      <div className='flex items-center space-x-3'>
        {children}
        <div className='font-medium text-gray-700'>{name}</div>
      </div>
    </Box>
  );
};
