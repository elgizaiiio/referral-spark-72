import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useReferralStats } from "@/hooks/useReferralStats";
import { useEarnings } from "@/hooks/useEarnings";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

// Note: In a real app, this would come from a Supabase edge function
// aggregating all partners' stats. For now, we show the user's own ranking
// context with anonymized sample data.
const sampleLeaders = [
  { rank: 1, name: "Partner #A7F2", referrals: 347, earned: "$12,450.00", country: "United States" },
  { rank: 2, name: "Partner #K3D1", referrals: 289, earned: "$10,230.00", country: "United Kingdom" },
  { rank: 3, name: "Partner #M9B4", referrals: 234, earned: "$8,920.00", country: "Germany" },
  { rank: 4, name: "Partner #P5E8", referrals: 198, earned: "$7,150.00", country: "Canada" },
  { rank: 5, name: "Partner #R2C6", referrals: 176, earned: "$6,340.00", country: "Australia" },
  { rank: 6, name: "Partner #T8F3", referrals: 152, earned: "$5,470.00", country: "Netherlands" },
  { rank: 7, name: "Partner #V4A9", referrals: 134, earned: "$4,820.00", country: "France" },
  { rank: 8, name: "Partner #X1G7", referrals: 121, earned: "$4,350.00", country: "India" },
  { rank: 9, name: "Partner #Z6H2", referrals: 98, earned: "$3,520.00", country: "Brazil" },
  { rank: 10, name: "Partner #B3J5", referrals: 87, earned: "$3,130.00", country: "Japan" },
];

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
    <div className="space-y-6">
      <div>
        <h1 className="heading-massive text-3xl lg:text-4xl text-foreground">LEADERBOARD</h1>
        <p className="text-sm text-muted-foreground mt-1">See how you stack up against other Megsy AI partners</p>
      </div>

      {/* Your Stats */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">YOUR STANDING</h3>
          <div className="grid gap-4 sm:grid-cols-4">
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">YOUR REFERRALS</p>
              <p className="text-3xl font-black gradient-text mt-1">{totalSignups}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">TOTAL EARNED</p>
              <p className="text-3xl font-black text-success mt-1">${totalEarned.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">COMMISSION RATE</p>
              <p className="text-3xl font-black text-foreground mt-1">20%</p>
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">ACHIEVEMENTS</p>
              <p className="text-3xl font-black text-warning mt-1">{unlockedCount}/{achievements.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Partners */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">TOP 10 PARTNERS</h3>
          <div className="space-y-2">
            {sampleLeaders.map((leader, i) => (
              <motion.div
                key={leader.rank}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center justify-between rounded-xl p-4 ${
                  leader.rank <= 3 ? "bg-primary/5 border border-primary/20" : "bg-background border border-border"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-lg font-black w-8 text-center ${
                    leader.rank === 1 ? "text-warning" :
                    leader.rank === 2 ? "text-muted-foreground" :
                    leader.rank === 3 ? "text-orange-400" :
                    "text-muted-foreground"
                  }`}>
                    #{leader.rank}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{leader.name}</p>
                    <p className="text-xs text-muted-foreground">{leader.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-black text-foreground">{leader.referrals}</p>
                    <p className="text-xs text-muted-foreground">referrals</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-success">{leader.earned}</p>
                    <p className="text-xs text-muted-foreground">earned</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">ACHIEVEMENTS</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, i) => {
              const unlocked = totalSignups >= achievement.threshold;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl border p-4 text-center transition-colors ${
                    unlocked
                      ? "border-primary/30 bg-primary/5"
                      : "border-border bg-card opacity-50"
                  }`}
                >
                  <p className="text-2xl mt-1">{unlocked ? "🏆" : "🔒"}</p>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mt-2">{achievement.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{achievement.desc}</p>
                  <div className="mt-2">
                    <div className="w-full h-1.5 rounded-full bg-accent overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${Math.min((totalSignups / achievement.threshold) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.min(totalSignups, achievement.threshold)}/{achievement.threshold}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">CLIMB THE LEADERBOARD</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Top partners use a mix of content marketing, social media, email campaigns, and community engagement.
            Visit the Resources page for ready-to-use templates, or check Analytics for insights on optimizing your performance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
