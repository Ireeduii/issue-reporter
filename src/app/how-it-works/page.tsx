// // import Link from "next/link";
// // import {
// //   MapPin,
// //   PlusCircle,
// //   ShieldCheck,
// //   CheckCircle2,
// //   ArrowRight,
// //   ShieldAlert,
// //   FileText,
// //   Compass,
// // } from "lucide-react";

// // export default function HowItWorksPage() {
// //   const steps = [
// //     {
// //       number: "01",
// //       title: "Асуудлыг олж харах & Зурах",
// //       description:
// //         "Гудамжны гэрэл эвдэрсэн, нүхэн гарц гэмтсэн, хог овоорсон зэрэг тулгамдсан асуудлыг гар утсаараа зураг дарж баримтжуулна.",
// //       icon: FileText,
// //     },
// //     {
// //       number: "02",
// //       title: "Байршил болон мэдээллээ оруулах",
// //       description:
// //         "Систем дээр асуудал үүссэн ягшлыг (байршил) сонгож, холбогдох дэлгэрэнгүй тайлбарыг бичин шууд илгээнэ.",
// //       icon: MapPin,
// //     },
// //     {
// //       number: "03",
// //       title: "Админ болон систем хяналт",
// //       description:
// //         "Илгээсэн гомдол системд бүртгэгдэж, холбогдох албаны хүмүүс болон админууд шалган төлөвийг нь шинэчилнэ.",
// //       icon: ShieldCheck,
// //     },
// //     {
// //       number: "04",
// //       title: "Шийдвэрлэлтийн үр дүнг хянах",
// //       description:
// //         "Та өөрийн гаргасан гомдлынхоо явцыг цаг тухайд нь хянаж, асуудал бүрэн шийдвэрлэгдсэнийг харах боломжтой.",
// //       icon: CheckCircle2,
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-teal-500 selection:text-white">
// //       {/* Header */}
// //       <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between">
// //         <Link
// //           href="/"
// //           className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-teal-400"
// //         >
// //           <div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20">
// //             <ShieldAlert className="w-5 h-5 text-teal-400" />
// //           </div>
// //           <span className="font-sans font-extrabold tracking-wide">
// //             CityVoice
// //           </span>
// //         </Link>

// //         <div className="flex items-center gap-4">
// //           <Link
// //             href="/issues"
// //             className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
// //           >
// //             Гомдлууд харах
// //           </Link>
// //           <Link
// //             href="/issues/new"
// //             className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-teal-500/20 transition-all"
// //           >
// //             Гомдол гаргах
// //           </Link>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
// //         {/* Top Badge & Title */}
// //         <div className="text-center max-w-2xl mx-auto mb-16">
// //           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-medium mb-6 backdrop-blur-md">
// //             <Compass className="w-3.5 h-3.5 text-teal-400" /> Системийн заавар
// //           </div>

// //           <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
// //             CityVoice хэрхэн ажилладаг вэ?
// //           </h1>

// //           <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
// //             Иргэдийн дуу хоолойг холбогдох байгууллагад хүргэж, Улаанбаатар
// //             хотынхоо асуудлыг хурдан шуурхай шийдвэрлэхэд туслах 4 энгийн алхам.
// //           </p>
// //         </div>

// //         {/* Steps Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
// //           {steps.map((step, index) => {
// //             const Icon = step.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-teal-500/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
// //               >
// //                 <div className="absolute top-0 right-0 p-8 text-slate-800/40 font-black text-6xl pointer-events-none group-hover:text-teal-500/5 transition-colors">
// //                   {step.number}
// //                 </div>

// //                 <div>
// //                   <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
// //                     <Icon className="w-6 h-6" />
// //                   </div>

// //                   <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-300 transition-colors">
// //                     {step.title}
// //                   </h3>

// //                   <p className="text-slate-400 text-sm leading-relaxed">
// //                     {step.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* CTA Box */}
// //         <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-emerald-950/40 border border-teal-500/20 text-center relative overflow-hidden">
// //           <div className="relative z-10 max-w-xl mx-auto">
// //             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
// //               Хотынхоо төлөө өөрчлөлт авчицгаая
// //             </h2>
// //             <p className="text-slate-300 text-sm sm:text-base mb-8">
// //               Танд анзаарагдсан ямар нэгэн асуудал байна уу? Одоо л мэдээллэх
// //               цаг нь.
// //             </p>
// //             <div className="flex flex-wrap justify-center gap-4">
// //               <Link
// //                 href="/issues/new"
// //                 className="px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold rounded-2xl shadow-xl shadow-teal-500/25 transition-all flex items-center gap-2"
// //               >
// //                 <PlusCircle className="w-5 h-5" /> Гомдол мэдээлэх
// //               </Link>
// //               <Link
// //                 href="/issues"
// //                 className="px-6 py-3.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl transition-all flex items-center gap-2"
// //               >
// //                 Гомдлууд харах <ArrowRight className="w-4 h-4 text-teal-400" />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </main>

