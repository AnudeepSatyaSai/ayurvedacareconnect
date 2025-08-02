import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Bot, Calendar, BookOpen, Pill, Heart, Star, ArrowRight, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  const features = [
    {
      icon: <Pill className="h-8 w-8 text-primary" />,
      title: "Trusted Herbal Marketplace",
      description: "Browse and purchase verified Ayurvedic & Unani products from trusted brands like Dabur, Hamdard, and Baidyanath."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personalized Wellness Routines",
      description: "Create custom daily Ayurvedic care routines based on your body type, goals, and symptoms with smart reminders."
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Dr. Veda AI Assistant",
      description: "Get instant guidance on herbs, dosages, natural remedies, and wellness practices from our AI-powered Ayurvedic expert."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Daily Journal & Reminders",
      description: "Track your wellness journey with gentle check-ins, medicine reminders, and progress insights."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Ayurveda Learning Hub",
      description: "Discover ancient wisdom through bite-sized articles, videos, and visual guides on doshas, herbs, and rituals."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Expert Consultations",
      description: "Connect with certified Ayurvedic doctors and practitioners for personalized guidance and treatment plans."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "AyurvedaCareConnect helped me find the right herbs for my digestion issues. The AI guidance is amazing!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Finally, an app that makes Ayurveda simple and accessible. Love the daily routines feature.",
      rating: 5
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      text: "The herbal marketplace has authentic products and fast delivery. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">AyurvedaCareConnect</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a>
            {user ? (
              <div className="flex items-center gap-4 ml-4">
                <Button variant="outline" onClick={() => navigate('/marketplace')}>Marketplace</Button>
                <Button variant="outline" onClick={() => navigate('/wellness-journey')}>Wellness</Button>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4 ml-4">
                <Button variant="outline" onClick={() => navigate('/auth')}>Sign In</Button>
                <Button onClick={() => navigate('/auth')}>Get Started</Button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🌱 Your Daily Ayurvedic Wellness Companion
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Wellness rooted in 
            <span className="text-primary"> tradition</span>,
            <br />guided by AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover authentic Ayurvedic healing with personalized routines, AI-powered guidance, 
            and trusted herbal remedies - all in one calming space designed for modern wellness seekers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-warm" 
              onClick={() => user ? navigate('/wellness-journey') : navigate('/auth')}
            >
              Start Your Wellness Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6" 
              onClick={() => user ? navigate('/marketplace') : navigate('/auth')}
            >
              Explore Marketplace
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need for Ayurvedic wellness
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From shopping authentic herbs to building personalized routines, 
              we've made ancient wisdom accessible for modern life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Loved by wellness seekers across India
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who've transformed their health with authentic Ayurvedic wisdom
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to begin your Ayurvedic journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join AyurvedaCareConnect today and discover the perfect balance of ancient wisdom and modern convenience.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-6 shadow-warm" 
            onClick={() => user ? navigate('/wellness-journey') : navigate('/auth')}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Start your wellness journey today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">AyurvedaCareConnect</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2024 AyurvedaCareConnect. Wellness rooted in tradition, guided by AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
