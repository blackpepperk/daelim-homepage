import { motion } from 'motion/react';

const solutions = [
  {
    title: 'Automated Warehousing',
    description: 'Deploy fleets of R-Bot Logistics units to optimize storage density and retrieval times by 400%.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Precision Manufacturing',
    description: 'Reconfigure assembly lines in minutes with modular R-Bot Arms that adapt to new product specs instantly.',
    image: 'https://images.unsplash.com/photo-1565514020176-dbf2277cc120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Hazardous Environments',
    description: 'Send R-Bot Explorers where humans cannot go—nuclear decommissioning, deep sea mining, and disaster response.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
];

export default function Solutions() {
  return (
    <div className="bg-zinc-950 py-24 sm:py-32" id="solutions">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Industry Solutions</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-400">
            Scalable robotics for every sector.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {solutions.map((post, index) => (
            <motion.article 
              key={post.title} 
              className="flex flex-col items-start justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-zinc-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2] grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-cyan-400">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-400">{post.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
