import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all transform duration-[1500ms] ease-in-out ${inView
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-10 scale-95 blur-sm'
        }`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
