import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen relative overflow-hidden flex items-center py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-orange)) 0%, hsl(var(--tecdia-orange-dark)) 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-20 w-24 h-24 bg-white/10 rounded-full"></div>
      </div>

      {/* Navigation breadcrumb */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center text-white/80 text-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          About us
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                こうしましょう。
              </h2>
              <div className="text-6xl md:text-8xl font-bold text-white/20 mb-6">
                TECDIA
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <Card className="card-orange p-8 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-tecdia-orange-dark mb-6">
                What is Tecdia?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are a manufacturer that supplies products necessary for the future: from 5G, data centers, and space development to smartphones and 3D printing. With the motto "Work Hard, Play Hard," we are a company that pursues fulfillment not only at work but also in private life.
              </p>
              <Button 
                variant="outline" 
                className="border-tecdia-orange text-tecdia-orange hover:bg-tecdia-orange hover:text-white"
              >
                Company Profile →
              </Button>
            </Card>

            {/* Business Areas */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-tecdia-orange-dark mb-6 text-center">
                テクダイヤの事業内容
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-tecdia-orange/10 rounded-lg p-4 text-center">
                  <div className="text-tecdia-orange font-bold text-lg mb-2">
                    Ceramic Application Technology
                  </div>
                  <p className="text-gray-600 text-sm">
                    Advanced ceramic solutions for high-tech applications
                  </p>
                </div>
                
                <div className="bg-tecdia-orange/10 rounded-lg p-4 text-center">
                  <div className="text-tecdia-orange font-bold text-lg mb-2">
                    5G & Data Centers
                  </div>
                  <p className="text-gray-600 text-sm">
                    Critical components for next-generation infrastructure
                  </p>
                </div>
                
                <div className="bg-tecdia-orange/10 rounded-lg p-4 text-center">
                  <div className="text-tecdia-orange font-bold text-lg mb-2">
                    Space Development
                  </div>
                  <p className="text-gray-600 text-sm">
                    Precision manufacturing for aerospace applications
                  </p>
                </div>
                
                <div className="bg-tecdia-orange/10 rounded-lg p-4 text-center">
                  <div className="text-tecdia-orange font-bold text-lg mb-2">
                    3D Printing Technology
                  </div>
                  <p className="text-gray-600 text-sm">
                    Innovative additive manufacturing solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ENTRY Button - Floating */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="btn-entry">
          ENTRY
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;