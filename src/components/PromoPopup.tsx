import { useState, useEffect } from "react";
import { X, Flame, Calendar, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PromoItem {
  id: string;
  title: string;
  description: string;
  type: "product" | "event";
  discount?: string;
  date?: string;
  image?: string;
  link: string;
}

const promoItems: PromoItem[] = [
  {
    id: "1",
    title: "Weekend Special: Nyama Choma Platter",
    description:
      "Get 20% off our signature Nyama Choma platter every Friday & Saturday!",
    type: "product",
    discount: "20% OFF",
    link: "/menu",
  },
  {
    id: "2",
    title: "Afrobeats Night",
    description:
      "Join us every Friday for the hottest Afrobeats with DJ Mziki spinning all night!",
    type: "event",
    date: "Every Friday",
    link: "/experiences",
  },
  {
    id: "3",
    title: "Happy Hour Cocktails",
    description:
      "Enjoy 2-for-1 cocktails every day from 4PM - 7PM. Dawa, Passion Mojito & more!",
    type: "product",
    discount: "2 FOR 1",
    link: "/menu",
  },
];

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  useEffect(() => {
    // Show popup after 3 seconds, only once per session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenPromoPopup", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Rotate promos every 5 seconds
    if (isOpen) {
      const interval = setInterval(() => {
        setCurrentPromo((prev) => (prev + 1) % promoItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const promo = promoItems[currentPromo];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-br from-card via-card to-primary/10 rounded-2xl shadow-2xl border border-primary/30 overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header decoration */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        {/* Content */}
        <div className="p-6 pt-8">
          {/* Badge */}
          <div className="flex items-center justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold">
              {promo.type === "product" ? (
                <>
                  <Gift className="w-4 h-4" />
                  Special Offer
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  Upcoming Event
                </>
              )}
            </span>
          </div>

          {/* Discount/Date badge */}
          {(promo.discount || promo.date) && (
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold">
                <Flame className="w-3 h-3" />
                {promo.discount || promo.date}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-display font-bold text-center text-foreground mb-3">
            {promo.title}
          </h3>

          {/* Description */}
          <p className="text-center text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
            {promo.description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              onClick={() => setIsOpen(false)}
            >
              <Link to={promo.link}>
                {promo.type === "product" ? "View Menu" : "See Events"}
              </Link>
            </Button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Maybe later
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {promoItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPromo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPromo
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`View promo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
