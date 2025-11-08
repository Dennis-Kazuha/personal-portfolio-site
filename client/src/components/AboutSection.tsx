/**
 * About Section Component
 *
 * 展示個人背景、學歷、工作經驗等信息。
 *
 * 修改位置：client/src/data/about.ts
 */

import { aboutSections } from '@/data/about';
import { sections } from '@/data/config';

export default function AboutSection() {
  return (
    <section id={sections.about.id} className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sections.about.title}
          </h2>
          <p className="text-lg text-foreground/70">
            {sections.about.description}
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-4xl">
          <div className="space-y-8">
            {aboutSections.map((section, index) => (
              <div
                key={index}
                className="marble-card p-8"
              >
                {/* Section Title */}
                <h3 className="text-2xl font-bold text-accent mb-4">
                  {section.title}
                </h3>

                {/* Section Content */}
                <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* 新增：網站如何打造區塊 */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* 左邊：整體說明 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg marble-card space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                這個網站是怎麼打造的？
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                這個網站不是用現成套版拼一拼，而是我自己規劃結構，
                再用前端框架和雲端部署服務一步一步搭起來的。
                簡單說，就是：程式碼放在 GitHub，畫面用 React + Vite，
                部署與更新交給 Zeabur 自動處理。
              </p>

              <div className="space-y-2 text-sm text-foreground/80">
                <p>
                  <span className="font-semibold">前端架構：</span>
                  使用 React + Vite 建立單頁應用（SPA），讓載入速度和開發體驗比較順。
                </p>
                <p>
                  <span className="font-semibold">版面與風格：</span>
                  透過 Tailwind CSS 客製深色主題，
                  搭配大理石質感卡片與霓虹重點色，維持科技感又不會太雜亂。
                </p>
                <p>
                  <span className="font-semibold">內容管理：</span>
                  導覽列、案例卡片、AI 工具清單、聯絡資訊等，
                  集中寫在 data/config 檔案裡，
                  之後要新增案例或改文案，只要調整資料，不用重改元件。
                </p>
              </div>
            </div>

            {/* 右邊：給看得懂技術的人 */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg marble-card space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                給看得懂程式的朋友
              </h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>
                  <span className="font-semibold">Tech Stack：</span>
                  React + TypeScript + Vite SPA，UI 使用 Tailwind，
                  並加上一些客製化 class（例如 marble-card、neon-glow）。
                </li>
                <li>
                  <span className="font-semibold">資料驅動結構：</span>
                  nav、sections、case studies、AI tools、contact 設定，
                  集中在
                  <code className="text-xs bg-background/50 px-1 py-0.5 rounded mx-1">
                    client/src/data
                  </code>
                  底下管理。
                </li>
                <li>
                  <span className="font-semibold">部署流程：</span>
                  GitHub 綁定 Zeabur，偵測到 main 分支有新 commit 就自動執行
                  <code className="text-xs bg-background/50 px-1 py-0.5 rounded mx-1">
                    pnpm install
                  </code>
                  和
                  <code className="text-xs bg-background/50 px-1 py-0.5 rounded mx-1">
                    pnpm build
                  </code>
                  ，將
                  <code className="text-xs bg-background/50 px-1 py-0.5 rounded mx-1">
                    dist
                  </code>
                  輸出成靜態網站對外提供。
                </li>
                <li>
                  <span className="font-semibold">後續擴充：</span>
                  未來可以在相同專案下串接 n8n workflow 或自訂 API，
                  讓網站不只是展示頁，還能直接 Demo 各種自動化和 AI 助理功能。
                </li>
              </ul>
            </div>
          </div>

          {/* Note for editing */}
          <div className="mt-12 p-6 bg-background/50 border border-border rounded-lg">
            <p className="text-sm text-foreground/60">
              <strong>編輯提示：</strong>要修改這些內容，請編輯
              <code className="bg-card px-1 py-0.5 rounded text-accent ml-1">
                client/src/data/about.ts
              </code>
              文件中的 aboutContent 物件。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
