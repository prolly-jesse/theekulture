import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface MenuItem {
  name: string;
  price: number | number[];
  description?: string;
}

interface MenuCategoryProps {
  title: string;
  icon?: ReactNode;
  items: MenuItem[];
}

const MenuCategory = ({ title, icon, items }: MenuCategoryProps) => {
  return (
    <Card className="p-6 kulture-shadow hover:kulture-glow transition-smooth animate-scale-in border-2 border-border/50 hover:border-primary/30">
      <div className="mb-6 flex items-center gap-3">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="font-display text-3xl font-bold text-foreground">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4 border-b border-border/30 pb-3 last:border-0 last:pb-0 transition-smooth hover:translate-x-1"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              )}
            </div>
            <div className="flex-shrink-0 font-display text-lg font-bold text-primary">
              Ksh {item.price}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MenuCategory;
