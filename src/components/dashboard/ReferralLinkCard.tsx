import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QRCodeSVG } from "qrcode.react";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookShareButton,
} from "react-share";
import { toast } from "sonner";

interface ReferralLinkCardProps {
  referralCode: string;
}

export function ReferralLinkCard({ referralCode }: ReferralLinkCardProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const referralUrl = `https://megsyai.com?ref=${referralCode}`;
  const shareTitle = "Join Megsy AI with my referral link and get started!";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">YOUR REFERRAL LINK</h3>

        <div className="flex gap-2">
          <Input
            value={referralUrl}
            readOnly
            className="bg-card font-mono text-sm border-border"
          />
          <Button onClick={handleCopy} variant="outline" className="shrink-0 font-bold text-xs uppercase">
            {copied ? "COPIED" : "COPY"}
          </Button>
          <Button onClick={() => setShowQR(!showQR)} variant="outline" className="shrink-0 font-bold text-xs uppercase">
            QR
          </Button>
        </div>

        {showQR && (
          <div className="flex justify-center rounded-lg bg-card p-6">
            <QRCodeSVG value={referralUrl} size={180} fgColor="#A855F7" />
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground font-bold uppercase">Share:</span>
          <div className="flex gap-2">
            <WhatsappShareButton url={referralUrl} title={shareTitle}>
              <span className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase cursor-pointer">WHATSAPP</span>
            </WhatsappShareButton>
            <TwitterShareButton url={referralUrl} title={shareTitle}>
              <span className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase cursor-pointer">X</span>
            </TwitterShareButton>
            <TelegramShareButton url={referralUrl} title={shareTitle}>
              <span className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase cursor-pointer">TELEGRAM</span>
            </TelegramShareButton>
            <FacebookShareButton url={referralUrl}>
              <span className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors uppercase cursor-pointer">FACEBOOK</span>
            </FacebookShareButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