// //       {/* Footer */}
// //       <footer className="w-full max-w-6xl mx-auto p-6 text-center text-xs text-slate-500 border-t border-slate-900">
// //         CityVoice Platform © {new Date().getFullYear()} — Public Service Issue
// //         Reporter
// //       </footer>
// //     </div>
// //   );
// // }

// import Link from "next/link";
// import { Manrope } from "next/font/google";
// import {
//   MapPin,
//   PlusCircle,
//   ListChecks,
//   ShieldAlert,
//   Compass,
// } from "lucide-react";
// import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
// import InteractiveBackground from "../components/InteractiveBackground";

// const manrope = Manrope({
//   subsets: ["latin", "cyrillic"],
//   weight: ["400", "500", "600", "700", "800"],
// });

// export default async function HomePage() {
//   const { userId } = await auth();

//   return (
//     <div
//       className={`${manrope.className} min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#6E9765] selection:text-white`}
//     >
//       <InteractiveBackground />

//       <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between">
//         <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#8CB183]">
//           <div className="p-2 rounded-xl bg-[#6E9765]/10 border border-[#6E9765]/20">
//             <ShieldAlert className="w-5 h-5 text-[#8CB183]" />
//           </div>
//           <span className="font-extrabold tracking-wide">CityVoice</span>
//         </div>

//         <div className="flex items-center gap-4">
//           {/* <Link
//             href="/how-it-works"
//             className="text-sm font-medium text-slate-300 hover:text-[#8CB183] transition-colors hidden sm:inline-block"
//           >
//             Хэрхэн ажилладаг вэ
//           </Link> */}

//           {/* <Link
//             href="/issues"
//             className="text-sm font-medium text-slate-300 hover:text-[#8CB183] transition-colors hidden sm:inline-block"
//           >
//             Гомдлууд харах
//           </Link> */}

//           {userId ? (
//             <div className="flex items-center gap-3">
//               {/* <Link
//                 href="/my-issues"
//                 className="text-sm font-medium text-slate-300 hover:text-[#8CB183] transition-colors hidden sm:inline-block"
//               >
//                 Миний гомдлууд
//               </Link> */}
//               <Link
//                 href="/admin"
//                 className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all hidden sm:inline-block"
//               >
//                 Админ самбар
//               </Link>
//               <UserButton />
//             </div>
//           ) : (
//             <div className="flex items-center gap-2">
//               <SignInButton mode="modal">
//                 <button className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
//                   Нэвтрэх
//                 </button>
//               </SignInButton>

//               <SignUpButton mode="modal">
//                 <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all">
//                   Бүртгүүлэх
//                 </button>
//               </SignUpButton>
//             </div>
//           )}

//           {/* <Link
//             href="/issues/new"
//             className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all hidden sm:inline-block"
//           >
//             Гомдол гаргах
//           </Link> */}
//         </div>
//       </header>

//       <main className="flex-1 max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
//         <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E9765]/10 border border-[#6E9765]/20 text-[#A9C4A0] text-xs font-medium mb-8 backdrop-blur-md">
//           <MapPin className="w-3.5 h-3.5 text-[#8CB183]" /> Улаанбаатар хотын
//           иргэдийн дуу хоолой
//         </div>

//         <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
//           Хотынхоо асуудлыг хамтдаа шийдэцгээе
//         </h1>

//         <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl font-normal leading-relaxed">
//           Гудамжны гэрэл эвдэрсэн, нүхэн гарц гэмтсэн, хог овоорсон зэрэг
//           асуудлыг зураг болон байршилтай нь шууд мэдээлж, явцыг нь хянаарай.
//         </p>

//         <div className="flex flex-wrap items-center justify-center gap-4">
//           <Link
//             href="/issues/new"
//             className="px-6.5 py-3.5 bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white font-semibold rounded-2xl shadow-xl shadow-[#6E9765]/20 transition-all flex items-center gap-2.5 active:scale-95"
//           >
//             <PlusCircle className="w-5 h-5" /> Гомдол мэдээлэх
//           </Link>
//           <Link
//             href="/issues"
//             className="px-6.5 py-3.5 bg-slate-900/80 border border-slate-800 hover:bg-slate-800/80 font-semibold rounded-2xl transition-all flex items-center gap-2.5 text-slate-200 backdrop-blur-sm active:scale-95"
//           >
//             <ListChecks className="w-5 h-5 text-[#8CB183]" /> Бүх гомдлуудыг
//             харах
//           </Link>
//         </div>

