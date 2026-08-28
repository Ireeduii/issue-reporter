"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Plus,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
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
  };
}

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/issues")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setIssues(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "RESOLVED":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Шийдвэрлэсэн
          </span>
        );
      case "IN_PROGRESS":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
            <Clock className="w-3.5 h-3.5" /> Шалгаж байна
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            <AlertCircle className="w-3.5 h-3.5" /> Хүлээгдэж буй
          </span>
        );
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 my-10">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-emerald-600 transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Нүүр хуудас
          </Link>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            Иргэдийн мэдээллэсэн гомдлууд
          </h1>
        </div>
        <Link
          href="/issues/new"
          className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors flex items-center gap-2 shadow-md shadow-emerald-600/20 text-sm"
        >
          <Plus className="w-4 h-4" /> Гомдол гаргах
        </Link>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-20 text-zinc-500">Уншиж байна...</div>
      ) : issues.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 mb-4">
            Одоогоор ямар нэгэн гомдол бүртгэгдээгүй байна.
          </p>
          <Link
            href="/issues/new"
            className="text-emerald-600 font-medium hover:underline text-sm"
          >
            Анхны гомдлыг мэдээлэх &rarr;
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                    {issue.title}
                  </h3>
                  {getStatusBadge(issue.status)}
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                  {issue.description}
                </p>

                {issue.imageUrl && (
                  <div className="mb-4 overflow-hidden rounded-lg h-40 bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={issue.imageUrl}
                      alt={issue.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  {issue.address ||
                    `${issue.latitude.toFixed(2)}, ${issue.longitude.toFixed(2)}`}
                </span>
                <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
