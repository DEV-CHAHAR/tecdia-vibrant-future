import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-tecdia-teal">TEC</span>
                <span className="text-tecdia-orange">DIA</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              {language === 'JP' && 'テクダイヤ株式会社'}
              {language === 'JP' && <br />}
              Tecdia Corporation
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.company.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.home")}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.about")}</a></li>
              <li><a href="#numbers" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.numbers")}</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.benefits")}</a></li>
              <li><a href="#employees" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.employees")}</a></li>
              <li><a href="#message" className="text-gray-400 hover:text-tecdia-teal transition-colors">{t("nav.message")}</a></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.business")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Ceramic Application Technology</li>
              <li className="text-gray-400">5G & Data Centers</li>
              <li className="text-gray-400">Space Development</li>
              <li className="text-gray-400">3D Printing Technology</li>
              <li className="text-gray-400">Smartphones & IoT</li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.join")}</h3>
            <Button 
              className="btn-entry w-full mb-6"
              onClick={() => window.open('https://www.tecdia.com/recruit/', '_blank')}
            >
              {t("nav.entry")}
            </Button>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>careers@tecdia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+81-3-XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Tokyo, Japan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-tecdia-teal transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tecdia-teal transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tecdia-teal transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            {t("footer.rights")}
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.terms")}</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{t("footer.cookies")}</a>
          </div>
        </div>

        {/* Work Hard Play Hard Motto */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <div className="text-2xl font-bold">
            <span className="text-tecdia-orange">Work Hard,</span>
            <span className="text-tecdia-teal"> Play Hard</span>
          </div>
          {language === 'JP' && (
            <p className="text-gray-400 text-sm mt-2">
              {t("footer.motto")}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;