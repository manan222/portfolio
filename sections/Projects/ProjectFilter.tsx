"use client";

interface Props {
  categories: readonly string[];
  selected: string;
  onChange: (value: any) => void;
}

export default function ProjectFilter({
  categories,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>  {
            console.log('filter is called',category)
            onChange(category)
          }}
          className={`rounded-full px-5 py-2 transition ${
            selected === category
              ? "bg-indigo-600 text-white"
              : "border border-white/10 bg-white/5 text-gray-300 hover:border-indigo-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}