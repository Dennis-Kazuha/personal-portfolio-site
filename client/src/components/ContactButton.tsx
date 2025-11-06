/**
 * Contact Button Component
 *
 * 右下角固定的聯絡我按鈕/面板。
 *
 * 修改位置：
 * - 聯絡資訊在 client/src/data/config.ts 的 contactInfo 物件中
 * - 更新 contactInfo 中的連結和信息
 */

import { useState } from 'react';
import { X, Mail, MessageCircle, Phone, User } from 'lucide-react';
import { contactInfo } from '@/data/config';

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Contact Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 bg-card border border-border rounded-lg p-6 shadow-lg max-w-sm z-40 marble-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">聯絡我</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-background rounded transition-colors"
              aria-label="Close contact panel"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-foreground/80 mb-4">
              {contactInfo.message}
            </p>

            {/* 實際聯絡方式列表 */}
            <div className="space-y-2">
              {contactInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-accent" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-accent hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              )}

              {contactInfo.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm text-foreground hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              )}

              {contactInfo.instagram && (
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-accent" />
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {contactInfo.instagram}
                  </a>
                </div>
              )}

              {contactInfo.businessCardUrl && (
                <div className="flex items-center gap-2">
                  <User size={16} className="text-accent" />
                  <a
                    href={contactInfo.businessCardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    查看電子名片
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-lg neon-glow transition-all z-40 flex items-center justify-center"
        aria-label="Open contact panel"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
}
