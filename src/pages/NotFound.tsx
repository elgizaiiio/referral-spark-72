import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
      </div>
      <div className="relative text-center max-w-md">
        <h1 className="heading-massive text-8xl lg:text-[12rem] gradient-text">404</h1>
        <p className="text-xl font-bold text-foreground mt-4 uppercase">Page Not Found</p>
        <p className="text-sm text-muted-foreground mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link to="/">
            <Button className="gradient-cta border-0 text-foreground hover:opacity-90 font-bold rounded-full px-8">
              GO TO DASHBOARD
            </Button>
          </Link>
          <Link to="/landing">
            <Button variant="outline" className="font-bold rounded-full px-8 uppercase text-xs">
              LANDING PAGE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
