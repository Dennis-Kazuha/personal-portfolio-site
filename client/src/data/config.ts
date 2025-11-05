/**
 * Global Configuration & Navigation
 * 
 * 這個文件定義了網站的全局配置，包括導覽項目、聯絡資訊等。
 * 
 * 修改方式：
 * 1. 更新導覽項目和連結
 * 2. 在 contactInfo 中添加真實聯絡方式（目前是 placeholder）
 * 3. 調整網站標題和描述
 */

export interface NavItem {
  label: string;
  href: string;
  id?: string;
}

export const navItems: NavItem[] = [
  { label: '案例實作教學', href: '#case-studies', id: 'case-studies' },
  { label: '作品', href: '#portfolio', id: 'portfolio' },
  { label: 'AI 工具地圖', href: '#ai-tools', id: 'ai-tools' },
  { label: '關於我', href: '#about', id: 'about' },
];

export const siteConfig = {
  title: '個人品牌網站',
  description: '用 AI 把複雜變簡單，讓程式與數據成為你的助理',
  author: '工程師 & 數據分析師',
  year: new Date().getFullYear(),
};

export const heroContent = {
  tagline: '用 AI 把複雜變簡單，讓程式與數據成為你的助理',
  description: '一位結合理工背景與教學經驗的創作者，擅長用 AI、程式與數據解決實際問題。',
  cta1: {
    text: '查看案例實作',
    href: '#case-studies',
  },
  cta2: {
    text: '認識熱門 AI 工具',
    href: '#ai-tools',
  },
};

/**
 * 聯絡資訊配置
 * 
 * 目前使用 placeholder 文字。要修改為真實聯絡方式，請編輯以下欄位：
 * - email: 你的電子郵件地址
 * - phone: 你的電話號碼（可選）
 * - linkedin: 你的 LinkedIn 個人資料連結
 * - twitter: 你的 Twitter 帳號連結
 * - github: 你的 GitHub 個人資料連結
 * - instagram: 你的 Instagram 帳號連結
 * - wechat: 你的微信帳號或二維碼
 * 
 * 修改位置：client/src/data/config.ts
 */
export const contactInfo = {
  email: '[TODO] 這裡之後會放 Email 連結',
  phone: '[TODO] 這裡之後會放電話號碼',
  linkedin: '[TODO] 這裡之後會放 LinkedIn 連結',
  twitter: '[TODO] 這裡之後會放 Twitter 連結',
  github: '[TODO] 這裡之後會放 GitHub 連結',
  instagram: '[TODO] 這裡之後會放 Instagram 連結',
  wechat: '[TODO] 這裡之後會放微信帳號',
  message: '這裡之後會放 Email / LINE / IG 連結',
};

export const sections = {
  caseStudies: {
    id: 'case-studies',
    title: '案例實作教學',
    description: '這裡展示我的實作教學文章、技術 Demo 和教學影片。透過實際案例，幫助你理解和學習最新的 AI、自動化和數據分析技術。',
  },
  portfolio: {
    id: 'portfolio',
    title: '作品',
    description: '我完成的項目和產品展示，涵蓋 AI 應用、數據分析、自動化系統等領域。',
  },
  aiTools: {
    id: 'ai-tools',
    title: 'AI 工具地圖',
    description: '精選的 AI 工具和平台整理，按功能分類，幫助你快速找到合適的工具解決問題。',
  },
  about: {
    id: 'about',
    title: '關於我',
    description: '了解我的背景、經驗和專業領域。',
  },
};
