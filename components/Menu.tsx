"use client";

import { motion } from "framer-motion";
import { Coffee, CupSoda, GlassWater, Milk, Leaf, Droplet } from "lucide-react";
import { MENU_ITEMS } from "@/lib/constants";

const iconMap: Record<string, any> = {
  coffee: Coffee,
  "cup-soda": CupSoda,
  "glass-water": GlassWater,
  milk: Milk,
  leaf: Leaf,
  droplet: Droplet,
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Наше меню
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Каждый напиток приготовлен с любовью из отборных зёрен свежей обжарки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MENU_ITEMS.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
