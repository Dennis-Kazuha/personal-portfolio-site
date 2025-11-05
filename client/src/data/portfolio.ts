/**
 * Portfolio / Projects
 * 
 * 這個文件定義了「作品」區塊的內容。
 * 每個作品包含名稱、描述、技術堆疊和連結。
 * 
 * 修改方式：
 * 1. 編輯或添加新的作品到 portfolioProjects 陣列
 * 2. 將 [TODO] 替換為實際內容
 * 3. 更新技術標籤和連結
 */

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'line-ai-bot',
    title: '[TODO] LINE AI 個人助理 Bot',
    description: '整合 Claude AI 的 LINE 官方帳號，提供智能客服、日程管理和信息查詢功能。',
    technologies: ['LINE Bot API', 'Claude AI', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 'exam-generator',
    title: '[TODO] 考前衝刺講義自動生成系統',
    description: '使用 AI 自動分析課程內容，生成個性化的複習講義和練習題。',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    link: '#',
  },
  {
    id: 'investment-automation',
    title: '[TODO] 投資研究與報表自動化工具',
    description: '自動化收集、分析投資數據，生成定期研究報告和市場洞察。',
    technologies: ['Python', 'Pandas', 'n8n', 'Google Sheets API'],
    link: '#',
  },
  {
    id: 'data-pipeline',
    title: '[TODO] 數據管道與 ETL 系統',
    description: '構建可擴展的數據管道，實現從多個來源的數據抽取、轉換和加載。',
    technologies: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    id: 'ai-toolkit',
    title: '[TODO] AI 工具集成平台',
    description: '整合多個 AI 服務的統一平台，簡化開發者的 AI 應用開發流程。',
    technologies: ['TypeScript', 'Next.js', 'Langchain', 'OpenAI'],
    link: '#',
  },
];
