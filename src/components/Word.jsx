import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Word = () => {
    const paragraph = "We  deliver  innovative  digital  solutions  to  drive  growth  and  efficiency. From  intuitive  interfaces  to  advanced  systems, we  create  products  that  scale  with  your  goals.";
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center", "end center"]
    });

    const words = paragraph.split(' ');

    return (
        <section ref={ref} className='relative min-h-[200vh] max-w-[1600px] mx-auto px-[20px]'>
            <motion.div className='sticky top-[20%] flex justify-center pb-[20%]'>
                <p className='text-zinc-100 flex flex-wrap mx-auto md:text-6xl text-3xl font-black uppercase leading-[112%] tracking-[0.02em]'>
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + (1 / words.length);
                        return <Wo key={index} range={[start, end]} progress={scrollYProgress}>{word}</Wo>;
                    })}
                </p>
            </motion.div>
        </section >
    );
};

export default Word;

const Wo = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.05, 1]);
    return (
        <motion.span style={{ opacity }} className='mr-2'>
            {children}
        </motion.span>
    );
};
