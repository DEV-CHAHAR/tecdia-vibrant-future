import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Play, ChevronRight } from "lucide-react";

const EmployeesSection = () => {
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

    const element = document.getElementById('employees');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const EmployeeCard = ({ 
    name, 
    title, 
    quote, 
    department, 
    joinYear, 
    education, 
    gradientClass, 
    delay = 0 
  }: any) => (
    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
         style={{ transitionDelay: `${delay}ms` }}>
      <Card className="card-orange overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <div className="relative">
          {/* Employee Photo Placeholder with Geometric Frame */}
          <div className="relative h-80 overflow-hidden">
            <div className={`w-full h-full ${gradientClass}`}></div>
            
            {/* Geometric Frame Overlay */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white/50 rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-tecdia-teal/30 rotate-12"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/40 rounded-full"></div>
            </div>

            {/* Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tecdia-teal to-transparent p-6">
              <div className="bg-tecdia-teal text-white px-4 py-2 rounded-lg inline-block transform -rotate-2 shadow-lg">
                <p className="font-bold text-sm">{quote}</p>
              </div>
            </div>
          </div>

          {/* Employee Info */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tecdia-orange/10 rounded-lg p-3">
                <div className="text-tecdia-orange font-bold text-sm mb-1">{department}</div>
                <div className="text-gray-600 text-xs">{name}</div>
              </div>
              <div className="bg-tecdia-orange/10 rounded-lg p-3">
                <div className="text-tecdia-orange font-bold text-sm mb-1">Joined in {joinYear}</div>
                <div className="text-gray-600 text-xs">{education}</div>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full border-tecdia-orange text-tecdia-orange hover:bg-tecdia-orange hover:text-white group"
            >
              <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch the interview
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section 
      id="employees" 
      className="min-h-screen relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-orange)) 0%, hsl(var(--tecdia-orange-dark)) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-white/10 rounded-lg rotate-45 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation breadcrumb */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center text-white/80 text-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          Employee introduction
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="section-header">
            {t("employees.title")}
          </h2>
        </div>

        {/* Employee Cards */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Employee 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <EmployeeCard
              name="Planning Department Employee"
              department="Planning Department"
              quote="夢は、グローバルな視点でチームを率いる営業拠点長"
              joinYear="2021"
              education="Graduated from the Department of Asian Languages"
              gradientClass="bg-gradient-to-br from-tecdia-purple to-tecdia-purple-dark"
              delay={100}
            />
            
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                 style={{ transitionDelay: '300ms' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-tecdia-orange mb-4">
                  Global Perspective Leader
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "My dream is to become a sales base manager who leads the team from a global perspective. 
                  At Tecdia, I've found an environment where I can grow professionally while contributing to 
                  innovative projects that impact the world."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tecdia-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">PD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Planning Department</div>
                    <div className="text-sm text-gray-600">Team Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Employee 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`lg:order-2 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                 style={{ transitionDelay: '400ms' }}>
              <EmployeeCard
                name="Technology and Quality Assurance"
                department="Technology and Quality Assurance Department"
                quote="私にしか作れない新製品でお客様と仲間を喜ばせたい"
                joinYear="2022"
                education="Graduated from the School of Science with a degree in Physics"
                gradientClass="bg-gradient-to-br from-tecdia-green to-tecdia-green-dark"
                delay={400}
              />
            </div>
            
            <div className={`lg:order-1 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
                 style={{ transitionDelay: '600ms' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8">
                <div className="bg-tecdia-orange/10 text-tecdia-orange px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  お客さまの声から、未だ見ぬ新製品を生み出したい
                </div>
                <h3 className="text-2xl font-bold text-tecdia-orange mb-4">
                  Innovation Through Customer Voice
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  "I want to create new products that only I can make to please customers and colleagues. 
                  Working in the Technology and Quality Assurance Department, I'm constantly inspired by 
                  customer feedback to develop solutions that haven't been seen before."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tecdia-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">QA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Technology & Quality Assurance</div>
                    <div className="text-sm text-gray-600">Senior Engineer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
             style={{ transitionDelay: '800ms' }}>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-tecdia-orange text-lg px-8 py-4"
          >
            See other employees
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
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

export default EmployeesSection;