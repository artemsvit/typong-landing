'use client';

import { useEffect, useState } from 'react';

export const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-advance the carousel every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // Update dark mode based on system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    
    // Set loaded after initial render
    setIsLoaded(true);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const testimonials = [
    [
      {
        name: "Sarah Chen",
        role: "Content Writer",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5,
        text: "Typong has completely transformed how I write. The AI suggestions are incredibly accurate, and it feels like having a professional editor by my side.",
      },
      {
        name: "Michael Rodriguez",
        role: "Software Developer",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        text: "The code completion is mind-blowing! It understands context so well that it often suggests exactly what I was about to type. A must-have tool for developers.",
      },
      {
        name: "Emma Thompson",
        role: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5,
        text: "I love how Typong adapts to my writing style. The smart workflows feature has saved me countless hours in creating marketing copies.",
      },
    ],
    [
      {
        name: "David Kim",
        role: "Student",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 4,
        text: "The neural translation feature is a game-changer for my international studies. It captures nuances that other translation tools miss.",
      },
      {
        name: "Lisa Anderson",
        role: "Journalist",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        rating: 5,
        text: "As a journalist, accuracy and speed are crucial. Typong helps me write better stories faster, with its context-aware suggestions.",
      },
      {
        name: "James Wilson",
        role: "Business Analyst",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        rating: 5,
        text: "The email generation feature is brilliant! It captures the right tone every time, making my communication more effective.",
      },
    ],
    [
      {
        name: "Alex Foster",
        role: "UX Designer",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        rating: 5,
        text: "The contextual awareness of Typong is incredible. It helps me write better documentation and user stories with consistent terminology.",
      },
      {
        name: "Nina Patel",
        role: "Research Scientist",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
        rating: 5,
        text: "Typong's ability to understand technical terminology and suggest relevant citations has significantly improved my research workflow.",
      },
      {
        name: "Thomas Wright",
        role: "Technical Writer",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        rating: 5,
        text: "The smart templates and context-aware suggestions have made documentation a breeze. It's like having a co-writer who knows exactly what I need.",
      },
    ],
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[54px] font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 inline-block text-transparent bg-clip-text">
          What Users Say
        </h2>
        
        <div className="relative min-h-[480px]">
          {testimonials.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 testimonial-slide absolute w-full transition-all duration-1000 ease-out transform ${
                isLoaded 
                  ? slideIndex === currentSlide
                    ? 'opacity-100 translate-x-0 z-10'
                    : slideIndex < currentSlide
                    ? 'opacity-0 -translate-x-full z-0'
                    : 'opacity-0 translate-x-full z-0'
                  : ''
              }`}
            >
              {slide.map((testimonial, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl backdrop-blur-lg transform transition-all duration-500 hover:scale-105 border ${
                    darkMode 
                      ? 'bg-gray-900/50 hover:bg-gray-900/70 border-gray-800/50' 
                      : 'bg-white/50 hover:bg-white/70 border-gray-200/50'
                  } hover:border-gray-500/30 dark:hover:border-gray-600/50`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {testimonial.name}
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 ring-4 ring-blue-500/20 scale-125'
                    : `bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:scale-110`
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
