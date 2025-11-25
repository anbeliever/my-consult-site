"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto grid min-h-[60vh] max-w-5xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:px-6">
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl"
          >
            1〜10室の小規模オーナー専門の運営代行サービス
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg"
          >
            副業オーナーも安心。本業を続けながら“手間ゼロ”で売上・口コミ改善を実現します。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start"
          >
            <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
              運営代行手数料12%〜
            </div>
            <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
              口コミ改善が得意
            </div>
            <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
              小規模運営者に特化
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="rounded-lg bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-slate-800"
            >
              無料オンライン相談を予約する
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/hotel-management-graphic.svg"
            alt="Hotel and revenue management graphic"
            width={400}
            height={300}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}