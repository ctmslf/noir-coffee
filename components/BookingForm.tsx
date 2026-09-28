"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    comment: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name.length < 2) {
      setErrorMessage("Имя должно содержать минимум 2 символа");
      setStatus("error");
      return;
    }

    if (!/^\+?[0-9\s\-()]{10,}$/.test(formData.phone)) {
      setErrorMessage("Введите корректный номер телефона");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", date: "", time: "", comment: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Не удалось отправить заявку. Попробуйте позже.");
    }
  };

  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
    "20:00", "21:00", "22:00", "23:00"
  ];

  return (
    <section id="booking" className="py-20 sm:py-32 bg-dark-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Забронировать столик
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-dark border border-dark-border rounded-2xl p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="Иван"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="+7 (999) 999-99-99"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="date" className="block text-sm font-semibold mb-2">
                Дата *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-semibold mb-2">
                Время *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Выберите время</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-semibold mb-2">
              Комментарий
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Особые пожелания или количество гостей"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === "loading" ? "Отправка..." : "Забронировать"}
          </button>

          {status === "success" && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">Заявка отправлена! Мы свяжемся с вами в ближайшее время.</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
