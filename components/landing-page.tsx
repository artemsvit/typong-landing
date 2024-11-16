'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, Check, Brain, MessageSquare, Moon, Sun, Zap, TimerReset, Hash, Languages, PenTool, BookOpen, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { TestimonialsCarousel } from './testimonials-carousel';
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";
import { Footer } from "./footer";

export const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Force dark mode
    setDarkMode(true);
    document.documentElement.classList.add('dark');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50
          ? darkMode 
            ? 'py-4 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800'
            : 'py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100'
          : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity group">
            <div className="logo-dot w-[18px] h-[18px] rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></div>
            <span className="text-xl font-bold">Typong</span>
          </a>
          <Navigation />
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </header>

      {/* Hero Section with Shimmer */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            {/* Shimmer gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
              darkMode 
                ? 'from-gray-900 via-gray-800 to-gray-900' 
                : 'from-gray-100 via-gray-50 to-gray-100'
            } animate-shimmer`}></div>
          </div>
        </div>
        
        <div className="relative max-w-[980px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-semibold tracking-tight mb-6 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text px-4 py-2">
            Make Typing Great Again
          </h1>
          <p className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Experience the future of typing with AI-powered assistance
          </p>
          <Button 
            size="lg" 
            variant="ghost"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105 text-white hover:text-white"
          >
            Download Free <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <div className={`mt-8 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            macOS 12 or later required
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-24 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Smart Features Everywhere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI Writing Assistant",
                description: "Real-time suggestions for better phrasing and grammar fixes as you type.",
                gradient: "from-purple-400 to-indigo-500"
              },
              {
                icon: <Languages className="h-8 w-8" />,
                title: "Universal Translation",
                description: "Instantly translate text in any input field to 100+ languages.",
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: <PenTool className="h-8 w-8" />,
                title: "Style Adaptation",
                description: "Adjust your writing tone from casual to professional instantly.",
                gradient: "from-teal-400 to-emerald-500"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Research Helper",
                description: "Get instant facts and citations while writing papers or emails.",
                gradient: "from-green-400 to-teal-500"
              },
              {
                icon: <History className="h-8 w-8" />,
                title: "Smart Templates",
                description: "Create dynamic templates that adapt to context and previous inputs.",
                gradient: "from-orange-400 to-pink-500"
              },
              {
                icon: <Hash className="h-8 w-8" />,
                title: "Text Commands",
                description: "Use #commands to transform text or generate content instantly.",
                gradient: "from-rose-400 to-red-500"
              },
              {
                icon: <TimerReset className="h-8 w-8" />,
                title: "Auto-Save History",
                description: "Never lose your text with automatic local backups.",
                gradient: "from-fuchsia-400 to-purple-500"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Quick Actions",
                description: "Custom shortcuts for your most-used text transformations.",
                gradient: "from-amber-400 to-orange-500"
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Context-Aware Replies",
                description: "Generate intelligent responses based on conversation history.",
                gradient: "from-violet-400 to-purple-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                    : 'bg-white/50 hover:bg-white/70'
                } border ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${feature.gradient}`}>
                  {React.cloneElement(feature.icon, { 
                    className: "h-6 w-6 text-white"
                  })}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            What Users Say
          </h2>
          <TestimonialsCarousel darkMode={darkMode} />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-24 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-[980px] mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl lg:text-[54px] font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Trial Card */}
            <div className={`p-8 rounded-3xl backdrop-blur-lg transform transition-all duration-300 hover:scale-[1.02] flex flex-col ${
              darkMode 
                ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                : 'bg-white/50 hover:bg-white/70'
            } border ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Free Trial</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-600'
                  }`}>14 Days</span>
                </div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$0</span>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
                </div>
                <div className="space-y-4">
                  {[
                    "Basic AI suggestions",
                    "3 custom shortcuts",
                    "Standard response time",
                    "Basic features",
                    "Single device",
                    "Community support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transform transition-all duration-200 hover:scale-[1.02]">
                  Download Free Trial
                </button>
              </div>
            </div>

            {/* Pro Plan Card */}
            <div className="relative p-[1px] rounded-2xl transform transition-all duration-300 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl" />
              <div className={`relative rounded-2xl backdrop-blur-lg transform transition-all duration-300 h-full ${
                darkMode 
                  ? 'bg-gray-900 group-hover:bg-gray-800/70' 
                  : 'bg-white group-hover:bg-white/70'
              }`}>
                <div className="p-8">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Pro Plan</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>$9.99</span>
                      <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Everything in Free Trial",
                        "Unlimited AI suggestions",
                        "Priority support",
                        "Early access to new features",
                        "Custom keyboard shortcuts",
                        "Cross-device sync"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <button className="w-full py-4 px-8 rounded-xl font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transform transition-all duration-200 hover:scale-[1.02]">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
