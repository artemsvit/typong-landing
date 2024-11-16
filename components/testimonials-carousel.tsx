'use client';

import { useEffect, useState } from 'react';

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

export const TestimonialsCarousel = ({ darkMode = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState(testimonials);

  // Function to get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (typeof window === 'undefined') return testimonials;
    return window.innerWidth < 768 
      ? testimonials.map(slide => [slide[0]]) 
      : testimonials;
  };

  // Initialize visible testimonials and handle resize
  useEffect(() => {
    const updateTestimonials = () => {
      const newTestimonials = getVisibleTestimonials();
      setVisibleTestimonials(newTestimonials);
      if (currentSlide >= newTestimonials.length) {
        setCurrentSlide(0);
      }
    };

    updateTestimonials();
    setIsLoaded(true);

    window.addEventListener('resize', updateTestimonials);
    return () => window.removeEventListener('resize', updateTestimonials);
  }, [currentSlide]);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % visibleTestimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [visibleTestimonials.length]);

  return (
    <div className="relative min-h-[380px]">
      {visibleTestimonials.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 testimonial-slide absolute w-full transition-all duration-1000 ease-out transform ${
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
              className={`p-5 rounded-2xl backdrop-blur-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                  : 'bg-white/50 hover:bg-white/70'
              } border ${
                darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-11 h-11 rounded-full object-cover"
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
              <div className="flex mb-2">
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
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
        {visibleTestimonials.map((_, i) => (
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
  );
};
