import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-gray-700 rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="text-white font-medium">{testimonial.name}</h4>
          <p className="text-indigo-300 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{testimonial.content}"</p>
      <div className="mt-4 flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className="w-5 h-5 text-yellow-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;