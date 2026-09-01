import Link from "next/link";
import { Manrope } from "next/font/google";
import {
  MapPin,
  PlusCircle,
  ListChecks,
  ShieldAlert,
  Compass,
} from "lucide-react";
import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import InteractiveBackground from "./components/InteractiveBackground";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default async function HomePage() {
  const { userId } = await auth();

  return (
    <div
      className={`${manrope.className} min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#6E9765] selection:text-white`}
    >
      <InteractiveBackground />

      <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#8CB183]">
          <div className="p-2 rounded-xl bg-[#6E9765]/10 border border-[#6E9765]/20">
            <ShieldAlert className="w-5 h-5 text-[#8CB183]" />
          </div>
          <span className="font-extrabold tracking-wide">CityVoice</span>
        </div>

        <div className="flex items-center gap-4">
          {userId ? (
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all hidden sm:inline-block"
              >
                Админ самбар
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <button className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Нэвтрэх
                </button>
              </SignInButton>

              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all">
                  Бүртгүүлэх
                </button>
              </SignUpButton>
            </div>
          )}

          <UserButton />
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E9765]/10 border border-[#6E9765]/20 text-[#A9C4A0] text-xs font-medium mb-8 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#8CB183]" /> Улаанбаатар хотын
          иргэдийн дуу хоолой
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Хотынхоо асуудлыг хамтдаа шийдэцгээе
        </h1>

        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl font-normal leading-relaxed">
          Гудамжны гэрэл эвдэрсэн, нүхэн гарц гэмтсэн, хог овоорсон зэрэг
          асуудлыг зураг болон байршилтай нь шууд мэдээлж, явцыг нь хянаарай.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/issues/new"
            className="px-6.5 py-3.5 bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white font-semibold rounded-2xl shadow-xl shadow-[#6E9765]/20 transition-all flex items-center gap-2.5 active:scale-95"
          >
            <PlusCircle className="w-5 h-5" /> Гомдол мэдээллэх
          </Link>
          <Link
            href="/issues"
            className="px-6.5 py-3.5 bg-slate-900/80 border border-slate-800 hover:bg-slate-800/80 font-semibold rounded-2xl transition-all flex items-center gap-2.5 text-slate-200 backdrop-blur-sm active:scale-95"
          >
            <ListChecks className="w-5 h-5 text-[#8CB183]" /> Бүх гомдлуудыг
            харах
          </Link>
        </div>

        <Link
          href="/how-it-works"
          className="mt-6 text-sm font-medium text-slate-500 hover:text-[#A9C4A0] transition-colors flex items-center gap-1.5"
        >
          <Compass className="w-4 h-4" /> Систем хэрхэн ажилладаг талаар унших
        </Link>
      </main>

      <footer className="w-full max-w-6xl mx-auto p-6 text-center text-xs text-slate-500 border-t border-slate-900">
        CityVoice Platform © {new Date().getFullYear()} — Public Service Issue
        Reporter
      </footer>
    </div>
  );
}
