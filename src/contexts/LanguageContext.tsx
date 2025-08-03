import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'JP' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  // Navigation
  'nav.home': { JP: 'ホーム', EN: 'Home' },
  'nav.about': { JP: '企業情報', EN: 'About' },
  'nav.numbers': { JP: '数字で見る', EN: 'Numbers' },
  'nav.benefits': { JP: '福利厚生', EN: 'Benefits' },
  'nav.employees': { JP: '社員の声', EN: 'Employees' },
  'nav.message': { JP: '社長メッセージ', EN: 'Message' },
  'nav.careers': { JP: '採用情報', EN: 'Careers' },
  'nav.entry': { JP: 'エントリー', EN: 'ENTRY' },

  // Hero Section
  'hero.title1': { JP: 'あなたの', EN: 'Your' },
  'hero.title2': { JP: '「こうしましょう。」', EN: '"Let\'s do this."' },
  'hero.title3': { JP: 'が世界を変える', EN: 'will change the world' },
  'hero.subtitle': { JP: '常識に無い発想とチームパワーで世界を驚かせる。', EN: 'Surprising the world with unconventional ideas and team power.' },
  'hero.cta.entry': { JP: 'エントリー', EN: 'ENTRY' },
  'hero.cta.about': { JP: '会社について', EN: 'About Company' },
  'hero.news.title': { JP: 'News', EN: 'News' },
  'hero.news.content': { JP: '2026年度新卒採用の最終スプリントで応募受付中！', EN: 'We are now accepting applications for new graduates in the final sprint to apply for 2026!' },
  'hero.news.subtitle': { JP: '自分に合う会社がまだ見つからない方、満足する仕事がまだ見つからない方、まだ間に合います！', EN: 'If you are someone who has not yet found a company that suits you, or who has not yet found a job that satisfies you, there is still time!' },

  // About Section
  'about.breadcrumb': { JP: '企業情報', EN: 'About us' },
  'about.catchphrase': { JP: 'こうしましょう。', EN: 'Let\'s do this.' },
  'about.title': { JP: 'What is Tecdia?', EN: 'What is Tecdia?' },
  'about.description': { JP: '私たちは未来に必要な製品を供給するメーカーです：5G、データセンター、宇宙開発からスマートフォン、3Dプリンティングまで。「Work Hard, Play Hard」をモットーに、仕事だけでなく私生活でも充実を追求する会社です。', EN: 'We are a manufacturer that supplies products necessary for the future: from 5G, data centers, and space development to smartphones and 3D printing. With the motto "Work Hard, Play Hard," we are a company that pursues fulfillment not only at work but also in private life.' },
  'about.profile.button': { JP: '会社概要 →', EN: 'Company Profile →' },
  'about.business.title': { JP: 'テクダイヤの事業内容', EN: 'Tecdia\'s Business Areas' },
  'about.business.ceramic': { JP: 'セラミック応用技術', EN: 'Ceramic Application Technology' },
  'about.business.ceramic.desc': { JP: 'ハイテク用途向けの先進セラミックソリューション', EN: 'Advanced ceramic solutions for high-tech applications' },
  'about.business.5g': { JP: '5G・データセンター', EN: '5G & Data Centers' },
  'about.business.5g.desc': { JP: '次世代インフラの重要部品', EN: 'Critical components for next-generation infrastructure' },
  'about.business.space': { JP: '宇宙開発', EN: 'Space Development' },
  'about.business.space.desc': { JP: '航空宇宙用精密製造', EN: 'Precision manufacturing for aerospace applications' },
  'about.business.3d': { JP: '3Dプリンティング技術', EN: '3D Printing Technology' },
  'about.business.3d.desc': { JP: '革新的な付加製造ソリューション', EN: 'Innovative additive manufacturing solutions' },

  // Numbers Section
  'numbers.title': { JP: '数字で見るテクダイヤ', EN: 'Tecdia by the Numbers' },
  'numbers.subtitle': { JP: 'さまざまな取り組みや実績に関する数字を通じて、テクダイヤの魅力をお伝えします。', EN: 'The appeal of Tecdia is revealed through figures related to various initiatives and achievements.' },
  'numbers.years': { JP: '設立からの年数', EN: 'Years since establishment' },
  'numbers.ratio': { JP: '男女比', EN: 'Male to female ratio' },
  'numbers.employment': { JP: '平均勤続年数', EN: 'Average length of employment' },
  'numbers.age': { JP: '平均年齢', EN: 'Average age' },
  'numbers.overtime': { JP: '月平均残業時間', EN: 'Average monthly overtime hours' },
  'numbers.balance': { JP: 'ワークライフバランス', EN: 'Work-Life Balance' },
  'numbers.satisfaction': { JP: '満足度', EN: 'Satisfaction Rate' },
  'numbers.retention': { JP: '定着率', EN: 'Retention Rate' },
  'numbers.growth': { JP: '従業員成長', EN: 'Employee Growth' },
  'numbers.age.note': { JP: '20代の部門長もいる、実力主義の会社です！', EN: 'We have department managers in their 20s - a meritocratic company!' },

  // Benefits Section
  'benefits.breadcrumb': { JP: '社員制度・福利厚生', EN: 'Employee system and benefits' },
  'benefits.title': { JP: '◆ 社員制度や福利厚生 ◆', EN: '◆ Employee Benefits & Welfare ◆' },
  'benefits.balance.title': { JP: 'ワークライフバランス', EN: 'Work-life balance' },
  'benefits.balance.desc': { JP: '会社は従業員の人生を豊かにする場所でなければなりません。そのため、私たちは従業員が仕事だけでなく、家族や趣味を含む私生活も大切にしてほしいと考えています。従業員がワークライフバランスを実現するための意識向上活動やさまざまな制度の確立を積極的に推進しています。', EN: 'A company must be a place that enriches and enriches the lives of its employees. Therefore, we want employees to not only value their work, but also their private lives, including their families and hobbies. We are actively promoting awareness-raising activities and the establishment of various systems to help employees achieve a work-life balance.' },
  'benefits.overtime.title': { JP: '月残業時間', EN: 'Monthly overtime' },
  'benefits.overtime.desc': { JP: '残業時間の削減に取り組み、従業員の定時退社を奨励しています。私たちの企業文化では、決められた時間内で効率的に働き、高い成果を上げる従業員を評価しています。', EN: 'We are working to reduce overtime and encourage employees to leave work on time. Our corporate culture values employees who can work efficiently and achieve high results within the allotted time.' },
  'benefits.holidays.title': { JP: '年間休日126日', EN: '126 days of annual holidays' },
  'benefits.holidays.desc': { JP: '完全週休二日制（土・日・祝日）、夏季休暇、年末年始休暇、年次有給休暇、結婚式や弔事などの特別な機会のための特別休暇を提供しています。', EN: 'We offer a full two-day weekend system (Saturday, Sunday, and public holidays), summer holidays, New Year\'s holidays, annual paid holidays, and special holidays for special occasions such as weddings and condolences.' },
  'benefits.paid.title': { JP: '有給取得率', EN: 'Paid acquisition rate' },
  'benefits.paid.desc': { JP: '有給休暇の利用を推進し、従業員の100%が休暇を取得できる環境づくりに努めています。外国人従業員の中には、連続休暇と有給休暇を利用して約2週間帰国する方もいます。', EN: 'We are promoting the use of paid leave and are striving to create an environment where 100% of employees can take leave. Some foreign employees even use their consecutive holidays and paid leave to go home for nearly two weeks.' },
  'benefits.flextime.title': { JP: 'フレックスタイム制', EN: 'Flextime system' },
  'benefits.flextime.desc': { JP: 'ライフスタイルや働き方に応じて勤務時間を調整できるフレックスタイム制を導入し、より良いワークライフバランスを推進しています。', EN: 'We have introduced a flextime system that allows employees to adjust their working hours according to their lifestyle and work style, promoting a better work-life balance.' },
  'benefits.remote.title': { JP: '在宅勤務制度', EN: 'Work from home system' },
  'benefits.remote.desc': { JP: '従業員が個人的な責任とのバランスを保ちながら生産性を維持し、通勤ストレスを軽減するためのリモートワークオプションをサポートしています。', EN: 'We support remote work options to help employees maintain productivity while balancing personal commitments and reducing commute stress.' },
  'benefits.activities.title': { JP: 'クラブ活動', EN: 'Outside club activities' },
  'benefits.activities.desc': { JP: '従業員が仕事以外での関係を築き、健康的なワークライフバランスを維持するために、さまざまなレクリエーション活動やクラブを奨励しています。', EN: 'We encourage various recreational activities and clubs to help employees build relationships outside of work and maintain a healthy work-life balance.' },

  // Employees Section
  'employees.breadcrumb': { JP: '社員紹介', EN: 'Employee introduction' },
  'employees.title': { JP: '＼ テクダイヤで働く人の声 ／', EN: '＼ Voices of People Working at Tecdia ／' },
  'employees.planning.quote': { JP: '夢は、グローバルな視点でチームを率いる営業拠点長', EN: 'My dream is to become a sales base manager who leads the team from a global perspective' },
  'employees.planning.title': { JP: 'グローバルな視点のリーダー', EN: 'Global Perspective Leader' },
  'employees.planning.desc': { JP: '「夢は、グローバルな視点でチームを率いる営業拠点長です。テクダイヤでは、世界に影響を与える革新的なプロジェクトに貢献しながら、専門的に成長できる環境を見つけました。」', EN: '"My dream is to become a sales base manager who leads the team from a global perspective. At Tecdia, I\'ve found an environment where I can grow professionally while contributing to innovative projects that impact the world."' },
  'employees.qa.quote': { JP: '私にしか作れない新製品でお客様と仲間を喜ばせたい', EN: 'I want to create new products that only I can make to please customers and colleagues' },
  'employees.qa.banner': { JP: 'お客さまの声から、未だ見ぬ新製品を生み出したい', EN: 'From customer voices, I want to create new products never seen before' },
  'employees.qa.title': { JP: '顧客の声からのイノベーション', EN: 'Innovation Through Customer Voice' },
  'employees.qa.desc': { JP: '「私にしか作れない新製品でお客様と仲間を喜ばせたい。技術・品質保証部で働く中で、これまで見たことのないソリューションを開発するために、常に顧客のフィードバックからインスピレーションを得ています。」', EN: '"I want to create new products that only I can make to please customers and colleagues. Working in the Technology and Quality Assurance Department, I\'m constantly inspired by customer feedback to develop solutions that haven\'t been seen before."' },
  'employees.interview': { JP: 'インタビューを見る', EN: 'Watch the interview' },
  'employees.see.more': { JP: '他の社員を見る', EN: 'See other employees' },
  'employees.planning.dept': { JP: '企画部', EN: 'Planning Department' },
  'employees.qa.dept': { JP: '技術・品質保証部', EN: 'Technology and Quality Assurance Department' },
  'employees.joined': { JP: '入社', EN: 'Joined in' },
  'employees.education.asian': { JP: 'アジア言語学部卒業', EN: 'Graduated from the Department of Asian Languages' },
  'employees.education.physics': { JP: '理学部物理学科卒業', EN: 'Graduated from the School of Science with a degree in Physics' },

  // President Section
  'president.breadcrumb': { JP: '社長メッセージ', EN: 'Message from the President' },
  'president.title': { JP: '社長メッセージ', EN: 'President\'s Message' },
  'president.main.message': { JP: '最終面接で待ってるよ！', EN: 'I\'ll be waiting for you in the final interview!' },
  'president.name': { JP: '小山真吾', EN: 'Shingo Koyama' },
  'president.title.role': { JP: '代表取締役', EN: 'Representative Director' },
  'president.message1': { JP: '自分の人生に挫折したくない、そういう人と一緒に仕事をしたい。', EN: 'I want to work with people who don\'t want to give up on their lives.' },
  'president.message2': { JP: '真の楽しさは、人と人が物事に向き合うことから生まれる。', EN: 'True enjoyment comes from people facing things together.' },
  'president.message3': { JP: 'それが人生の醍醐味であり、真の成長に繋がると思うしです。', EN: 'I believe that is the real pleasure of life and leads to true growth.' },
  'president.message4': { JP: '大人になったこそに得れる自分を目指す、そんな人が大好きです。', EN: 'I love people who aim to become the person they can only become as adults.' },
  'president.cta.speech': { JP: '詳しい本音はこちら', EN: 'More honest thoughts here' },
  'president.cta.entry': { JP: '今すぐエントリー', EN: 'Apply Now' },
  'president.cta.interview': { JP: '社長インタビュー', EN: 'President Interview' },

  // Footer
  'footer.company.desc': { JP: '常識に無い発想とチームパワーで世界を驚かせる。', EN: 'Surprising the world with unconventional ideas and team power.' },
  'footer.links': { JP: 'クイックリンク', EN: 'Quick Links' },
  'footer.business': { JP: '事業領域', EN: 'Business Areas' },
  'footer.join': { JP: 'チームに参加', EN: 'Join Our Team' },
  'footer.rights': { JP: '© 2025 テクダイヤ株式会社. All rights reserved.', EN: '© 2025 Tecdia Corporation. All rights reserved.' },
  'footer.privacy': { JP: 'プライバシーポリシー', EN: 'Privacy Policy' },
  'footer.terms': { JP: '利用規約', EN: 'Terms of Service' },
  'footer.cookies': { JP: 'Cookieポリシー', EN: 'Cookie Policy' },
  'footer.motto': { JP: '常識に無い発想とチームパワーで世界を驚かせる', EN: 'Surprising the world with unconventional ideas and team power' },

  // Common
  'common.years': { JP: '年', EN: 'years' },
  'common.hours': { JP: '時間', EN: 'hours' },
  'common.days': { JP: '日', EN: 'days' },
  'common.male': { JP: '男性', EN: 'Male' },
  'common.female': { JP: '女性', EN: 'Female' },
  'common.average': { JP: '平均', EN: 'average' },
  'common.age.20s': { JP: '20代', EN: '20s' },
  'common.age.30s': { JP: '30代', EN: '30s' },
  'common.age.40s': { JP: '40代', EN: '40s' },
  'common.age.50s': { JP: '50代+', EN: '50s+' },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('JP');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation key "${key}" not found`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};