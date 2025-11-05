/**
 * About Section Content
 *
 * 這個文件定義了「關於我」區塊的內容。
 * 包含簡介、學歷、工作經驗、教學經驗和研究領域。
 *
 * 修改方式：
 * 1. 在對應的欄位中替換文字為實際內容
 * 2. 保持抽象描述，不要包含真實姓名或公司名稱
 * 3. 可根據需要添加或刪除項目
 */

export interface AboutSection {
  title: string;
  content: string;
}

export const aboutContent = {
  intro: {
    title: '簡介',
    content:
      '我是一位結合理工背景與教學經驗的創作者，喜歡把抽象的數學、程式與資料，轉化成真正能幫助生活與工作的工具。近年專注在「AI + 自動化」的實作，從個人效率、教學到中小型團隊的流程優化都有涉略。',
  },
  education: {
    title: '學歷與養成',
    content:
      '具有理工與數理相關背景，長期關注數學、統計、程式設計與工程實務。透過自學與實作持續吸收雲端服務、AI 模型、工作流自動化等新技術，重視「學到能用出來」的能力，而不是只停留在理論。',
  },
  experience: {
    title: '實務與專案經驗',
    content:
      '曾參與後端／全端開發、資料處理、儀表板與報表系統建置，也習慣把零散需求拆解成可以落地的系統規格。擅長運用 API、Webhook、n8n 等工具，把重複性工作自動化，讓人可以把時間留給真正有價值的分析與決策。',
  },
  teaching: {
    title: '教學與家教',
    content:
      '擁有多年國高中數理家教與教學經驗，重視用生活化的例子與圖像化的方式，把艱澀的公式與觀念講到「真的聽懂」。特別喜歡設計考前重點整理、一頁式講義與解題策略，並嘗試把 AI 納入學習流程，幫學生打造自己的學習工具。',
  },
  research: {
    title: '興趣與研究方向',
    content:
      '目前的興趣集中在：如何把日常工作拆成可重複的 workflow、用 AI 協助做資料分析與內容產出，以及結合 LINE Bot、雲端服務與資料庫做出真正有用的助理型服務。同時也持續關注教育場域與實務工作中，AI 落地應用的可能性。',
  },
} as const;

export const aboutSections: AboutSection[] = [
  {
    title: aboutContent.intro.title,
    content: aboutContent.intro.content,
  },
  {
    title: aboutContent.education.title,
    content: aboutContent.education.content,
  },
  {
    title: aboutContent.experience.title,
    content: aboutContent.experience.content,
  },
  {
    title: aboutContent.teaching.title,
    content: aboutContent.teaching.content,
  },
  {
    title: aboutContent.research.title,
    content: aboutContent.research.content,
  },
];
