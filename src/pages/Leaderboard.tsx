import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const achievements = [
  { title: "FIRST REFERRAL", desc: "Get your first referral signup", threshold: 1 },
  { title: "GETTING STARTED", desc: "Reach 5 active referrals", threshold: 5 },
  { title: "GROWING", desc: "Reach 10 active referrals", threshold: 10 },
  { title: "RISING STAR", desc: "Reach 25 active referrals", threshold: 25 },
  { title: "PRO PARTNER", desc: "Reach 50 active referrals", threshold: 50 },
  { title: "ELITE PARTNER", desc: "Reach 100 active referrals", threshold: 100 },
  { title: "LEGEND", desc: "Reach 250 active referrals", threshold: 250 },
  { title: "HALL OF FAME", desc: "Reach 500 active referrals", threshold: 500 },
];

export default function Leaderboard() {
  const { user } = useAuth();
  const { totalSignups, isLoading: statsLoading } = useReferralStats(user?.id);
  const { totalEarned, isLoading: earningsLoading } = useEarnings(user?.id);

  const isLoading = statsLoading || earningsLoading;

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-96" />
      </div>
    );
  }

  const unlockedCount = achievements.filter((a) => totalSignups >= a.threshold).length;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="heading-massive text-2xl sm:text-3xl lg:text-4xl text-foreground">LEADERBOARD</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Track your progress and unlock achievements</p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">YOUR STANDING</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-4">
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">REFERRALS</p>
              <p className="text-2xl sm:text-3xl font-black gradient-text mt-1">{totalSignups}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">EARNED</p>
              <p className="text-2xl sm:text-3xl font-black text-success mt-1">${totalEarned.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">RATE</p>
              <p className="text-2xl sm:text-3xl font-black text-foreground mt-1">20%</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">ACHIEVEMENTS</p>
              <p className="text-2xl sm:text-3xl font-black text-warning mt-1">{unlockedCount}/{achievements.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">ACHIEVEMENTS</h3>
          <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, i) => {
              const unlocked = totalSignups >= achievement.threshold;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl border p-3 sm:p-4 text-center transition-colors ${
                    unlocked
                      ? "border-primary/30 bg-primary/5"
                      : "border-border bg-card opacity-50"
                  }`}
                >
                  <p className="text-xl sm:text-2xl mt-1">{unlocked ? "🏆" : "🔒"}</p>
                  <p className="text-[10px] sm:text-xs font-bold text-foreground uppercase tracking-wider mt-2">{achievement.title}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{achievement.desc}</p>
                  <div className="mt-2">
                    <div className="w-full h-1.5 rounded-full bg-accent overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${Math.min((totalSignups / achievement.threshold) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      {Math.min(totalSignups, achievement.threshold)}/{achievement.threshold}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
