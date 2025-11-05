/**
 * AI Tools Section Component
 * 
 * 展示分類的 AI 工具地圖。
 */

import { aiToolCategories } from '@/data/aiTools';
import { sections } from '@/data/config';
import { ExternalLink } from 'lucide-react';

export default function AIToolsSection() {
  return (
    <section id={sections.aiTools.id} className="py-20 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sections.aiTools.title}
          </h2>
          <p className="text-lg text-foreground/70">
            {sections.aiTools.description}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {aiToolCategories.map((category) => (
            <div key={category.id}>
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent mb-2">
                  {category.name}
                </h3>
                <p className="text-foreground/70">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.tools.map((tool) => (
                  <a
                    key={tool.id}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="marble-card p-6 hover:shadow-lg transition-all group"
                  >
                    {/* Tool Name */}
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {tool.name}
                      </h4>
                      <ExternalLink
                        size={18}
                        className="text-accent/50 group-hover:text-accent transition-colors"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                      {tool.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="text-accent font-semibold group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
