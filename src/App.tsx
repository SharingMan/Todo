import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Check, Link, RefreshCw, Lock, Bolt, Sparkles } from 'lucide-react';

export default function App() {
  const [url, setUrl] = useState('https://notiontodo.xinhaiblog.top/api/feed/fb13d10a-6c1d-4a0e-bc0d-83f7f2513351.ics');
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync process
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full glass-glow pointer-events-none" />
      <div className="fixed -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full glass-glow pointer-events-none" />

      <header className="mb-20 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dim rounded-xl flex items-center justify-center ambient-shadow">
            <Check className="text-white w-8 h-8" strokeWidth={3} />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl font-black tracking-tighter text-on-surface mb-4"
        >
          Welcome to MyTodo
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-on-surface-variant text-lg tracking-tight max-w-md mx-auto leading-relaxed"
        >
          Connect your digital life. Your productivity gallery awaits its first architectural foundation.
        </motion.p>
      </header>

      <main className="w-full max-w-2xl z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-surface-container-low rounded-[2rem] p-8 sm:p-12 ambient-shadow"
        >
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant font-bold px-1">
                Calendar Subscription URL
              </label>
              <div className="relative group">
                <input 
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-surface-container-lowest text-on-surface border-none rounded-xl px-6 py-5 text-lg font-medium ring-1 ring-outline-variant/10 focus:ring-2 focus:ring-primary focus:bg-surface-container-high transition-all outline-none ambient-shadow group-hover:ring-outline-variant/30"
                  placeholder="Paste your .ics feed link here"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <Link className="text-outline-variant w-5 h-5" />
                </div>
              </div>
              <p className="px-1 text-on-surface-variant/60 text-sm italic">
                Works with iCloud, Google Calendar, Notion, and Outlook feeds.
              </p>
            </div>

            <div className="pt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSync}
                disabled={isSyncing}
                className="w-full bg-gradient-to-br from-primary to-primary-dim text-white py-5 rounded-full font-bold text-xl tracking-tight ambient-shadow flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70"
              >
                <RefreshCw className={`w-6 h-6 ${isSyncing ? 'animate-spin' : ''}`} />
                {isSyncing ? 'Syncing...' : 'Sync My Calendar'}
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <FeatureItem 
            icon={<Lock className="w-5 h-5 text-primary" />}
            title="Private by Design"
            description="Your data is yours. End-to-end encryption for all synced tasks."
            delay={0.4}
          />
          <FeatureItem 
            icon={<Bolt className="w-5 h-5 text-primary" />}
            title="Instant Sync"
            description="Real-time updates across all your architectural canvases."
            delay={0.5}
          />
          <FeatureItem 
            icon={<Sparkles className="w-5 h-5 text-primary" />}
            title="Smart Sorting"
            description="AI-driven prioritization that respects your natural workflow."
            delay={0.6}
          />
        </div>
      </main>

      <footer className="mt-auto pt-20 z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 1 }}
          className="flex gap-8 items-center transition-opacity"
        >
          <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            The Quiet Architect
          </p>
          <div className="h-px w-8 bg-outline-variant/30" />
          <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-on-surface-variant font-bold">
            Version 2.0.4
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

function FeatureItem({ icon, title, description, delay }: { icon: ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4"
    >
      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-sm text-on-surface mb-1">{title}</h3>
      <p className="text-xs text-on-surface-variant leading-relaxed">{description}</p>
    </motion.div>
  );
}
