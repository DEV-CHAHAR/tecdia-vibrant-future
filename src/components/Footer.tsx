import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
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
              テクダイヤ株式会社<br />
              Tecdia Corporation
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              常識に無い発想とチームパワーで世界を驚かせる。
              Surprising the world with unconventional ideas and team power.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-tecdia-teal transition-colors">Home / ホーム</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-tecdia-teal transition-colors">About / 企業情報</a></li>
              <li><a href="#numbers" className="text-gray-400 hover:text-tecdia-teal transition-colors">Numbers / 数字で見る</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-tecdia-teal transition-colors">Benefits / 福利厚生</a></li>
              <li><a href="#employees" className="text-gray-400 hover:text-tecdia-teal transition-colors">Employees / 社員の声</a></li>
              <li><a href="#message" className="text-gray-400 hover:text-tecdia-teal transition-colors">Message / 社長メッセージ</a></li>
            </ul>
          </div>

          {/* Business Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Areas</h3>
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
            <h3 className="text-lg font-semibold mb-4">Join Our Team</h3>
            <Button className="btn-entry w-full mb-6">
              エントリー / ENTRY
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
            © 2025 Tecdia Corporation. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Work Hard Play Hard Motto */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <div className="text-2xl font-bold">
            <span className="text-tecdia-orange">Work Hard,</span>
            <span className="text-tecdia-teal"> Play Hard</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            常識に無い発想とチームパワーで世界を驚かせる
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;