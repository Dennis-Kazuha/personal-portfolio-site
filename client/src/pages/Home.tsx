import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactButton from '@/components/ContactButton';
import HeroSection from '@/components/HeroSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AIToolsSection from '@/components/AIToolsSection';
import AboutSection from '@/components/AboutSection';

/**
 * Home Page
 * 
 * 個人品牌網站的主頁，整合了所有主要區塊：
 * - Hero 區塊：主標語和介紹
 * - 案例實作教學：展示教學內容
 * - 作品集合：展示完成的項目
 * - AI 工具地圖：分類展示 AI 工具
 * - 關於我：個人背景信息
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <CaseStudiesSection />
        <PortfolioSection />
        <AIToolsSection />
        <AboutSection />
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
}
