// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   CheckCircle2,
//   Clock,
//   AlertCircle,
//   MapPin,
//   ShieldAlert,
// } from "lucide-react";

// interface Issue {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl?: string;
//   latitude: number;
//   longitude: number;
//   address?: string;
//   status: string;
//   createdAt: string;
//   user: {
//     name?: string;
//     email?: string;
//   };
// }

// export default function AdminClientView() {
//   const [issues, setIssues] = useState<Issue[]>([]);
//   const [loading, setLoading] = useState(true);

//   const fetchIssues = async () => {
//     try {
//       const res = await fetch("/api/issues");
//       const data = await res.json();
//       if (Array.isArray(data)) {
//         setIssues(data);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchIssues();
//   }, []);

//   const handleStatusChange = async (id: string, newStatus: string) => {
//     try {
//       const res = await fetch(`/api/issues/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (res.ok) {
//         setIssues((prev) =>
//           prev.map((issue) =>
//             issue.id === id ? { ...issue, status: newStatus } : issue,
//           ),
//         );
//       } else {
//         alert("Статус өөрчлөхөд алдаа гарлаа.");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 my-10">
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <Link
//             href="/"
//             className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-emerald-600 transition-colors mb-2"
//           >
//             <ArrowLeft className="w-4 h-4" /> Нүүр хуудас
//           </Link>
//           <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
//             <ShieldAlert className="w-8 h-8 text-emerald-600" /> Админ
//             Удирдлагын Самбар
//           </h1>
//         </div>
//         <Link
//           href="/issues"
//           className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium rounded-xl transition-colors text-sm"
//         >
//           Иргэний харагдац руу очих
//         </Link>
//       </div>

//       {loading ? (
//         <div className="text-center py-20 text-zinc-500">Уншиж байна...</div>
//       ) : issues.length === 0 ? (
//         <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
//           <p className="text-zinc-500">Бүртгэгдсэн гомдол байхгүй байна.</p>
//         </div>
//       ) : (
//         <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
//                   <th className="p-4">Гомдол</th>
//                   <th className="p-4">Байршил</th>
//                   <th className="p-4">Огноо</th>
//                   <th className="p-4">Одоогийн статус</th>
//                   <th className="p-4 text-right">Статус өөрчлөх</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm">
//                 {issues.map((issue) => (
//                   <tr
//                     key={issue.id}
//                     className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
//                   >
//                     <td className="p-4">
//                       <div className="font-bold text-zinc-900 dark:text-zinc-100">
//                         {issue.title}
//                       </div>
//                       <div className="text-xs text-zinc-500 line-clamp-1 max-w-xs">
//                         {issue.description}
//                       </div>
//                     </td>
//                     <td className="p-4 text-xs text-zinc-500">
//                       <span className="flex items-center gap-1">
//                         <MapPin className="w-3.5 h-3.5 text-emerald-600" />
//                         {issue.address ||
//                           `${issue.latitude.toFixed(2)}, ${issue.longitude.toFixed(2)}`}
//                       </span>
//                     </td>
//                     <td className="p-4 text-xs text-zinc-500">
//                       {new Date(issue.createdAt).toLocaleDateString()}
//                     </td>
//                     <td className="p-4">
//                       {issue.status === "RESOLVED" && (
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
//                           <CheckCircle2 className="w-3.5 h-3.5" /> Шийдвэрлэсэн
//                         </span>
//                       )}
//                       {issue.status === "IN_PROGRESS" && (
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
//                           <Clock className="w-3.5 h-3.5" /> Шалгаж байна
//                         </span>
//                       )}
//                       {issue.status === "PENDING" && (
//                         <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
//                           <AlertCircle className="w-3.5 h-3.5" /> Хүлээгдэж буй
//                         </span>
//                       )}
//                     </td>
//                     <td className="p-4 text-right space-x-2">
//                       <select
//                         value={issue.status}
//                         onChange={(e) =>
//                           handleStatusChange(issue.id, e.target.value)
//                         }
//                         className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                       >
//                         <option value="PENDING">Хүлээгдэж буй</option>
//                         <option value="IN_PROGRESS">Шалгаж байна</option>
//                         <option value="RESOLVED">Шийдвэрлэсэн</option>
//                       </select>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Manrope } from "next/font/google";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  ShieldAlert,
} from "lucide-react";

