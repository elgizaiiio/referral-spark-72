import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, QrCode, Share2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TelegramShareButton,
  FacebookShareButton,
  WhatsappIcon,
  XIcon,
  TelegramIcon,
  FacebookIcon,
} from "react-share";
import { toast } from "sonner";

interface ReferralLinkCardProps {
  referralCode: string;
}

export function ReferralLinkCard({ referralCode }: ReferralLinkCardProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const referralUrl = `https://smart-hub-egy.lovable.app?ref=${referralCode}`;
  const shareTitle = "Join Megsy AI with my referral link and get started!";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    toast.success("Link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Share2 className="h-5 w-5 text-primary" />
          Your Referral Link
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={referralUrl}
            readOnly
            className="bg-card font-mono text-sm"
          />
          <Button onClick={handleCopy} variant="outline" size="icon" className="shrink-0">
            {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button onClick={() => setShowQR(!showQR)} variant="outline" size="icon" className="shrink-0">
            <QrCode className="h-4 w-4" />
          </Button>
        </div>

        {showQR && (
          <div className="flex justify-center rounded-lg bg-card p-6">
            <QRCodeSVG value={referralUrl} size={180} fgColor="hsl(239, 84%, 67%)" />
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Share via:</span>
          <div className="flex gap-2">
            <WhatsappShareButton url={referralUrl} title={shareTitle}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton url={referralUrl} title={shareTitle}>
              <XIcon size={32} round />
            </TwitterShareButton>
            <TelegramShareButton url={referralUrl} title={shareTitle}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <FacebookShareButton url={referralUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
