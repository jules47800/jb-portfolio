"use client";
import {motion} from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center p-10">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="text-center space-y-4">
        <h1 className="text-5xl font-semibold">404</h1>
        <p className="text-muted-foreground">Page introuvable</p>
        <Link href="/fr" className="inline-flex h-10 items-center rounded-2xl bg-[#007DBC] px-5 text-white hover:bg-[#0067A0]">Retour à l’accueil</Link>
      </motion.div>
    </main>
  );
}


