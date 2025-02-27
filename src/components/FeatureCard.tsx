import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  return (
    <motion.div 
      className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="bg-gray-800 inline-block p-3 rounded-lg mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-300">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;