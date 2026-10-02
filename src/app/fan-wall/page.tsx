'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero, Card } from '@/components/ui/SharedComponents';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Send, CheckCircle2, Trash2, Heart } from 'lucide-react';

interface FanMessage {
  id: string;
  fanId: string;
  displayName: string;
  message: string;
  createdAt: string;
  cardSize: 'small' | 'medium' | 'large';
}

function getFanId(): string {
  if (typeof window === 'undefined') return '';
  let fanId = localStorage.getItem('akku_fan_id');
  if (!fanId) {
    fanId = 'fan_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    localStorage.setItem('akku_fan_id', fanId);
  }
  return fanId;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function FanWallPage() {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [fanId, setFanId] = useState('');

  const MAX_CHARS = 500;

  useEffect(() => {
    setFanId(getFanId());
  }, []);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch('/api/fan-wall');
      const data: FanMessage[] = await res.json();
      setMessages(data);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/fan-wall', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fanId: fanId,
          displayName: name.trim(),
          message: message.trim(),
        }),
      });

      if (res.ok) {
        const newMsg: FanMessage = await res.json();
        setMessages(prev => [newMsg, ...prev]);
        setIsSubmitted(true);
        setName('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        showToast('Something went wrong. Please try again.');
      }
    } catch {
      showToast('Could not send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (msgId: string) => {
    setDeletingId(msgId);
    try {
      const res = await fetch(`/api/fan-wall/${msgId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fanId }),
      });

      if (res.ok) {
        setMessages(prev => prev.filter(m => m.id !== msgId));
        showToast('Message deleted');
      } else {
        showToast('Could not delete message.');
      }
    } catch {
      showToast('Could not delete message.');
    } finally {
      setDeletingId(null);
      setDeleteConfirm(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#4A1525] pb-24 font-[family-name:var(--font-plus-jakarta)]">
      {/* Pink aesthetic Hero */}
      <div className="pt-24 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold text-[#4A1525] mb-4">
          Fan Wall
        </h1>
        <p className="text-pink-600 text-lg">Leave a little reminder for Akanksha 🌸</p>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border border-pink-200 text-pink-700 px-6 py-3 rounded-xl shadow-xl shadow-pink-200/50 text-sm font-medium"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Submission Form Section */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
          <div className="p-6 md:p-8 bg-white/80 backdrop-blur-md border border-pink-100 rounded-3xl shadow-xl shadow-pink-200/40 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 opacity-50 rounded-full blur-3xl" />

            <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-bold mb-6 text-[#4A1525] flex items-center gap-2">
              Write for Akanksha <span className="text-lg">✍️</span>
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-500 mb-2"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#4A1525]">Thank You!</h3>
                <p className="text-pink-600">Your love has been added to the wall! ❤</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-pink-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    maxLength={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-pink-50/50 border border-pink-100 rounded-xl px-4 py-3 text-[#4A1525] focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all placeholder:text-pink-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-pink-700">
                      Message for Akanksha
                    </label>
                    <span className={`text-xs font-medium ${message.length > MAX_CHARS * 0.9 ? 'text-rose-500' : 'text-pink-400'}`}>
                      {message.length} / {MAX_CHARS}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    required
                    maxLength={MAX_CHARS}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-pink-50/50 border border-pink-100 rounded-xl px-4 py-3 text-[#4A1525] focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all resize-none placeholder:text-pink-300"
                    placeholder="Write something beautiful for Akanksha..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !message.trim()}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-pink-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send with Love <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-pink-500/80 text-center mt-4 font-medium">
                  Your message will appear instantly on the wall. Be kind, be loving. 🧿
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Message Wall Section */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-[#4A1525]">
              Messages from AkkuSena
            </h2>
            <Heart className="w-6 h-6 text-rose-500 fill-current" />
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-pink-100 border-t-pink-400 rounded-full animate-spin" />
                <p className="text-pink-500 font-medium text-sm">Loading love messages...</p>
              </div>
            </div>
          ) : messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/50 rounded-3xl border border-pink-100"
            >
              <Heart className="w-16 h-16 text-pink-300 mx-auto mb-4" />
              <p className="text-pink-600 font-medium text-lg">Be the first to leave a message for Akanksha! 🌸</p>
            </motion.div>
          ) : (
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {messages.map((msg, idx) => {
                const isOwn = msg.fanId === fanId;
                const isConfirmingDelete = deleteConfirm === msg.id;
                const isDeleting = deletingId === msg.id;

                const paddingClass = msg.cardSize === 'small' ? 'p-5' : msg.cardSize === 'large' ? 'p-7 sm:p-8' : 'p-6';
                const textClass = msg.cardSize === 'large' ? 'text-lg' : msg.cardSize === 'small' ? 'text-sm' : 'text-base';

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                    className="break-inside-avoid"
                  >
                    <div className={`relative rounded-3xl bg-white/90 backdrop-blur-sm border border-pink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200/50 hover:border-pink-300 group ${paddingClass}`}>
                      
                      {/* Delete button for own messages */}
                      {isOwn && (
                        <div className="absolute top-3 right-3 z-20">
                          {isConfirmingDelete ? (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="flex items-center gap-2 bg-white border border-pink-200 rounded-xl px-3 py-1.5 shadow-lg shadow-pink-100"
                            >
                              <span className="text-xs font-semibold text-pink-600">Delete?</span>
                              <button
                                onClick={() => handleDelete(msg.id)}
                                disabled={isDeleting}
                                className="text-xs text-rose-500 hover:text-rose-600 font-bold"
                              >
                                {isDeleting ? '...' : 'Yes'}
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="text-xs text-gray-400 hover:text-gray-600 font-medium"
                              >
                                No
                              </button>
                            </motion.div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(msg.id)}
                              className="p-1.5 rounded-lg bg-pink-50 border border-pink-100 text-pink-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100"
                              title="Delete your message"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      )}

                      {/* Quote mark */}
                      <span className="absolute top-2 left-4 text-6xl font-[family-name:var(--font-playfair)] text-pink-100 select-none z-0">
                        &ldquo;
                      </span>

                      {/* Message text */}
                      <p className={`text-[#4A1525] font-medium leading-relaxed relative z-10 pt-6 ${textClass}`}>
                        {msg.message}
                      </p>

                      {/* Author */}
                      <div className="mt-6 flex items-center justify-between text-sm border-t border-pink-50 pt-4">
                        <span className="font-bold text-pink-700 flex items-center gap-1.5">
                          — {msg.displayName}
                          <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
