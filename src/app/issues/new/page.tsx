// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { MapPin, Loader2, ArrowLeft } from "lucide-react";
// import Link from "next/link";

// export default function NewIssuePage() {
//   const router = useRouter();
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [latitude, setLatitude] = useState<number | null>(null);
//   const [longitude, setLongitude] = useState<number | null>(null);
//   const [address, setAddress] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [locating, setLocating] = useState(false);

//   const handleGetLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Таны хөтөч байршил дэмжихгүй байна.");
//       return;
//     }

//     setLocating(true);
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//         setAddress(
//           `Өргөрөг: ${position.coords.latitude.toFixed(4)}, Уртраг: ${position.coords.longitude.toFixed(4)}`,
//         );
//         setLocating(false);
//       },
//       (error) => {
//         console.error(error);
//         alert("Байршил авахад алдаа гарлаа. GPS-ээ асаана уу.");
//         setLocating(false);
//       },
//     );
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title || !description || latitude === null || longitude === null) {
//       alert("Бүх талбарыг бөглөж, байршлаа заавал оруулна уу.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("/api/issues", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           title,
//           description,
//           latitude,
//           longitude,
//           address,
//           imageUrl,
//         }),
//       });

//       if (res.ok) {
//         router.push("/issues");
//       } else {
//         alert("Гомдол илгээхэд алдаа гарлаа.");
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 my-10">
//       <div className="mb-6">
//         <Link
//           href="/"
//           className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-emerald-600 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4" /> Нүүр хуудас руу буцах
//         </Link>
//       </div>

//       <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
//         <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
//           Шинэ хотын асуудал / Гомдол мэдээлэх
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
//               Гарчиг (Жишээ нь: Том нүх үүссэн)
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               placeholder="Асуудлыг товч бичнэ үү"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
//               Дэлгэрэнгүй тайлбар
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//               rows={4}
//               className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               placeholder="Ямар асуудал гарсан тухай дэлгэрэнгүй..."
//             />
//           </div>

//           {/* bairshil avah hseg */}
//           <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
//                 <MapPin className="w-4 h-4 text-emerald-600" /> Байршил
//                 тодорхойлох
//               </span>
//               <button
//                 type="button"
//                 onClick={handleGetLocation}
//                 disabled={locating}
//                 className="px-3.5 py-1.5 text-xs font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
//               >
//                 {locating && <Loader2 className="w-3 h-3 animate-spin" />}
//                 Миний байршлыг авах
//               </button>
//             </div>
//             <p className="text-xs text-zinc-500 dark:text-zinc-400">
//               {address
//                 ? address
//                 : "Байршил сонгогдоогүй байна. Товчийг дарж GPS байршлаа оруулна уу."}
//             </p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
//               Зургийн линк (URL)
//             </label>
//             <input
//               type="url"
//               value={imageUrl}
//               onChange={(e) => setImageUrl(e.target.value)}
//               className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//               placeholder="https://example.com/image.jpg"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
//           >
//             {loading && <Loader2 className="w-4 h-4 animate-spin" />}
//             Гомдол илгээх
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Manrope } from "next/font/google";
import {
  MapPin,
  Loader2,
  ArrowLeft,
  ImageIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import InteractiveBackground from "@/app/components/InteractiveBackground";

// Keep this in sync with app/page.tsx. If you've since moved font loading
// into app/layout.tsx, delete this block and the className below.
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const DESCRIPTION_MAX = 500;

export default function NewIssuePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const titleMissing = attemptedSubmit && title.trim() === "";
  const descriptionMissing = attemptedSubmit && description.trim() === "";
  const locationMissing = attemptedSubmit && latitude === null;

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Таны хөтөч байршил дэмжихгүй байна.");
      return;
    }

    setLocating(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setAddress(
          `Өргөрөг: ${position.coords.latitude.toFixed(4)}, Уртраг: ${position.coords.longitude.toFixed(4)}`,
        );
        setLocating(false);
      },
      (error) => {
        console.error(error);
        setLocationError("Байршил авахад алдаа гарлаа. GPS-ээ асаана уу.");
        setLocating(false);
      },
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    setSubmitError("");

    if (
      !title.trim() ||
      !description.trim() ||
      latitude === null ||
      longitude === null
    ) {
      setSubmitError("Бүх заавал талбарыг бөглөж, байршлаа оруулна уу.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          latitude,
          longitude,
          address,
          imageUrl,
        }),
      });

      if (res.ok) {
        router.push("/issues");
      } else {
        setSubmitError("Гомдол илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Сүлжээний алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${manrope.className} min-h-screen text-slate-100`}>
      <InteractiveBackground />

      <div className="max-w-2xl mx-auto px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#8CB183] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Нүүр хуудас руу буцах
        </Link>

        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-2xl shadow-black/20 p-6 sm:p-9">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E9765]/10 border border-[#6E9765]/20 text-[#A9C4A0] text-xs font-medium mb-4">
              Шинэ гомдол
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Хотын асуудлаа мэдээлээрэй
            </h1>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Байршил болон зургаа хавсаргаснаар холбогдох алба хурдан хариу
              өгөх боломжтой болно.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Title */}
            <div>
              <label className="flex items-baseline justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-300">
                  Гарчиг
                </span>
                <span className="text-xs text-slate-600">Заавал</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-3.5 py-2.5 bg-slate-950/60 border rounded-lg text-slate-100 placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6E9765] focus:border-transparent ${
                  titleMissing ? "border-rose-500/60" : "border-slate-800"
                }`}
                placeholder="Жишээ нь: Гудамжинд том нүх үүссэн"
              />
              {titleMissing && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Гарчиг заавал бөглөнө
                  үү.
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="flex items-baseline justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-300">
                  Дэлгэрэнгүй тайлбар
                </span>
                <span className="text-xs text-slate-600">
                  {description.length}/{DESCRIPTION_MAX}
                </span>
              </label>
              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value.slice(0, DESCRIPTION_MAX))
                }
                rows={4}
                className={`w-full px-3.5 py-2.5 bg-slate-950/60 border rounded-lg text-slate-100 placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6E9765] focus:border-transparent resize-none ${
                  descriptionMissing ? "border-rose-500/60" : "border-slate-800"
                }`}
                placeholder="Асуудал хэзээ, хаана, ямар байдлаар үүссэн тухай дэлгэрэнгүй бичнэ үү..."
              />
              {descriptionMissing && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Тайлбар заавал бөглөнө
                  үү.
                </p>
              )}
            </div>

            {/* Location */}
            <div
              className={`p-4 rounded-lg border transition-colors ${
                locationMissing
                  ? "bg-rose-500/[0.04] border-rose-500/40"
                  : "bg-slate-950/40 border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8CB183]" /> Байршил
                  тодорхойлох
                </span>
                <button
                  type="button"
                  onClick={handleGetLocation}
                  disabled={locating}
                  className="shrink-0 px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] disabled:opacity-60 text-white rounded-md transition-all flex items-center gap-1.5"
                >
                  {locating && <Loader2 className="w-3 h-3 animate-spin" />}
                  Миний байршлыг авах
                </button>
              </div>

              {latitude !== null ? (
                <p className="text-xs text-[#A9C4A0] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {address}
                </p>
              ) : (
                <p className="text-xs text-slate-500">
                  Байршил сонгогдоогүй байна. Товчийг дарж GPS байршлаа оруулна
                  уу.
                </p>
              )}
              {locationError && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {locationError}
                </p>
              )}
              {locationMissing && !locationError && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Байршлаа заавал
                  оруулна уу.
                </p>
              )}
            </div>

            {/* Image */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5">
                <span className="text-sm font-medium text-slate-300">
                  Зургийн линк
                </span>
                <span className="text-xs text-slate-600">(заавал биш)</span>
              </label>
              <div className="relative">
                <ImageIcon className="w-4 h-4 text-slate-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-slate-950/60 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6E9765] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {imageUrl && (
                <div className="mt-3 rounded-lg overflow-hidden border border-slate-800 bg-slate-950/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt="Зургийн урьдчилсан харагдац"
                    className="w-full max-h-48 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            {submitError && (
              <div className="px-4 py-3 rounded-lg bg-rose-500/[0.06] border border-rose-500/30 text-sm text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" /> {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#6E9765] to-[#45613F] hover:from-[#7CA773] hover:to-[#3B5336] disabled:opacity-70 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#6E9765]/20 active:scale-[0.99]"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Гомдол илгээх
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
