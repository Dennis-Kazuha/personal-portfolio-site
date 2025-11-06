/**
 * Case Studies & Teaching Content
 * 
 * 這個文件定義了「案例實作教學」區塊的內容。
 * 每個案例包含標題、描述和相關標籤。
 * 
 * 修改方式：
 * 1. 編輯或添加新的案例到 caseStudies 陣列
 * 2. 將 [TODO] 替換為實際內容
 * 3. 根據需要調整標籤
 */

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'line-bot',
    title: '[TODO] LINE 官方帳號 AI 助理教學案例',
    description: '使用 LINE Bot API 結合 Claude AI，打造個人化的客服助理。涵蓋從零開始的完整實作流程。',
    tags: ['LINE Bot', 'AI 助理', 'Python'],
    link: 'https://www.notion.so/LINE-AI-n8n-ChatGPT-Claude-2a33680be53e8064af68d4cc65e4ba7d?source=copy_link',
  },
  {
    id: 'n8n-automation',
    title: '[TODO] n8n 工作流自動化實戰',
    description: '透過 n8n 連接多個應用，自動化日常工作流程。包含實際案例和最佳實踐。',
    tags: ['n8n 自動化', '工作流', '無代碼'],
    link: '#',
  },
  {
    id: 'exam-prep',
    title: '[TODO] 考前衝刺講義自動生成系統',
    description: '利用 AI 和自動化工具，快速生成個性化的考試複習講義和練習題。',
    tags: ['考前衝刺包', 'AI 生成', '教學工具'],
    link: '#',
  },
  {
    id: 'data-analysis',
    title: '[TODO] 數據分析與洞察提取',
    description: '從原始數據到可操作的洞察，展示完整的數據分析工作流程。',
    tags: ['數據分析', 'Python', 'Pandas'],
    link: '#',
  },
  {
    id: 'ai-integration',
    title: '[TODO] AI 模型集成與優化',
    description: '深入探討如何將不同的 AI 模型集成到實際應用中，並進行性能優化。',
    tags: ['AI 整合', '模型優化', '最佳實踐'],
    link: '#',
  },
];
