/**
 * About Section Content
 * 
 * 這個文件定義了「關於我」區塊的內容。
 * 包含簡介、學歷、工作經驗、教學經驗和研究領域。
 * 
 * 修改方式：
 * 1. 在對應的欄位中替換 [TODO] 文字為實際內容
 * 2. 保持抽象描述，不要包含真實姓名或公司名稱
 * 3. 可根據需要添加或刪除項目
 */

export interface AboutSection {
  title: string;
  content: string;
}

export const aboutContent = {
  intro: {
    title: '簡要介紹',
    content: '[TODO] 這裡會放我的簡要介紹。例如：一位結合理工背景與教學經驗的創作者，擅長用 AI、程式與數據解決實際問題。',
  },
  education: {
    title: '學歷',
    content: '[TODO] 這裡會放我的學歷介紹。例如：碩士學位、主修領域、重要課程或研究方向。',
  },
  experience: {
    title: '工作與實務經驗',
    content: '[TODO] 這裡會放我的工作經驗。例如：在哪些公司或組織工作過、主要職責、技術棧和成就。',
  },
  teaching: {
    title: '教學與家教經驗',
    content: '[TODO] 這裡會放我的教學經驗。例如：教過的課程、學生人數、教學方法和成果。',
  },
  research: {
    title: '研究 / 專案領域',
    content: '[TODO] 這裡會放我的研究和專案領域。例如：CMP 研磨墊、資料分析、5G 電路設計、AI 應用等。',
  },
};

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