import InteractiveBackground from "@/app/components/InteractiveBackground";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

interface Issue {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  latitude: number;
  longitude: number;
  address?: string;
  status: string;
  createdAt: string;
  user: {
    name?: string;
    email?: string;
  };
}

export default function AdminClientView() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchIssues = async () => {
    try {
      const res = await fetch("/api/issues");
      const data = await res.json();
      if (Array.isArray(data)) {
        setIssues(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/issues/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setIssues((prev) =>
          prev.map((issue) =>
            issue.id === id ? { ...issue, status: newStatus } : issue,
          ),
        );
      } else {
        alert("Статус өөрчлөхөд алдаа гарлаа.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${manrope.className} min-h-screen text-slate-100`}>
      <InteractiveBackground />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#8CB183] transition-colors mb-3"
            >
              <ArrowLeft className="w-4 h-4" /> Нүүр хуудас
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              <ShieldAlert className="w-7 h-7 sm:w-8 sm:h-8 text-[#8CB183]" />
              Админ удирдлагын самбар
            </h1>
          </div>
          <Link
            href="/issues"
            className="px-4 py-2.5 bg-slate-900/70 border border-slate-800 hover:bg-slate-800/70 text-slate-200 font-medium rounded-xl transition-colors text-sm backdrop-blur-sm"
          >
            Иргэний харагдац руу очих
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-24 text-slate-500 text-sm">
            Уншиж байна...
          </div>
        ) : issues.length === 0 ? (
          <div className="text-center py-24 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              Бүртгэгдсэн гомдол байхгүй байна.
            </p>
          </div>
        ) : (
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden shadow-lg shadow-black/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/40 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="p-4">Гомдол</th>
                    <th className="p-4">Байршил</th>
                    <th className="p-4">Огноо</th>
                    <th className="p-4">Одоогийн статус</th>
                    <th className="p-4 text-right">Статус өөрчлөх</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-sm">
                  {issues.map((issue) => (
                    <tr
                      key={issue.id}
                      className="hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="font-bold text-slate-100">
                          {issue.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 max-w-xs">
                          {issue.description}
                        </div>
                      </td>
                      <td className="p-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8CB183]" />
                          {issue.address ||
                            `${issue.latitude.toFixed(2)}, ${issue.longitude.toFixed(2)}`}
                        </span>
                      </td>
                      <td className="p-4 text-xs text-slate-500">
                        {new Date(issue.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        {issue.status === "RESOLVED" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#6E9765]/10 border border-[#6E9765]/20 text-[#A9C4A0]">
                            <CheckCircle2 className="w-3.5 h-3.5" />{" "}
                            Шийдвэрлэсэн
                          </span>
                        )}
                        {issue.status === "IN_PROGRESS" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400">
                            <Clock className="w-3.5 h-3.5" /> Шалгаж байна
                          </span>
                        )}
                        {issue.status === "PENDING" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 border border-slate-700 text-slate-400">
                            <AlertCircle className="w-3.5 h-3.5" /> Хүлээгдэж
                            буй
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-right">
                        <select
                          value={issue.status}
                          onChange={(e) =>
                            handleStatusChange(issue.id, e.target.value)
                          }
                          className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-700 bg-slate-950/60 text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#6E9765] focus:border-transparent"
                        >
                          <option value="PENDING">Хүлээгдэж буй</option>
                          <option value="IN_PROGRESS">Шалгаж байна</option>
                          <option value="RESOLVED">Шийдвэрлэсэн</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
