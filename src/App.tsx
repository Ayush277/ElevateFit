import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Activity, 
  Flame, 
  Trophy, 
  LayoutDashboard, 
  ChevronDown, 
  Dumbbell, 
  Calendar, 
  Star
} from 'lucide-react';
import CursorEffect from './components/CursorEffect';
import QuoteRotator from './components/QuoteRotator';
import DailyChallenge from './components/DailyChallenge';
import FeatureCard from './components/FeatureCard';
import Testimonial from './components/Testimonial';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const controlsFeatures = useAnimation();
  const controlsChallenges = useAnimation();
  const [refFeatures, inViewFeatures] = useInView({ threshold: 0.2 });
  const [refChallenges, inViewChallenges] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inViewFeatures) {
      controlsFeatures.start('visible');
    }
    if (inViewChallenges) {
      controlsChallenges.start('visible');
    }
  }, [inViewFeatures, inViewChallenges, controlsFeatures, controlsChallenges]);

  const challenges = [
    {
      id: 1,
      title: "30 Push-up Challenge",
      description: "Complete 30 push-ups in one go",
      icon: <Dumbbell className="w-6 h-6 text-indigo-500" />,
      difficulty: "Medium"
    },
    {
      id: 2,
      title: "10K Steps",
      description: "Walk 10,000 steps today",
      icon: <Activity className="w-6 h-6 text-green-500" />,
      difficulty: "Easy"
    },
    {
      id: 3,
      title: "Plank Master",
      description: "Hold a plank for 2 minutes",
      icon: <Flame className="w-6 h-6 text-orange-500" />,
      difficulty: "Hard"
    },
    {
      id: 4,
      title: "Hydration Hero",
      description: "Drink 3 liters of water today",
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      difficulty: "Easy"
    }
  ];

  const features = [
    {
      id: 1,
      title: "User Dashboard",
      description: "Track your progress with personalized insights",
      icon: <LayoutDashboard className="w-10 h-10 text-indigo-600" />
    },
    {
      id: 2,
      title: "Activity Tracking",
      description: "Monitor all your workouts in one place",
      icon: <Activity className="w-10 h-10 text-green-600" />
    },
    {
      id: 3,
      title: "Calorie Planner",
      description: "Plan your meals and track nutritional intake",
      icon: <Flame className="w-10 h-10 text-orange-600" />
    },
    {
      id: 4,
      title: "Leaderboard",
      description: "Compete with friends and stay motivated",
      icon: <Trophy className="w-10 h-10 text-yellow-600" />
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lost 30lbs in 3 months",
      content: "This platform completely transformed my fitness journey. The daily challenges kept me motivated and the community support was incredible!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marathon Runner",
      content: "As a competitive runner, I needed a platform that could keep up with my training. The analytics and progress tracking are unmatched!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Fitness Coach",
      content: "I recommend this platform to all my clients. The calorie planner and workout tracking make it easy to stay on top of your fitness goals.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <CursorEffect />
      
      {/* Hero Section with Moving Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
            filter: 'brightness(0.4)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="absolute inset-0 z-0 bg-black opacity-50" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ELEVATE<span className="text-indigo-500">FIT</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform your body, elevate your mind, and reach new heights in your fitness journey.
          </motion.p>
          
          <QuoteRotator />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <a 
              href="#features" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
            >
              Get Started
              <ChevronDown className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-8 w-8 text-white" />
          </motion.div>
        </div>
      </div>
      
      {/* Features and Challenges Section */}
      <div id="features" className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Your Fitness Journey Starts Here
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Personalized workouts, nutrition plans, and a supportive community to help you achieve your goals.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Daily Challenges */}
            <motion.div
              ref={refChallenges}
              initial="hidden"
              animate={controlsChallenges}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="bg-gray-800 rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-indigo-400" />
                Daily Challenges
              </h3>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <DailyChallenge key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </motion.div>
            
            {/* Features */}
            <motion.div
              ref={refFeatures}
              initial="hidden"
              animate={controlsFeatures}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.id} 
                  feature={feature} 
                  index={index} 
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join thousands who have transformed their lives with our platform.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-indigo-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Fitness Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-200 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join today and get access to personalized workouts, nutrition plans, and a supportive community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#" 
              className="bg-white hover:bg-gray-100 text-indigo-900 font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300"
            >
              Start Free Trial
              <Star className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">ELEVATE<span className="text-indigo-500">FIT</span></h3>
              <p className="mb-4">Transform your body, elevate your mind.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Workouts</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Nutrition</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Challenges</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Guides</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition duration-300">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; 2025 ElevateFit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;