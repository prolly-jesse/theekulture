import MenuHero from "@/components/MenuHero";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import WeeklyExperience from "@/components/WeeklyExperience";
import MenuCategory from "@/components/MenuCategory";
import { menuData } from "@/data/menuData";
import {
  Coffee,
  Croissant,
  Sunrise,
  Cake,
  UtensilsCrossed,
  Baby,
  Leaf,
  Droplet,
  Pizza,
  Martini,
  Wine,
  Beer,
  Sparkles,
  GlassWater,
  Star,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Import images from assets folder
import interior1 from "@/assets/interior-1.jpg";
import foodDisplay from "@/assets/food-display.jpg";
import community from "@/assets/community.jpg";
import barArea from "@/assets/bar-area.jpg";
import seating from "@/assets/seating.jpg";
import atmosphere from "@/assets/atmosphere.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pattern-grid">
      <MenuHero />

      {/* Main Introduction */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 transition-smooth animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold kulture-gradient bg-clip-text text-transparent">
            A Community for You
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Thee Kulture is more than just a venue—it's a modern-day community
            space where people from all walks of life can gather to experience
            peace, culture, and creative connection. Our concept draws
            inspiration from places like reading clubs and wellness circles—a
            sanctuary built on intention, light, and values.
          </p>
          <p className="text-lg text-foreground/80 italic">
            It is a meeting ground for the mind and soul, not simply a party
            venue but a haven of social harmony.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-8 h-auto p-2 bg-card border-2 border-border">
            <TabsTrigger
              value="food"
              className="data-[state=active]:kulture-gradient data-[state=active]:text-white"
            >
              Food & Breakfast
            </TabsTrigger>
            <TabsTrigger
              value="desserts"
              className="data-[state=active]:kulture-gradient data-[state=active]:text-white"
            >
              Desserts & Treats
            </TabsTrigger>
            <TabsTrigger
              value="drinks"
              className="data-[state=active]:kulture-gradient data-[state=active]:text-white"
            >
              Beverages
            </TabsTrigger>
            <TabsTrigger
              value="alcohol"
              className="data-[state=active]:kulture-gradient data-[state=active]:text-white"
            >
              Bar Menu
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food" className="space-y-8">
            <MenuCategory
              title="Coffee & Tea"
              icon={<Coffee size={32} />}
              items={menuData.coffeeAndTea}
            />

            <MenuCategory
              title="Croissants & Combos"
              icon={<Croissant size={32} />}
              items={menuData.croissantsAndCombos}
            />

            <MenuCategory
              title="Breakfast Combos"
              icon={<Sunrise size={32} />}
              items={menuData.breakfastCombos}
            />

            <MenuCategory
              title="Food Items"
              icon={<UtensilsCrossed size={32} />}
              items={menuData.foodItems}
            />

            <MenuCategory
              title="Kids' Corner"
              icon={<Baby size={32} />}
              items={menuData.kidsCorner}
            />

            <MenuCategory
              title="Healthy Bites"
              icon={<Leaf size={32} />}
              items={menuData.healthyBites}
            />

            <MenuCategory
              title="Kulture Platters (Sharing)"
              icon={<Pizza size={32} />}
              items={menuData.kulturePlatters}
            />
          </TabsContent>

          <TabsContent value="desserts" className="space-y-8">
            <MenuCategory
              title="Cakes, Cookies & Desserts"
              icon={<Cake size={32} />}
              items={menuData.cakesAndDesserts}
            />
          </TabsContent>

          <TabsContent value="drinks" className="space-y-8">
            <MenuCategory
              title="Smoothies"
              icon={<Droplet size={32} />}
              items={menuData.smoothies}
            />

            <MenuCategory
              title="Mocktails"
              icon={<Martini size={32} />}
              items={menuData.mocktails}
            />
            <MenuCategory
              title="Cocktails (Classic)"
              icon={<Martini size={32} />}
              items={menuData.cocktails}
            />
            <MenuCategory
              title="Cocktails (Signature)"
              icon={<Martini size={32} />}
              items={menuData.signature}
            />
            <MenuCategory
              title="Specialty Teas"
              icon={<Coffee size={32} />}
              items={menuData.specialtyTeas}
            />

            <MenuCategory
              title="Hydration Corner"
              icon={<GlassWater size={32} />}
              items={menuData.hydration}
            />
          </TabsContent>

          <TabsContent value="alcohol" className="space-y-8">
            <MenuCategory
              title="Thee Kulture Shots (30ml)"
              icon={<Sparkles size={32} />}
              items={menuData.shots}
            />

            <MenuCategory
              title="Wine by the Glass"
              icon={<Wine size={32} />}
              items={menuData.wine}
            />

            <MenuCategory
              title="Beers"
              icon={<Beer size={32} />}
              items={menuData.beers}
            />

            <MenuCategory
              title="Ciders"
              icon={<Beer size={32} />}
              items={menuData.ciders}
            />

            <MenuCategory
              title="RTDs (Ready to Drink)"
              icon={<Beer size={32} />}
              items={menuData.rtds}
            />

            <MenuCategory
              title="On Glass - Pour Decisions (120ml)"
              icon={<Wine size={32} />}
              items={menuData.spirits}
            />

            <MenuCategory
              title="Mixers"
              icon={<Droplet size={32} />}
              items={menuData.mixers}
            />
          </TabsContent>
        </Tabs>
      </div>

      <AboutSection />

      <ContactSection />

      <WeeklyExperience />

      {/* Gallery Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 transition-smooth animate-fade-in mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold kulture-gradient bg-clip-text text-transparent">
            Experience Thee Kulture
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Step inside our sanctuary of flavor, culture, and connection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={interior1}
              alt="Thee Kulture interior ambiance"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  Our Space
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Where comfort meets culture
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={foodDisplay}
              alt="Thee Kulture interior ambiance"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  Our Space
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Where comfort meets culture
                </p>
              </div>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={community}
              alt="Community gathering at Thee Kulture"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  Our Community
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Connection through culture
                </p>
              </div>
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={barArea}
              alt="Bar and beverage station"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  The Bar
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Craft beverages & cocktails
                </p>
              </div>
            </div>
          </div>

          {/* Image 5 */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={seating}
              alt="Comfortable seating arrangements"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  Relax & Connect
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Cozy corners for conversation
                </p>
              </div>
            </div>
          </div>

          {/* Image 6 */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary transition-all duration-300 aspect-square">
            <img
              src={atmosphere}
              alt="Evening atmosphere at Thee Kulture"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="font-display text-lg sm:text-xl font-semibold text-white">
                  The Vibe
                </p>
                <p className="text-sm text-white/80 mt-1">
                  Where moments become memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-border/50 bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Mission */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Star className="text-primary" size={28} />
                <h4 className="font-display text-2xl font-bold">Our Mission</h4>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                To create a safe, vibrant, and soulful space where people can
                gather to unwind, connect, and be inspired—through good food,
                great music, and a meaningful atmosphere that honors integrity
                and spiritual alignment.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="text-primary" size={28} />
                <h4 className="font-display text-2xl font-bold">Our Vision</h4>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                To redefine social spaces in Kenya and beyond by offering a
                culture-rich, respectful, and purpose-centered experience—one
                that celebrates creativity, community, and calmness.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="text-primary" size={28} />
                <h4 className="font-display text-2xl font-bold">Core Values</h4>
              </div>
              <ul className="text-foreground/80 text-sm space-y-2">
                <li>
                  <span className="font-semibold text-primary">Respect:</span>{" "}
                  For people, purpose, and presence
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Excellence:
                  </span>{" "}
                  In service, quality, and presentation
                </li>
                <li>
                  <span className="font-semibold text-primary">Integrity:</span>{" "}
                  No shortcuts. No shady dealings
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Moderation:
                  </span>{" "}
                  We embrace balance
                </li>
                <li>
                  <span className="font-semibold text-primary">
                    Creativity:
                  </span>{" "}
                  We celebrate innovation
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border/50">
            <div className="flex flex-col items-center gap-3">
              <Coffee className="text-primary" size={32} />
              <h3 className="font-display text-2xl font-bold">Thee Kulture</h3>
              <p className="text-muted-foreground">
                Where Flavor Meets Heritage
              </p>
              <p className="text-muted-foreground">
                © 2025 KEY ENT. Built with LOVE and modern web technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
