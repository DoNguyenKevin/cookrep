import Link from "next/link";
import { getCategoryById, getFoodsInCategory } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;

  const category = getCategoryById(id);
  if (!category) {
    notFound();
  }

  const foods = getFoodsInCategory(id);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-4"
          >
            <span>←</span>
            <span>Quay lại trang chủ</span>
          </Link>

          <div
            className={`p-8 rounded-3xl bg-gradient-to-br ${category.gradient} text-white`}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl">{category.emoji}</span>
              <div>
                <h1 className="text-4xl font-bold">{category.name}</h1>
                <p className="text-lg opacity-90">{category.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Foods List */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
            Danh sách các món ăn phổ biến
          </h2>

          {foods.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Chưa có món ăn nào trong danh mục này
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food) => (
                <Link
                  key={food.id}
                  href={`/thuc-an/${id}/${food.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
                      <span className="text-6xl">{food.emoji}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                        {food.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                        {food.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>⏱ {food.cookTime}</span>
                        <span>📊 {food.difficulty}</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                        <button className="w-full py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200 transition-colors">
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
