import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-teal)) 0%, hsl(var(--tecdia-teal-dark)) 100%)'
      }}
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 geometric-bg opacity-30"></div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white/10 rounded-lg rotate-45 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-white/10 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-12 float-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Employee Photos Floating - Inspired by Original Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-20 w-24 h-24 bg-white rounded-xl shadow-lg float-animation overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-tecdia-orange to-tecdia-orange-dark"></div>
        </div>
        <div className="absolute top-32 right-40 w-20 h-20 bg-white rounded-full shadow-lg float-animation overflow-hidden" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-tecdia-purple to-tecdia-purple-dark"></div>
        </div>
        <div className="absolute top-48 right-12 w-28 h-20 bg-white rounded-lg shadow-lg float-animation overflow-hidden" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full bg-gradient-to-br from-tecdia-green to-tecdia-green-dark"></div>
        </div>
        <div className="absolute bottom-40 right-32 w-22 h-22 bg-white rounded-xl shadow-lg float-animation overflow-hidden" style={{ animationDelay: '2.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-tecdia-orange-light to-tecdia-orange"></div>
        </div>
        <div className="absolute bottom-20 right-16 w-24 h-32 bg-white rounded-lg shadow-lg float-animation overflow-hidden" style={{ animationDelay: '4.5s' }}>
          <div className="w-full h-full bg-gradient-to-br from-tecdia-purple-light to-tecdia-purple"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            あなたの<br />
            <span className="text-tecdia-yellow">「こうしましょう。」</span><br />
            が世界を変える
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
            常識に無い発想とチームパワーで世界を驚かせる。
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-entry text-lg px-8 py-4">
              エントリー
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-tecdia-teal text-lg px-8 py-4"
            >
              会社について
            </Button>
          </div>
        </div>

        {/* News Banner */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-tecdia-yellow font-bold text-lg mb-2">News</h3>
                <p className="text-white/90">
                  We are now accepting applications for new graduates in the final sprint to apply for 2026!
                </p>
                <p className="text-white/70 text-sm mt-2">
                  If you are someone who has not yet found a company that suits you, or who has not yet found a job that satisfies you, there is still time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;