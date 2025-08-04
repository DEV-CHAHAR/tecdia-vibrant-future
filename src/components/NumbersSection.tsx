import { useEffect, useState } from "react";
import { Users, Calendar, Clock, TrendingUp, Award, Heart } from "lucide-react";

const NumbersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    avgAge: 0,
    overtime: 0,
    employment: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('numbers');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 2000;
    const targets = { years: 49, avgAge: 38, overtime: 4.8, employment: 12 };
    
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedNumbers({
        years: Math.floor(targets.years * easeOut),
        avgAge: Math.floor(targets.avgAge * easeOut),
        overtime: Number((targets.overtime * easeOut).toFixed(1)),
        employment: Math.floor(targets.employment * easeOut)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  };

  const StatCard = ({ icon: Icon, title, value, unit, subtitle, delay = 0 }: any) => (
    <div 
      className={`tecdia-card card-green card-bounce p-6 text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay / 1000}s` }}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-tecdia-green/20 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <Icon className="text-tecdia-green w-8 h-8" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-tecdia-green mb-2 animate-count-up">
        {value}
        <span className="text-2xl ml-1">{unit}</span>
      </div>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );

  const AgeDistributionCard = ({ delay = 0 }) => (
    <div 
      className={`tecdia-card card-green card-bounce p-6 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms`, animationDelay: `${delay / 1000}s` }}
    >
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Average age</h3>
      
      {/* Pie Chart Visual */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
        <div 
          className="absolute inset-0 rounded-full border-8 border-tecdia-green"
          style={{ 
            clipPath: 'polygon(50% 50%, 50% 0%, 82% 18%, 50% 50%)',
            transform: 'rotate(0deg)'
          }}
        ></div>
        <div 
          className="absolute inset-0 rounded-full border-8 border-tecdia-green-light"
          style={{ 
            clipPath: 'polygon(50% 50%, 82% 18%, 100% 50%, 50% 50%)',
            transform: 'rotate(0deg)'
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-tecdia-green">
              {animatedNumbers.avgAge}
            </div>
            <div className="text-xs text-gray-600">average</div>
          </div>
        </div>
      </div>

      {/* Age breakdown */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">20代</span>
          <span className="text-sm font-semibold text-tecdia-green">32%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">30代</span>
          <span className="text-sm font-semibold text-tecdia-green">20%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">40代</span>
          <span className="text-sm font-semibold text-tecdia-green">24%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">50代+</span>
          <span className="text-sm font-semibold text-tecdia-green">24%</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600">20代の部門長もいる、実力主義の会社です！</p>
      </div>
    </div>
  );

  return (
    <section 
      id="numbers" 
      className="min-h-screen relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--tecdia-green)) 0%, hsl(var(--tecdia-green-dark)) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full float-animation"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/10 rounded-lg rotate-45 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="section-header">
            数字で見るテクダイヤ
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            The appeal of Tecdia is revealed through figures related to various initiatives and achievements.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Years since establishment */}
          <div className="lg:col-span-1">
            <StatCard
              icon={Calendar}
              title="Years since establishment"
              value={animatedNumbers.years}
              unit="years"
              subtitle="1976 - 2025"
              delay={100}
            />
          </div>

          {/* Male to female ratio */}
          <div className="lg:col-span-1">
            <div 
              className={`tecdia-card card-green card-bounce p-6 text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '200ms', animationDelay: '0.2s' }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-tecdia-green/20 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Users className="text-tecdia-green w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Male to female ratio</h3>
              <div className="flex justify-center items-center space-x-8 mb-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-tecdia-green mb-1">5</div>
                  <div className="text-sm text-gray-600">男性</div>
                </div>
                <div className="text-2xl text-gray-400">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-tecdia-green mb-1">5</div>
                  <div className="text-sm text-gray-600">女性</div>
                </div>
              </div>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-8 bg-tecdia-green rounded"></div>
                ))}
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-8 bg-tecdia-green-light rounded"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Average length of employment */}
          <div className="lg:col-span-1">
            <StatCard
              icon={TrendingUp}
              title="Average length of employment"
              value={animatedNumbers.employment}
              unit="years"
              delay={300}
            />
          </div>

          {/* Average age - Special card */}
          <div className="lg:col-span-1">
            <AgeDistributionCard delay={400} />
          </div>

          {/* Average monthly overtime */}
          <div className="lg:col-span-1">
            <StatCard
              icon={Clock}
              title="Average monthly overtime hours"
              value={animatedNumbers.overtime}
              unit="hours"
              delay={500}
            />
          </div>

          {/* Work culture highlight */}
          <div className="lg:col-span-1">
            <div 
              className={`tecdia-card card-green card-bounce p-6 text-center transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '600ms', animationDelay: '0.6s' }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-tecdia-green/20 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Heart className="text-tecdia-green w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Work-Life Balance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Satisfaction Rate</span>
                  <span className="text-lg font-bold text-tecdia-green">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Retention Rate</span>
                  <span className="text-lg font-bold text-tecdia-green">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Employee Growth</span>
                  <span className="text-lg font-bold text-tecdia-green">+15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ENTRY Button - Floating */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          className="btn-entry"
          onClick={() => window.open('https://www.tecdia.com/recruit/', '_blank')}
        >
          ENTRY
        </button>
      </div>
    </section>
  );
};

export default NumbersSection;