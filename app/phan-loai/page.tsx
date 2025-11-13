import Link from "next/link";

export default function PhanLoaiPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center py-8 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
          Chọn một phân loại
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Vui lòng chọn một phân loại từ carousel trên trang chủ
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          <span>←</span>
          <span>Quay lại trang chủ</span>
        </Link>
      </div>
    </div>
  );
}
