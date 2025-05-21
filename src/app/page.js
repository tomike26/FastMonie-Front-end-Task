import ExperienceSection from "../components/ExperienceSection"
import Navbar from '../components/Navbar';
import Image from 'next/image';
import QASection from '../components/Faq';
import TestimonialSection from '../components/TestimonialSection';
import BusinessGrowthSection from '../components/BusinessGrowthSection';
import Footer from '../components/footer';



const items = [
  {
    title: "WEALTH MANAGEMENT",
    description: "Read More",
    icon: "/images/bitbucket.svg",
  },
  {
    title: "WEALTH MANAGEMENT",
    description: "Read More",
    icon: "/images/bitbucket.svg",
  },
  {
    title: "WEALTH MANAGEMENT",
    description: "Read More",
    icon: "/images/bitbucket.svg"
  },
];


const Home = () => {

  return (
    <>
      <Navbar />
      <section className="bg-[#3b3b3b] text-white px-6 sm:px-10 md:px-16 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-white/60 mb-6 sm:mb-8">
            WELCOME TO CODESHAPER
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8">
            <span className="block lg:hidden">CONSULTING FOR EVERY<br />BUSINESS</span>
            <span className="hidden lg:inline">
              CONSULTING<br />FOR EVERY<br />BUSINESS
            </span>
          </h1>
          <button className="bg-[#3E6FF4] hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-4 tracking-wider uppercase">
            Discover More
          </button>
        </div>
      </section>
      <ExperienceSection
        heading="REAL-WORLD EXPERIENCE"
        subheading="The best business consulting firm you can count on!"
        items={items}
      />
      <section className="bg-white text-gray-900 py-20 px-6 md:mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="flex justify-center md:justify-start">
            <div className="w-24 h-24 bg-blue-600 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 leading-tight">
              We're Leading in<br />The Market
            </h2>
            <p className="text-gray-600 mb-4 text-[18px] leading-relaxed">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-blue-600 font-normal text-[20px]">
              We have 35+ years of experience. We offer
            </p>
            <p className="text-blue-600 font-normal text-[20px] mb-10">marketing and consulting services</p>

            <div className="space-y-4 mb-6">
              <div>
                <div className="w-full bg-gray-200 rounded">
                  <div className="bg-blue-600 h-4 w-[88%] rounded-xl mb-2"></div>
                </div>
                <label className="block text-sm font-medium mb-1">Consulting</label>
              </div>
              <div>
                <div className="w-full bg-gray-200 rounded">
                  <div className="bg-blue-600 h-4 w-[68%] rounded-xl mb-2"></div>
                </div>
                <label className="block text-sm font-medium mb-1">Advices</label>
              </div>
            </div>

            <div className="flex items-center gap-3 py-3">
              <div className="bg-[#EBF1FF] p-4 rounded-md">
                <Image
                  src="/images/phone-call.png"
                  alt="Phone icon"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-[20px] text-gray-900">
                Have any question? Give us a call <br />
                <span className="font-bold text-[18px]">+92 666 888 0000</span>
              </p>
            </div>
          </div>
        </div>
        <section className="w-full  py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-stretch">
              <div className="bg-white shadow-lg p-12 lg:p-22 md:w-1/2 w-full">
                <div className="flex items-start gap-4">
                  <span className="text-[#2463EB] text-xl font-bold bg-[#E8EEFB] px-4 py-4 rounded-md">
                    01
                  </span>
                  <div>
                    <h3 className="md:text-lg font-bold text-gray-900 mb-2">
                      GET PROFESSIONAL ADVICE
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                      There are many variations of available but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-lg  p-12 lg:p-22 md:w-1/2 w-full">
                <div className="flex items-start gap-4">
                  <span className="text-[#2463EB] text-xl font-bold bg-[#E8EEFB] px-4 py-4 rounded-md">
                    02
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      TRUSTED & PROFESSIONAL
                    </h3>
                    <p className="text-gray-600 text-sm">
                      There are many variations of available but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-gray-100 py-16 px-6  relative z-0">
        <h2 className="lg:text-[50px] font-bold text-center uppercase mb-4">NEW CASE STUDIES</h2>
        <p className="text-gray-600 mb-8 text-[18px] text-center">We help our clients create their Success.</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#808080] shadow-md p-16 flex flex-col  lg:h-[450px] justify-center"
            >
              <div className="mb-4 mt-40">
                <Image
                  src="/images/automobile.png"
                  alt="Automobile icon"
                  width={64}
                  height={64}
                />
              </div>

              <p className="text-[14px] font-semibold uppercase text-white mb-2">
                THOUGHT LEADERSHIP
              </p>
              <h3 className="text-[24px] font-bold uppercase text-white leading-tight">
                BUSINESSES GROWTH
              </h3>
            </div>
          ))}
        </div>
      </section>
 <section className="bg-[#0F0D1D] text-white py-20 px-4 text-center md:px-20 lg:px-40">
  {/* Line 1 & 2 combined for small screen, split on md+ */}
  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-2">
    <span className="block md:hidden">
      MISSION IS TO PROTECT YOUR BUSINESSES &
    </span>
    <span className="hidden md:block">MISSION IS TO PROTECT</span>
    <span className="hidden md:block">YOUR BUSINESSES &</span>
  </div>

  {/* Line 3 - always on its own line */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-6">
    MUCH MORE
  </h2>

  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-4 text-sm uppercase tracking-wide">
    Discover More
  </button>
</section>



      <QASection />
      <TestimonialSection />
      <BusinessGrowthSection />
      <Footer />

    </>
  )
}

export default Home;