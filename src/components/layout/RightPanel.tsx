import GlassCard from "../components/ui/GlassCard";

export default function RightPanel() {
  return (
    <aside
      className="
      hidden
      2xl:flex
      flex-col
      gap-6
      w-[340px]
      p-6
    "
    >
      <GlassCard className="p-6">
        <h3 className="text-white font-semibold mb-4">
          Live Insights
        </h3>

        <div className="space-y-4">
          <div>
            <p className="text-slate-400 text-sm">
              Active Members
            </p>

            <h2 className="text-3xl font-bold text-white">
              847
            </h2>
          </div>

          <div>
            <p className="text-slate-400 text-sm">
              Revenue Today
            </p>

            <h2 className="text-3xl font-bold gradient-text">
              $4,920
            </h2>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-6">
        <h3 className="text-white font-semibold mb-4">
          Activity Feed
        </h3>

        <div className="space-y-4">
          {[
            "John renewed membership",
            "Sarah checked in",
            "Premium plan upgraded",
            "Workout assigned",
          ].map((item) => (
            <div
              key={item}
              className="
              text-sm
              text-slate-300
              border-b
              border-white/5
              pb-3
            "
            >
              {item}
            </div>
          ))}
        </div>
      </GlassCard>
    </aside>
  );
}