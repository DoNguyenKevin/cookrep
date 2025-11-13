import Link from "next/link";
import { getCategoryById, getFoodById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ categoryId: string; foodId: string }>;
};

export default async function FoodDetailPage({ params }: Props) {
  const { categoryId, foodId } = await params;

  const category = getCategoryById(categoryId);
  if (!category) {
    notFound();
  }

  const food = getFoodById(categoryId, foodId);
  if (!food) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
            Trang chủ
          </Link>
          <span>/</span>
          <Link
            href={`/phan-loai/${categoryId}`}
            className="hover:text-zinc-900 dark:hover:text-white"
          >
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-white">{food.name}</span>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg">
          {/* Hero Section */}
          <div
            className={`h-80 bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
          >
            <span className="text-9xl">{food.emoji}</span>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12">
            {/* Title & Description */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
                {food.name}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                {food.description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <span>⏱</span>
                  <span className="font-medium">{food.cookTime}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <span>📊</span>
                  <span className="font-medium">Độ khó: {food.difficulty}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                  <span>📋</span>
                  <span className="font-medium">{food.ingredients.length} nguyên liệu</span>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  Nguyên liệu
                </h2>
                <ul className="space-y-3">
                  {food.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="text-lg mt-0.5">✓</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                  Cách làm
                </h2>
                <ol className="space-y-4">
                  {food.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 pt-1">
                        {instruction}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                href={`/phan-loai/${categoryId}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <span>←</span>
                <span>Quay lại danh sách</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
