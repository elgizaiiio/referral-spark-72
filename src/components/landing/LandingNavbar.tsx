import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/landing" className="flex items-center gap-2.5">
          <img src={logo} alt="Megsy" className="h-9 w-9 rounded-xl" />
          <span className="text-lg font-bold text-foreground">Megsy AI</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">How It Works</a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">Features</a>
          <a href="#calculator" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">Calculator</a>
          <a href="#faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground font-medium">FAQ</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button className="gradient-cta border-0 text-foreground hover:opacity-90 rounded-full font-bold px-6" asChild>
            <Link to="/login">Start Earning</Link>
          </Button>
        </div>

        {/* Mobile toggle - text only, no icon */}
        <button className="md:hidden text-foreground font-bold text-sm uppercase" onClick={() => setOpen(!open)}>
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground font-medium">How It Works</a>
              <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground font-medium">Features</a>
              <a href="#calculator" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground font-medium">Calculator</a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground font-medium">FAQ</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" asChild><Link to="/login">Log in</Link></Button>
                <Button className="gradient-cta border-0 text-foreground rounded-full font-bold" asChild><Link to="/login">Start Earning</Link></Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