//         <Link
//           href="/how-it-works"
//           className="mt-6 text-sm font-medium text-slate-500 hover:text-[#A9C4A0] transition-colors flex items-center gap-1.5"
//         >
//           <Compass className="w-4 h-4" /> Систем хэрхэн ажилладаг талаар унших
//         </Link>
//       </main>

//       <footer className="w-full max-w-6xl mx-auto p-6 text-center text-xs text-slate-500 border-t border-slate-900">
//         CityVoice Platform © {new Date().getFullYear()} — Public Service Issue
//         Reporter
//       </footer>
//     </div>
//   );
// }

import Link from "next/link";
import { Manrope } from "next/font/google";
import {
  MapPin,
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  FileText,
  Compass,
} from "lucide-react";
import InteractiveBackground from "../components/InteractiveBackground";

// Keep this in sync with the other pages. If you've since moved font
// loading into app/layout.tsx, delete this block and the className below.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Асуудлыг олж харах & Зурах",
      description:
        "Гудамжны гэрэл эвдэрсэн, нүхэн гарц гэмтсэн, хог овоорсон зэрэг тулгамдсан асуудлыг гар утсаараа зураг дарж баримтжуулна.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Байршил болон мэдээллээ оруулах",
      description:
        "Систем дээр асуудал үүссэн байршлыг сонгож, холбогдох дэлгэрэнгүй тайлбарыг бичин шууд илгээнэ.",
      icon: MapPin,
    },
    {
      number: "03",
      title: "Админ болон систем хяналт",
      description:
        "Илгээсэн гомдол системд бүртгэгдэж, холбогдох албаны хүмүүс болон админууд шалган төлөвийг нь шинэчилнэ.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Шийдвэрлэлтийн үр дүнг хянах",
      description:
        "Та өөрийн гаргасан гомдлынхоо явцыг цаг тухайд нь хянаж, асуудал бүрэн шийдвэрлэгдсэнийг харах боломжтой.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div
      className={`${manrope.className} min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#6E9765] selection:text-white`}
    >
      <InteractiveBackground />

      <header className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-[#8CB183]"
        >
          <div className="p-2 rounded-xl bg-[#6E9765]/10 border border-[#6E9765]/20">
            <ShieldAlert className="w-5 h-5 text-[#8CB183]" />
          </div>
          <span className="font-extrabold tracking-wide">CityVoice</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/issues"
            className="text-sm font-medium text-slate-300 hover:text-[#8CB183] transition-colors"
          >
            Гомдлууд харах
          </Link>
          <Link
            href="/issues/new"
            className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white rounded-xl shadow-lg shadow-[#6E9765]/20 transition-all"
          >
            Гомдол гаргах
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16">
        {/* Top Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6E9765]/10 border border-[#6E9765]/20 text-[#A9C4A0] text-xs font-medium mb-6 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#8CB183]" /> Системийн заавар
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            CityVoice хэрхэн ажилладаг вэ?
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Иргэдийн дуу хоолойг холбогдох байгууллагад хүргэж, Улаанбаатар
            хотынхоо асуудлыг хурдан шуурхай шийдвэрлэхэд туслах 4 энгийн алхам.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-[#6E9765]/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 p-8 text-slate-800/40 font-black text-6xl pointer-events-none group-hover:text-[#6E9765]/5 transition-colors">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#6E9765]/10 border border-[#6E9765]/20 flex items-center justify-center text-[#8CB183] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-[#A9C4A0] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1C2A1A]/60 via-slate-900 to-[#1C2A1A]/60 border border-[#6E9765]/20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Хотынхоо төлөө өөрчлөлт авчирцгаая
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Танд анзаарагдсан ямар нэгэн асуудал байна уу? Одоо л мэдээллэх
              цаг нь.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/issues/new"
                className="px-6 py-3.5 bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] text-white font-semibold rounded-2xl shadow-xl shadow-[#6E9765]/25 transition-all flex items-center gap-2"
              >
                <PlusCircle className="w-5 h-5" /> Гомдол мэдээллэх
              </Link>
              <Link
                href="/issues"
                className="px-6 py-3.5 bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl transition-all flex items-center gap-2"
              >
                Гомдлууд харах <ArrowRight className="w-4 h-4 text-[#8CB183]" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-6xl mx-auto p-6 text-center text-xs text-slate-500 border-t border-slate-900">
        CityVoice Platform © {new Date().getFullYear()} — Public Service Issue
        Reporter
      </footer>
    </div>
  );
}
