"use client"
import { useState } from "react";

export default function BusinessGrowthSection() {
  const [activeTab, setActiveTab] = useState("growth");

  const tabs = [
    { id: "growth", label: "BUSINESS GROWTH" },
    { id: "planning", label: "STRATEGIC PLANNING" },
    { id: "analysis", label: "MARKET ANALYSIS" },
  ];

  return (
    <section className="text-white font-jost relative">
      <div className="bg-[#081835] py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-black p-4 rounded">
                <img src="/images/brainstorming.png" alt="Consulting Icon" className="h-10 w-10" />
              </div>
              <div className="text-[40px] font-bold leading-none mt-4 mb-6">420</div>
              <p className="mt-2 text-[14px] tracking-wide uppercase">Consulting Solutions</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 md:top-80 top-120 w-full z-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 text-center text-sm font-bold shadow-lg overflow-hidden rounded">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`md:py-14 py-12 transition-all ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 border-b-4 border-blue-600 shadow-md"
                  : "bg-[#f9f9f9] text-black border-b-4 border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
<div className="bg-white text-black pt-28 pb-14 px-6 lg:mt-20">
  <div className="max-w-5xl  grid md:grid-cols-2 gap-10 items-start lg:ml-20">
    <div className="space-y-6 lg:pl-6 border-r-3 border-gray-200 ">
      <div className="flex items-start gap-4">
        <div className="bg-[#e8f1fd] p-3 rounded-full flex items-center justify-center">
          <img src="/images/check-icon.png" alt="check icon" className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-bold text-base mb-1 ">HIGHEST SUCCESS RATES</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-[#e8f1fd] p-3 rounded-full flex items-center justify-center">
          <img src="/images/check-icon.png" alt="check icon" className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h4 className="font-bold text-base mb-1">WE BUILD EXPERIENCE</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.
          </p>
        </div>
      </div>
    </div>

    <div>
      <p className="text-sm text-gray-600 mb-6 leading-6">
        There are many variations of passages of lorem ipsum available, but the majority have suffered alteration
        in some form injected humour or randomised words which don't look believable.
      </p>
      <ul className="text-sm text-gray-700 space-y-3">
        <li className="before:content-['—'] before:mr-2">If you are going to use a passage</li>
        <li className="before:content-['—'] before:mr-2">Lorem Ipsum you need to be sure</li>
        <li className="before:content-['—'] before:mr-2">There isn't anything embarrassing</li>
      </ul>
    </div>
  </div>
</div>

    </section>
  );
}
