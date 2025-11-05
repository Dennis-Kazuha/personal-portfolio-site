/**
 * Footer Component
 * 
 * 頁尾，包含版權信息和簡短標語。
 */

import { siteConfig } from '@/data/config';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground/60">
            &copy; {siteConfig.year} {siteConfig.title}. 版權所有。
          </div>
          <div className="text-sm text-foreground/60">
            用 AI 把複雜變簡單，讓程式與數據成為你的助理。
          </div>
        </div>
      </div>
    </footer>
  );
}
