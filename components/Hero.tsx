"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
            Кофе для тех,
            <br />
            <span className="text-primary">кто не спит</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Авторская кофейня в центре Москвы. Своя обжарка, свежая выпечка, работаем круглосуточно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Забронировать столик
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all"
            >
              Посмотреть меню
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
