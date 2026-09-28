import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "НУАР — Авторская кофейня в Москве",
  description: "Кофе для тех, кто не спит. Своя обжарка, пекарня, работаем 24/7. Доставка за 30 минут.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
