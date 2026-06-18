const monoFont = "font-[ui-monospace,SFMono-Regular,Menlo,monospace]";

function ScraperMockup() {
  const rows = [
    { id: "#A8F2-2231", status: "Delivered", dot: "bg-emerald-400" },
    { id: "#B1C9-8847", status: "In transit", dot: "bg-amber-400" },
    { id: "#K042-1180", status: "Pending", dot: "bg-neutral-300 dark:bg-neutral-600" },
  ];
  return (
    <div className="flex h-full items-center justify-center bg-surface p-8">
      <div className="w-full max-w-[300px] rounded-xl bg-white p-4 shadow-[0_10px_34px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.02] dark:bg-[#16181b] dark:shadow-[0_10px_34px_rgba(0,0,0,0.4)] dark:ring-white/[0.06]">
        <div className="flex items-center gap-1.5 pb-3.5">
          <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <span className="h-2 w-2 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        </div>
        <div className="space-y-2.5">
          {rows.map((row) => (
            <div key={row.id} className={`flex items-center justify-between ${monoFont} text-[11px] text-neutral-500 dark:text-neutral-400`}>
              <span>{row.id}</span>
              <span className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RagMockup() {
  return (
    <div className="flex h-full items-center justify-center bg-surface p-8">
      <div className="w-full max-w-[300px] space-y-2.5">
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-neutral-900 px-3.5 py-2 text-[11px] leading-snug text-white dark:bg-white dark:text-neutral-900">
          How do I track my order?
        </div>
        <div className="w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2 text-[11px] leading-snug text-neutral-600 shadow-[0_8px_26px_rgba(15,23,42,0.05)] ring-1 ring-black/[0.015] dark:bg-[#16181b] dark:text-neutral-300 dark:shadow-[0_8px_26px_rgba(0,0,0,0.4)] dark:ring-white/[0.06]">
          You can track it from your dashboard.
          <span className={`mt-2 flex w-fit items-center gap-1 rounded-md bg-neutral-100 px-2 py-1 ${monoFont} text-[9px] text-neutral-400 dark:bg-white/[0.08] dark:text-neutral-400`}>
            source: orders.md
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ slug, cardImage, title }: { slug: string; cardImage?: string; title: string }) {
  const hasRealImage = cardImage && !cardImage.includes("placeholder");
  if (hasRealImage) {
    return <img src={cardImage} alt={title} className="h-full w-full object-cover" loading="lazy" />;
  }
  if (slug === "order-tracking-scraper") return <ScraperMockup />;
  if (slug === "rag-cs-assistant") return <RagMockup />;
  return <div className="h-full w-full bg-surface" />;
}
