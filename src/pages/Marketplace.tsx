import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Leaf, Search, ShoppingCart, Star, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Ashwagandha Capsules",
      brand: "Dabur",
      price: "₹299",
      originalPrice: "₹399",
      rating: 4.5,
      reviews: 234,
      image: "/placeholder.svg",
      category: "Stress Relief",
      description: "Premium Ashwagandha extract for stress relief and energy boost",
      benefits: ["Reduces stress", "Improves energy", "Better sleep"]
    },
    {
      id: 2,
      name: "Triphala Churna",
      brand: "Baidyanath",
      price: "₹149",
      originalPrice: "₹199",
      rating: 4.3,
      reviews: 156,
      image: "/placeholder.svg",
      category: "Digestive Health",
      description: "Traditional herbal powder for digestive wellness",
      benefits: ["Improves digestion", "Detoxifies body", "Natural laxative"]
    },
    {
      id: 3,
      name: "Brahmi Oil",
      brand: "Hamdard",
      price: "₹189",
      originalPrice: "₹249",
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg",
      category: "Mental Wellness",
      description: "Pure Brahmi oil for mental clarity and hair health",
      benefits: ["Enhances memory", "Reduces anxiety", "Healthy hair"]
    },
    {
      id: 4,
      name: "Chyawanprash",
      brand: "Dabur",
      price: "₹349",
      originalPrice: "₹449",
      rating: 4.6,
      reviews: 312,
      image: "/placeholder.svg",
      category: "Immunity",
      description: "Traditional immunity booster with 40+ herbs",
      benefits: ["Boosts immunity", "Rich in vitamin C", "Energy enhancer"]
    },
    {
      id: 5,
      name: "Turmeric Tablets",
      brand: "Himalaya",
      price: "₹199",
      originalPrice: "₹259",
      rating: 4.4,
      reviews: 178,
      image: "/placeholder.svg",
      category: "Anti-inflammatory",
      description: "Curcumin-rich turmeric for inflammation relief",
      benefits: ["Anti-inflammatory", "Joint health", "Antioxidant rich"]
    },
    {
      id: 6,
      name: "Arjuna Capsules",
      brand: "Baidyanath",
      price: "₹249",
      originalPrice: "₹319",
      rating: 4.2,
      reviews: 95,
      image: "/placeholder.svg",
      category: "Heart Health",
      description: "Arjuna extract for cardiovascular wellness",
      benefits: ["Heart health", "Blood pressure support", "Circulation"]
    }
  ];

  const categories = ["All", "Stress Relief", "Digestive Health", "Mental Wellness", "Immunity", "Anti-inflammatory", "Heart Health"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AyurvedaCareConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
            <Button variant="outline">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart (0)
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Trusted Herbal <span className="text-primary">Marketplace</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover authentic Ayurvedic products from verified brands like Dabur, Hamdard, and Baidyanath
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for herbs, remedies, or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 mb-8">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-semibold">Categories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                    <Leaf className="h-16 w-16 text-primary/50" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        by {product.brand}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2">
                      {product.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-primary fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <Button className="shadow-warm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Marketplace;