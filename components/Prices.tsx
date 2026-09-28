"use client";

import { motion } from "framer-motion";
import { PRICES } from "@/lib/constants";

export default function Prices() {
  return (
    <section id="prices" className="py-20 sm:py-32 bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Цены
          </h2>
          <p className="text-lg text-gray-400">
            Честные цены без накруток
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-dark border border-dark-border rounded-2xl overflow-hidden"
        >
          <div className="divide-y divide-dark-border">
            {PRICES.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 sm:p-8 hover:bg-dark-card/50 transition-colors"
              >
                <span className="text-lg sm:text-xl font-semibold">{item.name}</span>
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {item.price} ₽
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-500 mt-8"
        >
          * Цены указаны за стандартный объём 250 мл
        </motion.p>
      </div>
    </section>
  );
}
