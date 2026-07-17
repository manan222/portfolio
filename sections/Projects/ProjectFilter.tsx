"use client";

interface Props {
  categories: readonly string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function ProjectFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => {
        const active = selected === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`
              relative overflow-hidden rounded-full border
              px-6 py-2.5 text-sm font-medium
              transition-all duration-300 ease-in-out
              ${
                active
                  ? "border-indigo-500 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "border-white/10 bg-white/[0.04] text-gray-300 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
              }
            `}
          >
            {active && (
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20" />
            )}

            <span className="relative z-10">
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}