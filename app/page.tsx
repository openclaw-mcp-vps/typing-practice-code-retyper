export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded px-3 py-1 text-xs text-[#58a6ff] mb-6">
          developer-tools
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Practice Typing with<br />
          <span className="text-[#58a6ff]">Real Open Source Code</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Like typelit.io but for developers. Retype famous GitHub repositories with syntax highlighting, WPM tracking, and accuracy stats.
        </p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left mb-8 text-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block"></span>
            <span className="text-[#8b949e] ml-2">linux/kernel/sched/core.c</span>
          </div>
          <pre className="text-[#c9d1d9] overflow-x-auto">
            <code>{
`<span class="text-[#ff7b72]">static</span> <span class="text-[#79c0ff]">void</span> <span class="text-[#d2a8ff]">__sched_fork</span>(<span class="text-[#79c0ff]">unsigned long</span> clone_flags,
             <span class="text-[#79c0ff]">struct task_struct</span> *p)
{
  p->on_rq = <span class="text-[#79c0ff]">0</span>;
  p->se.on_rq = <span class="text-[#79c0ff]">0</span>;
  p->se.exec_start = <span class="text-[#79c0ff]">0</span>;
}`
            }</code>
          </pre>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>⌨ Real GitHub repos</span>
          <span>📊 WPM &amp; accuracy tracking</span>
          <span>🎨 Syntax highlighting</span>
          <span>🏆 Leaderboards</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold mb-2 uppercase tracking-wider">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Access to 50+ famous repositories",
              "WPM & accuracy tracking",
              "Progress history & streaks",
              "Syntax-highlighted typing mode",
              "Global leaderboards",
              "New repos added weekly"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Start Typing — $9/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What repositories are available?",
              a: "We include iconic open source projects like Linux kernel, React, CPython, Redis, Kubernetes, and more. New repos are added weekly based on community requests."
            },
            {
              q: "How is this different from other typing tools?",
              a: "Most typing tools use random words or prose. CodeRetyper uses real production code with proper syntax highlighting, so you practice the exact patterns you'll type at work."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no hidden fees."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} CodeRetyper. Built for developers who type for a living.</p>
      </footer>
    </main>
  );
}
