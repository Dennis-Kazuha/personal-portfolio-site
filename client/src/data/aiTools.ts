/**
 * AI Tools Directory
 *
 * 這個文件定義了網站上展示的所有 AI 工具。
 * 每個工具包含名稱、描述、分類和官方連結。
 *
 * 修改方式：
 * 1. 在對應的分類陣列中添加或刪除工具
 * 2. 遵循相同的結構格式
 * 3. 確保 URL 正確且會在新分頁開啟
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
    id: 'flowith',
    name: 'Flowith',
    description:
      '整合知識庫、任務與多代理流程的 AI 工作空間，適合需要把專案流程拆解、交給多個 AI 協作完成的個人與團隊。',
    url: 'https://flowith.com/',
  },
  {
    id: 'skywork',
    name: 'Skywork (天工)',
    description:
      '支援中文優化的大語言模型與工具平台，可一站式完成寫作、程式、分析等任務，適合以中文為主的創作者與團隊。',
    url: 'https://www.skywork.cn/',
  },
  {
    id: 'n8n',
    name: 'n8n',
    description:
      '開源的工作流自動化平台，擅長把各種 API、資料庫與 AI 模型串起來。非常適合自由接案者與工程師打造專屬自動化流程。',
    url: 'https://n8n.io/',
  },
];

// 分類 B: 設計 / 簡報 / 品牌與視覺
const designTools: AITool[] = [
  {
    id: 'lovart',
    name: 'Lovart',
    description:
      '設計 AI Agent，從概念、分鏡到品牌視覺都能自動協助完成。適合需要快速產出完整設計流程的創作者與小型品牌。',
    url: 'https://www.lovart.ai/',
  },
  {
    id: 'raphael-ai',
    name: 'Raphael AI',
    description:
      '主打「免費、無限生成」的 AI 圖像生成平台，適合想大量嘗試不同風格畫面、社群素材與靈感草圖的創作者。',
    url: 'https://raphaelai.org/zh-tw',
  },
  {
    id: 'lovart-io',
    name: 'Lovart 社群案例',
    description:
      'Lovart 的作品靈感與設計案例展示頁，可快速了解實際應用風格，作為設計參考與提案素材來源。',
    url: 'https://www.lovart.io/',
  },
];

// 分類 C: 影片 / 短影音生成與剪輯
const videoTools: AITool[] = [
  {
    id: 'sora',
    name: 'Sora 2 (OpenAI)',
    description:
      '文字轉影片模型，能根據自然語言描述生成高品質影片。適合行銷、教學與故事型內容的實驗與概念驗證。',
    url: 'https://openai.com/sora',
  },
  {
    id: 'klap',
    name: 'Klap',
    description:
      '專門把長影片自動剪成一組短影音的工具，會自動找到精彩片段並加上字幕與版型，適合 YouTuber、Podcaster 和短影音經營者。',
    url: 'https://klap.app/',
  },
  {
    id: 'skyreels',
    name: 'Skyreels',
    description:
      '一站式 AI 影片生成與剪輯平台，支援 AI Avatar、多模型生成與智慧剪輯，適合需要大量產出行銷影片的團隊。',
    url: 'https://www.skyreels.ai/',
  },
  {
    id: 'medeo',
    name: 'Medeo',
    description:
      '文字驅動的 AI 影片工作室，從腳本、配音到剪輯都能自動完成，適合沒有剪輯背景但需要專業感影片的個人與企業。',
    url: 'https://www.medeo.ai/',
  },
  {
    id: 'topview',
    name: 'TopView',
    description:
      '專注於行銷與電商應用的 AI 影片與情境圖工具，能把連結或素材一鍵轉為廣告風格影片，適合電商賣家與廣告投放。',
    url: 'https://www.topview.ai/',
  },
];

// 分類 D: 語音 / 行銷 / 溝通
const voiceMarketingTools: AITool[] = [
  {
    id: 'bland-ai',
    name: 'Bland AI',
    description:
      '企業級語音代理平台，用 AI 自動撥打與接聽電話，適合客服、銷售開發與大量重複諮詢情境。',
    url: 'https://www.bland.ai/',
  },
  {
    id: 'sesame',
    name: 'Sesame',
    description:
      '以自然對話體驗為主的語音助手與聊天夥伴，提供更貼近真人的聲音互動，適合想嘗試語音型 AI 產品的使用者。',
    url: 'https://www.sesame.chat/',
  },
  {
    id: 'head-headai',
    name: 'Head / Headai',
    description:
      '以行銷與成長為核心的 AI 數位行銷助手，協助規劃投放策略、內容與數據追蹤，適合品牌與內容經營者。',
    url: 'https://headai.io/',
  },
];

// 分類 E: 多模型聊天 / 通用大模型
const chatModels: AITool[] = [
  {
    id: 'claude',
    name: 'Claude (Anthropic)',
    description:
      'Anthropic 推出的高性能大語言模型，擅長長文理解、程式協作與嚴謹推理，適合需要穩定寫作與專案協作的使用者。',
    url: 'https://claude.ai/',
  },
  {
    id: 'grok',
    name: 'Grok (xAI)',
    description:
      'xAI 開發的即時型 AI 助手，強調連結最新資訊與開放式對話，適合需要追蹤新聞、數據與技術動態的使用者。',
    url: 'https://x.ai/',
  },
  {
    id: 'zhipu-coco',
    name: '智譜 CoCo (Zhipu CoCo)',
    description:
      '支援文本、圖片與影片理解的多模態助理，特別適合需要處理中文內容、多媒體素材與企業場景的用戶。',
    url: 'https://coco.zhipuai.cn/',
  },
  {
    id: 'skywork-chat',
    name: 'Skywork Chat',
    description:
      '以中文場景為主的大語言模型聊天介面，適合日常問答、寫作與程式輔助等通用應用。',
    url: 'https://www.skywork.cn/',
  },
];

// 分類 F: 搜索 / 研究 / 決策分析
const researchTools: AITool[] = [
  {
    id: 'genspark',
    name: 'Genspark',
    description:
      '新一代 AI 搜尋與研究工具，整合多來源資訊並整理成條理清楚的長文摘要，適合需要快速做功課與市場研究的人。',
    url: 'https://www.genspark.ai/',
  },
  {
    id: 'headai-analytics',
    name: 'Headai Analytics',
    description:
      '以知識圖譜與文字分析為核心的資料洞察平台，可從大量文件與資料中找出趨勢與關鍵主題，偏向企業與資料分析應用。',
    url: 'https://www.headai.com/',
  },
];

// 匯總分類
export const aiToolCategories: AIToolCategory[] = [
  {
    id: 'workspace',
    name: 'AI 工作空間 / 自動化平台',
    description: '用來管理專案、組織知識與自動化流程的工具，適合把 AI 真的接到工作裡的人使用。',
    tools: workspaceTools,
  },
  {
    id: 'design',
    name: '設計 / 簡報 / 品牌與視覺',
    description: '幫你快速產出圖片、版型與視覺概念的工具，適合內容創作者與個人品牌經營者。',
    tools: designTools,
  },
  {
    id: 'video',
    name: '影片 / 短影音生成與剪輯',
    description: '從文字或素材自動生成影片，或將長影片剪成短影音，適合行銷、教學與自媒體經營。',
    tools: videoTools,
  },
  {
    id: 'voice-marketing',
    name: '語音 / 行銷 / 溝通',
    description: '以語音與行銷自動化為主的工具，適合需要大量對話與銷售流程的情境。',
    tools: voiceMarketingTools,
  },
  {
    id: 'chat-models',
    name: '多模型聊天 / 通用大模型',
    description: '通用型大語言模型與多模態助手，是各種應用的核心基礎。',
    tools: chatModels,
  },
  {
    id: 'research',
    name: '搜索 / 研究 / 決策分析',
    description: '用於查資料、做研究與看趨勢的工具，適合需要做功課與決策的人。',
    tools: researchTools,
  },
];

// 平面化所有工具列表（若之後需要快速查詢可以使用）
export const allAITools: AITool[] = aiToolCategories.flatMap((cat) => cat.tools);
