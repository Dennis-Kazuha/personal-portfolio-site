/**
 * Case Studies Section Component
 * 
 * 展示案例實作教學的卡片網格。
 */

import { caseStudies } from '@/data/caseStudies';
import { sections } from '@/data/config';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <section id={sections.caseStudies.id} className="py-20 bg-card/50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sections.caseStudies.title}
          </h2>
          <p className="text-lg text-foreground/70">
            {sections.caseStudies.description}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="marble-card p-6 hover:shadow-lg transition-all group cursor-pointer"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {caseStudy.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                {caseStudy.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-background/50 text-accent text-xs rounded-full border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={caseStudy.link || '#'}
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors"
              >
                查看詳情
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
