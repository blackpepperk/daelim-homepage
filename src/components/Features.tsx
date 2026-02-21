import { motion } from 'motion/react';
import { Cpu, Zap, Shield, Globe, Bot, Activity } from 'lucide-react';

const features = [
  {
    name: 'Neural Processing',
    description: 'Advanced onboard AI capable of real-time decision making and adaptive learning in unstructured environments.',
    icon: Cpu,
  },
  {
    name: 'Hyper-Efficiency',
    description: 'Next-gen battery architecture providing 12+ hours of continuous operation with rapid charging capabilities.',
    icon: Zap,
  },
  {
    name: 'Safety First',
    description: 'ISO-certified collision avoidance systems with 360° LiDAR and thermal vision integration.',
    icon: Shield,
  },
  {
    name: 'Global Connectivity',
    description: 'Seamless 5G and satellite uplink for remote fleet management and OTA updates anywhere on Earth.',
    icon: Globe,
  },
  {
    name: 'Humanoid Dexterity',
    description: 'Multi-axis manipulators with sub-millimeter precision, mimicking human hand movements for delicate tasks.',
    icon: Bot,
  },
  {
    name: 'Predictive Maintenance',
    description: 'Self-diagnostic systems that predict component wear and schedule maintenance before failure occurs.',
    icon: Activity,
  },
];

export default function Features() {
  return (
    <div className="bg-zinc-950 py-24 sm:py-32" id="technology">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-cyan-400 font-mono">CORE TECHNOLOGY</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engineered for the Impossible
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Our R-Series bots are built on a proprietary platform that combines rugged durability with cutting-edge intelligence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400 shadow-lg shadow-cyan-900/20">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
