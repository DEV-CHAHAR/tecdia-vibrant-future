import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PresidentSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('message');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="message" 
      className="min-h-screen relative overflow-hidden flex items-center py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-teal)) 0%, hsl(var(--tecdia-teal-dark)) 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-20"></div>

      {/* Navigation breadcrumb */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center text-white/80 text-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          {t("president.breadcrumb")}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - President Image and Frame */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="relative">
              {/* Geometric Frame */}
              <div className="relative w-full max-w-md mx-auto">
                {/* President Photo Placeholder with Triangular Frame */}
                <div className="relative">
                  <div 
                    className="w-80 h-80 mx-auto"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      background: 'linear-gradient(135deg, hsl(var(--tecdia-orange)) 0%, hsl(var(--tecdia-orange-dark)) 100%)'
                    }}
                  >
                    {/* President image would go here */}
                    <div className="w-full h-full flex items-end justify-center pb-8">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">K</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative stripes on triangle */}
                  <div 
                    className="absolute inset-0 w-80 h-80 mx-auto opacity-30"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 2px, transparent 2px, transparent 8px)'
                    }}
                  ></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/30 rounded-full float-animation"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-lg rotate-45 float-animation" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

          {/* Right - Message Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <div className="inline-block border-2 border-white px-6 py-3 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-white">{t("president.title")}</h2>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {t("president.main.message")}
              </h3>
              
              <div className="text-right mb-4">
                <div className="text-white/80 text-sm">{t("president.title.role")}</div>
                <div className="text-white font-bold text-xl">{t("president.name")}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                  <p>
                    {t("president.message1")}
                  </p>
                  <p>
                    {t("president.message2")}
                  </p>
                  <p>
                    {t("president.message3")}
                  </p>
                  <p>
                    {t("president.message4")}
                  </p>
                </div>
              </div>

              {/* Speech Bubble CTA */}
              <div className="relative mt-8">
                <a 
                  href="#" 
                  className="block bg-red-500 text-white p-4 rounded-2xl font-bold text-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
                  style={{
                    borderRadius: '20px 20px 5px 20px'
                  }}
                >
                  {t("president.cta.speech")}
                  {/* Speech bubble tail */}
                  <div className="absolute bottom-0 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-500"></div>
                </a>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  className="btn-entry text-lg px-8 py-4"
                  onClick={() => window.open('https://www.tecdia.com/recruit/', '_blank')}
                >
                  {t("president.cta.entry")}
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white hover:bg-white hover:text-tecdia-teal text-lg px-8 py-4 flex items-center space-x-2"
                >
                  <Play size={16} />
                  <span>{t("president.cta.interview")}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ENTRY Button - Floating */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="btn-entry">
          ENTRY
        </button>
      </div>
    </section>
  );
};

export default PresidentSection;