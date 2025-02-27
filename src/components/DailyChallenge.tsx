import React from 'react';
import { motion } from 'framer-motion';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: string;
}

interface DailyChallengeProps {
  challenge: Challenge;
}

const DailyChallenge: React.FC<DailyChallengeProps> = ({ challenge }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      className="bg-gray-700 rounded-xl p-4 flex items-start gap-4 hover:bg-gray-600 transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="bg-gray-600 p-3 rounded-lg">
        {challenge.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="text-white font-medium">{challenge.title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
            {challenge.difficulty}
          </span>
        </div>
        <p className="text-gray-300 text-sm mt-1">{challenge.description}</p>
        <button className="mt-2 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors duration-300">
          Accept Challenge
        </button>
      </div>
    </motion.div>
  );
};

export default DailyChallenge;