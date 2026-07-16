export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050816]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />

        <h2 className="text-lg font-semibold text-white tracking-wide">
          Loading Portfolio...
        </h2>
      </div>
    </div>
  );
}