import { motion } from "framer-motion";

const regions = [
  { name: "NORTH AMERICA", countries: "USA, Canada, Mexico" },
  { name: "EUROPE", countries: "UK, Germany, France, Spain, Italy, Netherlands + more" },
  { name: "ASIA PACIFIC", countries: "India, Japan, Australia, Singapore, South Korea + more" },
  { name: "MIDDLE EAST", countries: "UAE, Saudi Arabia, Egypt, Qatar + more" },
  { name: "SOUTH AMERICA", countries: "Brazil, Argentina, Colombia, Chile + more" },
  { name: "AFRICA", countries: "Nigeria, South Africa, Kenya, Ghana + more" },
];

export function GlobalReach() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading-massive text-3xl sm:text-5xl lg:text-7xl text-foreground">
            GLOBAL <span className="gradient-text">REACH</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm sm:text-base">Earn from referrals worldwide</p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-4 sm:p-6"
            >
              <h3 className="text-[10px] sm:text-sm font-black text-foreground tracking-wider">{region.name}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2">{region.countries}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
