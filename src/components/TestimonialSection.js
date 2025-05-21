

"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
      author: "TODD HIGGINS",
      role: "CUSTOMER"
    },
    {
      id: 2,
      text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
      author: "TODD HIGGINS",
      role: "CUSTOMER"
    },
    {
      id: 3,
      text: "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
      author: "TODD HIGGINS",
      role: "CUSTOMER"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };

  return (
    <section className="bg-gray-100 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Title */}
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-bold text-black">
              WHAT THEY<br />
              ARE TALKING<br />
              ABOUT?
            </h2>
            <p className="text-gray-600 mt-4 text-sm">
              Trusted by more than 4,200 customers
            </p>

            <div className="flex items-center gap-2 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="flex flex-col md:flex-row gap-6">
              {testimonials.slice(activeSlide, activeSlide + 2).map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border border-gray-200 rounded pt-14 pb-16 px-6 shadow-sm flex-1"

                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-blue-600 text-sm font-medium">{testimonial.author}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}