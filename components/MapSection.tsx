"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 sm:py-32 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Как нас найти
          </h2>
          <p className="text-lg text-gray-400">
            Центр Москвы, 5 минут от метро Чистые пруды
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-dark-border"
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e5a6a8e7c7b5e7f8e9c8d7e6f5a4b3c2d1e0f&amp;source=constructor"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
