import Layout from '@/components/Layout';
import Gradient from '@/components/work/framer-motion/Gradient';
import Box from '@/components/work/framer-motion/Box';
import Card from '@/components/work/framer-motion/Card';
import MyShop from '@/components/work/framer-motion/MyShop';

import { TitleBack, Topic } from '@/components/DesignSystem';
import { motion } from 'framer-motion';

export default function FramerMotion() {
  return (
    <Layout browserTitle='Framer Motion' description='Framer Motion'>
      <TitleBack href='Work' name='Framer Motion' />

      <div>
        <Topic name='My Shop' />
        <MyShop />
      </div>

      <div className='mt-20'>
        <Topic name='Card' />
        <Card />
      </div>

      <div className='mt-20'>
        <Topic name='Box' />
        <Box />
      </div>

      <div className='mt-20'>
        <Topic name='Gradient' />
        <Gradient />
      </div>

      <div className='mt-20'>
        <Topic name='Random' />
        <motion.div
          whileHover={{
            scale: [
              0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,
              1,
            ],
            borderRadius: ['50%', '0%'],
          }}
          // animate={{ scale: '0.7' }}
          transition={{ duration: 3 }}
          className='w-20 h-20 rounded-md bg-amber-400'
        ></motion.div>
      </div>
    </Layout>
  );
}
