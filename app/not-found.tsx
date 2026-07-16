import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-6">
      <h1 className="text-8xl font-black text-indigo-500">404</h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-lg text-center text-gray-400">
        The page you are looking for doesn&apost; exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 text-white transition hover:bg-indigo-500"
      >
        Back Home
      </Link>
    </main>
  );
}