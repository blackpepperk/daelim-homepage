export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                <span className="font-mono font-bold text-cyan-400">R</span>
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-white">
                DAELIM <span className="text-cyan-400">R-Bot</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-400">
              Building the future of autonomous labor, one bot at a time.
            </p>
            <div className="flex space-x-6">
              {/* Social placeholders */}
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'YouTube'].map((item) => (
                <a key={item} href="#" className="text-zinc-500 hover:text-cyan-400">
                  <span className="sr-only">{item}</span>
                  <div className="h-6 w-6 bg-current rounded-full opacity-20" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Industrial Automation', 'Logistics', 'Healthcare', 'Defense'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Documentation', 'API Reference', 'Guides', 'Status'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['Privacy', 'Terms', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-zinc-400 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-zinc-500">&copy; 2024 DAELIM R-Bot Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
