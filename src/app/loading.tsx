const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 border-4 border-[var(--card-border)] rounded-full" />
        {/* Spinning ring */}
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-cyan-500 border-r-cyan-500 rounded-full animate-spin" />
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
