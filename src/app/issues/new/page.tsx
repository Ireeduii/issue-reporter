"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

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

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Таны хөтөч байршил дэмжихгүй байна.");
      return;
    }

    setLocating(true);
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
        alert("Байршил авахад алдаа гарлаа. GPS-ээ асаана уу.");
        setLocating(false);
      },
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || latitude === null || longitude === null) {
      alert("Бүх талбарыг бөглөж, байршлаа заавал оруулна уу.");
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
        alert("Гомдол илгээхэд алдаа гарлаа.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-10">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-emerald-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Нүүр хуудас руу буцах
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Шинэ хотын асуудал / Гомдол мэдээлэх
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Гарчиг (Жишээ нь: Том нүх үүссэн)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Асуудлыг товч бичнэ үү"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Дэлгэрэнгүй тайлбар
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Ямар асуудал гарсан тухай дэлгэрэнгүй..."
            />
          </div>

          {/* bairshil avah hseg */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" /> Байршил
                тодорхойлох
              </span>
              <button
                type="button"
                onClick={handleGetLocation}
                disabled={locating}
                className="px-3.5 py-1.5 text-xs font-medium bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
              >
                {locating && <Loader2 className="w-3 h-3 animate-spin" />}
                Миний байршлыг авах
              </button>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {address
                ? address
                : "Байршил сонгогдоогүй байна. Товчийг дарж GPS байршлаа оруулна уу."}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
              Зургийн линк (URL)
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 border rounded-lg dark:bg-zinc-800 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Гомдол илгээх
          </button>
        </form>
      </div>
    </div>
  );
}
