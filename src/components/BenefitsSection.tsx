import { useEffect, useState } from "react";
import { Clock, Calendar, Umbrella, MapPin, Coffee, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
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

    const element = document.getElementById('benefits');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const BenefitCard = ({ icon: Icon, title, value, description, delay = 0 }: any) => (
    <div 
      className={`tecdia-card card-purple p-6 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-tecdia-purple/10 rounded-full">
          <Icon className="text-tecdia-purple w-8 h-8" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-tecdia-purple mb-3">{value}</div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  return (
    <section 
      id="benefits" 
      className="min-h-screen relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-purple)) 0%, hsl(var(--tecdia-purple-dark)) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-40 h-40 bg-white/10 rounded-full float-animation"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-lg rotate-45 float-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-32 w-24 h-24 bg-white/10 rounded-full float-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Navigation breadcrumb */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center text-white/80 text-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
          {t("benefits.breadcrumb")}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="section-header">
            {t("benefits.title")}
          </h2>
          <div className="max-w-4xl mx-auto mt-8 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <h3 className="text-2xl font-bold text-tecdia-yellow mb-4">{t("benefits.balance.title")}</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              {t("benefits.balance.desc")}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <BenefitCard
            icon={Clock}
            title={t("benefits.overtime.title")}
            value="4.8 hours"
            description={t("benefits.overtime.desc")}
            delay={100}
          />

          <BenefitCard
            icon={Calendar}
            title="126 days of annual holidays"
            value="Paid acquisition rate 79.2%"
            description="We offer a full two-day weekend system (Saturday, Sunday, and public holidays), summer holidays, New Year's holidays, annual paid holidays, and special holidays for special occasions such as weddings and condolences."
            delay={200}
          />

          <BenefitCard
            icon={Umbrella}
            title="Paid acquisition rate"
            value="79.2%"
            description="We are promoting the use of paid leave and are striving to create an environment where 100% of employees can take leave. Some foreign employees even use their consecutive holidays and paid leave to go home for nearly two weeks."
            delay={300}
          />
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            className={`tecdia-card card-purple p-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-tecdia-purple/10 rounded-full">
                <MapPin className="text-tecdia-purple w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Flextime system</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We have introduced a flextime system that allows employees to adjust their working hours according to their lifestyle and work style, promoting a better work-life balance.
            </p>
          </div>

          <div 
            className={`tecdia-card card-purple p-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-tecdia-purple/10 rounded-full">
                <Coffee className="text-tecdia-purple w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Work from home system</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We support remote work options to help employees maintain productivity while balancing personal commitments and reducing commute stress.
            </p>
          </div>

          <div 
            className={`tecdia-card card-purple p-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-tecdia-purple/10 rounded-full">
                <Heart className="text-tecdia-purple w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Outside club activities</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We encourage various recreational activities and clubs to help employees build relationships outside of work and maintain a healthy work-life balance.
            </p>
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

export default BenefitsSection;