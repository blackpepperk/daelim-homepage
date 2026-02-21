import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32" id="about">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.zinc.800),theme(colors.zinc.950))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-zinc-950 shadow-xl shadow-zinc-950/10 ring-1 ring-white/5 sm:mr-28 lg:mr-0 lg:w-full lg:origin-center lg:skew-x-[-30deg]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About DAELIM R-Bot</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Founded with a vision to revolutionize industrial labor, DAELIM R-Bot combines decades of engineering heritage with futuristic robotics. We don't just build machines; we build the workforce of tomorrow.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {['Open Roles', 'Internship Program', 'Our Values', 'Meet our leadership'].map((link) => (
              <a key={link} href="#" className="hover:text-cyan-400 transition-colors">
                {link} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Offices worldwide', value: '12' },
              { name: 'Robots deployed', value: '300+' },
              { name: 'Uptime guarantee', value: '99.9%' },
              { name: 'Support', value: '24/7' },
            ].map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-zinc-400">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
