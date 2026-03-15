import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/landing" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-cta font-bold text-foreground text-sm">
            M
          </div>
          <span className="text-lg font-bold text-foreground">Megsy AI</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#calculator" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Calculator</a>
          <a href="#commission" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Commission</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button className="gradient-cta border-0 text-foreground hover:opacity-90" asChild>
            <Link to="/login">Start Earning</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">How It Works</a>
              <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Features</a>
              <a href="#calculator" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Calculator</a>
              <a href="#commission" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Commission</a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" asChild><Link to="/login">Sign In</Link></Button>
                <Button className="gradient-cta border-0 text-foreground" asChild><Link to="/login">Start Earning</Link></Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
