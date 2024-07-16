import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedWrapper = ({ children }: { children: ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedWrapper;
