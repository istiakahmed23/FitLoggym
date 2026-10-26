
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 bg-[#0B0C10]">
      {/* Animated spinner */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-[#252832] border-t-[#C2F800]" />

        <div className="h-7 w-7 rounded-full bg-[#C2F800]/20" />
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-lg font-bold tracking-wide text-white">
          Loading...
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Preparing your workout experience
        </p>
      </div>
    </div>
  );
}
