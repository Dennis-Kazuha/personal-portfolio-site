/**
 * AI Tools Directory
 * 
 * 這個文件定義了網站上展示的所有 AI 工具。
 * 每個工具包含名稱、描述、分類和官方連結。
 * 
 * 修改方式：
 * 1. 在對應的分類陣列中添加新工具
 * 2. 遵循相同的結構格式
 * 3. 確保 URL 正確且在新分頁開啟
 */

export interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string;
}

export interface AIToolCategory {
  id: string;
  name: string;
  description: string;
  tools: AITool[];
}

// 分類 A: AI 工作空間 / 自動化平台
const workspaceTools: AITool[] = [
  {
    id: 'n8n',
    name: 'n8n',
    description: '開源的工作流自動化平台，支援 600+ 應用整合。適合想要自動化重複工作、連接多個工具的創作者和企業。',
    url: 'https://n8n.io/',
  },
  {
    id: 'flowith',
    name: 'Flowith',
    description: '無代碼工作流自動化工具，幫助用戶快速構建 AI 驅動的自動化流程。適合需要快速部署自動化方案的團隊。',
    url: 'https://flowith.com/',
  },
];

// 分類 B: 設計 / 簡報 / 品牌視覺
const designTools: AITool[] = [
  {
    id: 'lovart',
    name: 'Lovart',
    description: 'AI 驅動的設計工具，可快速生成專業品牌視覺和設計資產。適合個人創作者、小企業快速建立視覺識別。',
    url: 'https://www.lovart.ai/',
  },
  {
    id: 'zhipu-coco',
    name: '智譜 CoCo (Zhipu CoCo)',
    description: '智譜推出的多模態 AI 助手，支援文本、圖像、視頻理解。適合需要多模態內容分析和創意生成的用戶。',
    url: 'https://coco.zhipuai.cn/',
  },
];

// 分類 C: 影片 / 短影音生成與剪輯
const videoTools: AITool[] = [
  {
    id: 'sora',
    name: 'Sora 2 (OpenAI)',
    description: 'OpenAI 推出的文字轉影片模型，能根據文字描述生成高質量影片。適合內容創作者、行銷團隊製作視覺內容。',
    url: 'https://openai.com/sora',
  },
  {
    id: 'klap',
    name: 'Klap',
    description: '自動將長影片轉換為短影音的工具，支援多平台優化。適合想要快速製作短視頻內容的創作者。',
    url: 'https://klap.app/',
  },
  {
    id: 'skyreels',
    name: 'Skyreels',
    description: 'AI 短影音生成平台，可快速創建高質量的社交媒體視頻。適合社交媒體營銷和內容創作。',
    url: 'https://skyreels.ai/',
  },
  {
    id: 'medeo',
    name: 'Medeo',
    description: '影片編輯和生成 AI 工具，支援自動化編輯流程。適合需要快速處理大量影片的創作者。',
    url: 'https://www.medeo.ai/',
  },
];

// 分類 D: 語音 / 行銷 / 溝通
const voiceMarketingTools: AITool[] = [
  {
    id: 'bland-ai',
    name: 'Bland AI',
    description: 'AI 語音通話平台，可自動進行客服、銷售通話。適合企業自動化客戶溝通和銷售流程。',
    url: 'https://www.bland.ai/',
  },
  {
    id: 'sesame',
    name: 'Sesame',
    description: '對話式 AI 平台，幫助企業構建智能客服和營銷對話系統。適合提升客戶互動體驗。',
    url: 'https://www.sesame.chat/',
  },
];

// 分類 E: 多模型聊天 / 通用大模型
const chatModels: AITool[] = [
  {
    id: 'claude',
    name: 'Claude (Anthropic)',
    description: 'Anthropic 推出的高性能大語言模型，以安全性和可靠性著稱。適合需要精準文本分析、代碼生成、創意寫作的用戶。',
    url: 'https://claude.ai/',
  },
  {
    id: 'grok',
    name: 'Grok (xAI)',
    description: 'xAI 開發的實時 AI 助手，能夠存取最新信息。適合需要即時數據和深度分析的用戶。',
    url: 'https://x.ai/',
  },
  {
    id: 'skywork',
    name: 'Skywork (天工)',
    description: '中文優化的大語言模型，支援多種應用場景。適合中文內容生成、分析和創意應用。',
    url: 'https://www.skywork.cn/',
  },
];

// 分類 F: 搜索 / 研究 / 決策分析
const researchTools: AITool[] = [
  {
    id: 'genspark',
    name: 'Genspark',
    description: '新一代 AI 搜索引擎，整合多個信息源進行深度分析。適合需要快速獲取全面信息和洞察的研究者。',
    url: 'https://www.genspark.ai/',
  },
  {
    id: 'topview',
    name: 'TopView',
    description: 'AI 驅動的市場研究和競爭分析工具。適合企業進行市場調研和戰略決策。',
    url: 'https://topview.ai/',
  },
  {
    id: 'raphael-ai',
    name: 'Raphael AI',
    description: 'AI 分析和報告生成工具，幫助用戶快速生成專業報告。適合數據分析和決策支持。',
    url: 'https://raphael-ai.com/',
  },
  {
    id: 'head-ai',
    name: 'Head / Headai',
    description: '智能信息聚合和分析平台，支援多源數據整合。適合需要集中管理和分析信息的專業人士。',
    url: 'https://headai.io/',
  },
];

// 所有分類
export const aiToolCategories: AIToolCategory[] = [
  {
    id: 'workspace',
    name: 'AI 工作空間 / 自動化',
    description: '幫助自動化工作流程、連接多個應用的平台和工具',
    tools: workspaceTools,
  },
  {
    id: 'design',
    name: '設計 / 簡報 / 品牌視覺',
    description: '用於生成設計資產、視覺內容和品牌識別的 AI 工具',
    tools: designTools,
  },
  {
    id: 'video',
    name: '影片 / 短影音生成與剪輯',
    description: '自動化影片製作、編輯和優化的 AI 平台',
    tools: videoTools,
  },
  {
    id: 'voice-marketing',
    name: '語音 / 行銷 / 溝通',
    description: '自動化語音通話、客服和營銷溝通的工具',
    tools: voiceMarketingTools,
  },
  {
    id: 'chat-models',
    name: '多模型聊天 / 通用大模型',
    description: '通用型大語言模型，支援多種應用場景',
    tools: chatModels,
  },
  {
    id: 'research',
    name: '搜索 / 研究 / 決策分析',
    description: '用於信息搜索、市場研究和數據分析的 AI 工具',
    tools: researchTools,
  },
];

// 平面化所有工具列表（用於快速查詢）
export const allAITools: AITool[] = aiToolCategories.flatMap(cat => cat.tools);
