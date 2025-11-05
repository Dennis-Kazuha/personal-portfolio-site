/**
 * Portfolio Section Component
 * 
 * 展示完成的作品和項目。
 */

import { portfolioProjects } from '@/data/portfolio';
import { sections } from '@/data/config';
import { ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  return (
    <section id={sections.portfolio.id} className="py-20">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sections.portfolio.title}
          </h2>
          <p className="text-lg text-foreground/70">
            {sections.portfolio.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="marble-card p-8 hover:shadow-lg transition-all group"
            >
              {/* Project Number */}
              <div className="text-accent/50 text-sm font-mono mb-2">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background/50 text-foreground/70 text-xs rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link || '#'}
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                查看更多
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
