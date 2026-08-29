"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  AlertCircle,
  MapPin,
  ShieldAlert,
} from "lucide-react";

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
    <div className="max-w-6xl mx-auto p-6 my-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-emerald-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Нүүр хуудас
          </Link>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <ShieldAlert className="w-8 h-8 text-emerald-600" /> Админ
            Удирдлагын Самбар
          </h1>
        </div>
        <Link
          href="/issues"
          className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium rounded-xl transition-colors text-sm"
        >
          Иргэний харагдац руу очих
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-20 text-zinc-500">Уншиж байна...</div>
      ) : issues.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500">Бүртгэгдсэн гомдол байхгүй байна.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  <th className="p-4">Гомдол</th>
                  <th className="p-4">Байршил</th>
                  <th className="p-4">Огноо</th>
                  <th className="p-4">Одоогийн статус</th>
                  <th className="p-4 text-right">Статус өөрчлөх</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm">
                {issues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="font-bold text-zinc-900 dark:text-zinc-100">
                        {issue.title}
                      </div>
                      <div className="text-xs text-zinc-500 line-clamp-1 max-w-xs">
                        {issue.description}
                      </div>
                    </td>
                    <td className="p-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        {issue.address ||
                          `${issue.latitude.toFixed(2)}, ${issue.longitude.toFixed(2)}`}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-zinc-500">
                      {new Date(issue.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      {issue.status === "RESOLVED" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Шийдвэрлэсэн
                        </span>
                      )}
                      {issue.status === "IN_PROGRESS" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                          <Clock className="w-3.5 h-3.5" /> Шалгаж байна
                        </span>
                      )}
                      {issue.status === "PENDING" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                          <AlertCircle className="w-3.5 h-3.5" /> Хүлээгдэж буй
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <select
                        value={issue.status}
                        onChange={(e) =>
                          handleStatusChange(issue.id, e.target.value)
                        }
                        className="px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
  );
}
