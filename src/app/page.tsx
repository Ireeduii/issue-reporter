import Link from "next/link";
import { MapPin, PlusCircle, ListChecks, ShieldAlert } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col justify-between">
      {/* Header / Nav */}
      <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400">
          <ShieldAlert className="w-6 h-6" />
          <span>CityVoice</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/issues"
            className="text-sm font-medium hover:text-emerald-600 transition-colors"
          >
            Гомдлууд харах
          </Link>
          <Link
            href="/issues/new"
            className="px-4 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Гомдол гаргах
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
          <MapPin className="w-3.5 h-3.5" /> Улаанбаатар хотын иргэдийн дуу
          хоолой
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Хотынхоо асуудлыг хамтдаа шийдэцгээе
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl">
          Гудамжны гэрэл эвдэрсэн, нүхэн гарц эвдэрсэн, хог овоорсон зэрэг
          асуудлыг зураг болон байршилтай нь шууд мэдээлж, явцыг нь хянаарай.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/issues/new"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" /> Гомдол мэдээлэх
          </Link>
          <Link
            href="/issues"
            className="px-6 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-medium rounded-xl transition-all flex items-center gap-2 text-zinc-900 dark:text-zinc-100"
          >
            <ListChecks className="w-5 h-5 text-emerald-500" /> Бүх гомдлуудыг
            харах
          </Link>
        </div>
      </main>

      <footer className="w-full max-w-6xl mx-auto p-6 text-center text-xs text-zinc-500 border-t border-zinc-200 dark:border-zinc-800/80">
        CityVoice Platform © {new Date().getFullYear()} — Public Service Issue
        Reporter
      </footer>
    </div>
  );
}
