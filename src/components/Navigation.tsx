import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("JP");

  const toggleLanguage = () => {
    setLanguage(language === "JP" ? "EN" : "JP");
  };

  const menuItems = [
    { label: "Home", href: "#home", jp: "ホーム" },
    { label: "About", href: "#about", jp: "企業情報" },
    { label: "Numbers", href: "#numbers", jp: "数字で見る" },
    { label: "Benefits", href: "#benefits", jp: "福利厚生" },
    { label: "Employees", href: "#employees", jp: "社員の声" },
    { label: "Message", href: "#message", jp: "社長メッセージ" },
    { label: "Careers", href: "#careers", jp: "採用情報" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-tecdia-teal">TEC</span>
              <span className="text-tecdia-orange">DIA</span>
            </div>
            <span className="text-sm text-gray-600">テクダイヤ株式会社</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-tecdia-teal transition-colors duration-300 font-medium"
              >
                {language === "JP" ? item.jp : item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-1 border-tecdia-teal text-tecdia-teal hover:bg-tecdia-teal hover:text-white"
            >
              <Globe size={16} />
              <span>{language}</span>
            </Button>

            {/* ENTRY Button */}
            <Button className="btn-entry hidden md:block">
              {language === "JP" ? "エントリー" : "ENTRY"}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 hover:text-tecdia-teal transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === "JP" ? item.jp : item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="w-full border-tecdia-teal text-tecdia-teal hover:bg-tecdia-teal hover:text-white"
                >
                  <Globe size={16} className="mr-2" />
                  {language === "JP" ? "English" : "日本語"}
                </Button>
                <Button className="btn-entry w-full">
                  {language === "JP" ? "エントリー" : "ENTRY"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;