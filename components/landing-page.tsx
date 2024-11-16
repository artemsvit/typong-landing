'use client';

import React, { useEffect, useState } from 'react';
import { ArrowDown, Check, Brain, MessageSquare, Zap, TimerReset, Hash, Languages, PenTool, BookOpen, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { TestimonialsCarousel } from './testimonials-carousel';
import { Navigation } from "./navigation";
import { ThemeToggle } from "./theme-toggle";
import { Footer } from "./footer";
import { useTheme } from 'next-themes';

export const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Typong</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full logo-dot" />
            </div>
            
            {/* Navigation */}
            <Navigation />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button>Download</Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Shimmer */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            {/* Shimmer gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-gray-900 via-gray-800 to-gray-900' 
                : 'from-gray-100 via-gray-50 to-gray-100'
            } animate-shimmer`}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-12 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text px-4 py-2">
            Make Typing Great Again
          </h1>
          <p className={`text-xl mb-12 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your typing experience with AI-powered assistance. Write better, faster, and smarter across any application on your Mac.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105">
            Download Free <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <div className={`mt-8 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            macOS 12 or later required
          </div>
        </div>
      </section>

      {/* Features Grid with Glassmorphism */}
      <section id="features" className={`py-24 relative overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[54px] font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text">
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
                  theme === 'dark' 
                    ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                    : 'bg-white/50 hover:bg-white/70'
                } border ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${feature.gradient}`}>
                  {React.cloneElement(feature.icon, { 
                    className: "h-6 w-6 text-white"
                  })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>

      {/* Pricing Cards with Glassmorphism */}
      <section id="pricing" className={`relative py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[54px] font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Trial Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 flex flex-col min-h-[600px] ${
              theme === 'dark' 
                ? 'bg-gray-900/50 hover:bg-gray-900/70 border border-gray-800' 
                : 'bg-gray-50/50 hover:bg-gray-50/70 border border-gray-200'
            }`}>
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold">Free Trial</div>
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}>14 days</div>
                </div>
                <div className="text-5xl font-bold mt-6">$0</div>
                <div className="space-y-4 mt-8">
                  {[
                    "Auto language detection",
                    "Basic AI writing assistance",
                    "5 AI commands per day",
                    "3 custom shortcuts",
                    "Standard response time"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-8">
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-full transform transition-all duration-300 hover:scale-105">
                  Download Free Trial
                </Button>
              </div>
            </div>

            {/* Pro Card */}
            <div className={`relative p-8 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 flex flex-col min-h-[600px] ${
              theme === 'dark' 
                ? 'bg-gradient-to-b from-gray-900 to-black border border-green-500' 
                : 'bg-gradient-to-b from-gray-900 to-black border border-green-500'
            }`}>
              <div className="text-white">
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold">Pro</div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
                <div className="text-5xl font-bold mt-6">
                  $4.99
                  <span className="text-lg font-normal text-gray-400">/month</span>
                </div>
                <div className="space-y-4 mt-8">
                  {[
                    {
                      title: "Unlimited AI powers",
                      description: "No restrictions on AI usage"
                    },
                    {
                      title: "Advanced text generation",
                      description: "Generate emails, essays, and more"
                    },
                    {
                      title: "Style matching",
                      description: "AI adapts to your writing style"
                    },
                    {
                      title: "Neural translation",
                      description: "100+ languages with context awareness"
                    },
                    {
                      title: "Smart workflows",
                      description: "Create complex text processing chains"
                    },
                    {
                      title: "Contextual awareness",
                      description: "AI understands your writing context"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <span className="block font-medium">{feature.title}</span>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto pt-8">
                <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white rounded-full transform transition-all duration-300 hover:scale-105">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
