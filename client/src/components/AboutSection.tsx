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
