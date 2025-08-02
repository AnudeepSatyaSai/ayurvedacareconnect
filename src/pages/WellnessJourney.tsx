import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Brain, Zap, Moon, Sun, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WellnessJourney = () => {
  const navigate = useNavigate();

  const treatments = [
    {
      id: 1,
      name: "Stress Relief Program",
      duration: "4 weeks",
      sessions: 12,
      price: "₹2,999",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "Comprehensive stress management using Ayurvedic principles and meditation",
      benefits: ["Reduces cortisol levels", "Improves sleep quality", "Enhanced mental clarity"],
      includes: ["Daily meditation", "Herbal supplements", "Lifestyle guidance", "Weekly consultations"],
      suitable: "For working professionals and students experiencing chronic stress"
    },
    {
      id: 2,
      name: "Digestive Wellness Plan",
      duration: "6 weeks",
      sessions: 8,
      price: "₹3,499",
      icon: <Heart className="h-8 w-8 text-primary" />,
      description: "Restore digestive health with personalized diet plans and herbal remedies",
      benefits: ["Improved digestion", "Reduced bloating", "Better nutrient absorption"],
      includes: ["Custom diet plan", "Herbal formulations", "Cooking guidance", "Progress tracking"],
      suitable: "For individuals with digestive issues, IBS, or irregular eating habits"
    },
    {
      id: 3,
      name: "Energy Boost Therapy",
      duration: "3 weeks",
      sessions: 9,
      price: "₹2,499",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "Natural energy enhancement through Ayurvedic herbs and lifestyle changes",
      benefits: ["Increased vitality", "Better stamina", "Reduced fatigue"],
      includes: ["Energy-boosting herbs", "Exercise routines", "Sleep optimization", "Nutritional support"],
      suitable: "For those experiencing chronic fatigue or low energy levels"
    },
    {
      id: 4,
      name: "Sleep Restoration Program",
      duration: "5 weeks",
      sessions: 10,
      price: "₹2,799",
      icon: <Moon className="h-8 w-8 text-primary" />,
      description: "Achieve deep, restorative sleep with Ayurvedic sleep therapy",
      benefits: ["Better sleep quality", "Faster sleep onset", "Reduced night awakening"],
      includes: ["Sleep herbs", "Bedtime rituals", "Room optimization", "Relaxation techniques"],
      suitable: "For insomniacs and those with irregular sleep patterns"
    },
    {
      id: 5,
      name: "Immunity Strengthening",
      duration: "8 weeks",
      sessions: 16,
      price: "₹4,999",
      icon: <Sun className="h-8 w-8 text-primary" />,
      description: "Build robust immunity with traditional Ayurvedic immune-boosting protocols",
      benefits: ["Stronger immune system", "Fewer infections", "Faster recovery"],
      includes: ["Rasayana therapy", "Immunity herbs", "Detox protocols", "Lifestyle modifications"],
      suitable: "For those with weak immunity or frequent illnesses"
    },
    {
      id: 6,
      name: "Mind-Body Balance",
      duration: "12 weeks",
      sessions: 24,
      price: "₹6,999",
      icon: <Heart className="h-8 w-8 text-primary" />,
      description: "Comprehensive wellness program for overall mind-body harmony",
      benefits: ["Holistic wellness", "Emotional balance", "Physical vitality"],
      includes: ["Yoga therapy", "Meditation", "Herbal treatments", "Lifestyle coaching"],
      suitable: "For complete wellness transformation and preventive healthcare"
    }
  ];

  const consultationTypes = [
    {
      type: "Initial Consultation",
      duration: "60 minutes",
      price: "₹799",
      description: "Comprehensive health assessment and personalized treatment plan"
    },
    {
      type: "Follow-up Session",
      duration: "30 minutes", 
      price: "₹499",
      description: "Progress review and treatment adjustments"
    },
    {
      type: "Emergency Consultation",
      duration: "20 minutes",
      price: "₹999",
      description: "Urgent health concerns and immediate guidance"
    }
  ];

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
            <Button variant="outline" onClick={() => navigate('/marketplace')}>Marketplace</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            🌿 Personalized Wellness Programs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Start Your <span className="text-primary">Wellness Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your health with personalized Ayurvedic treatments designed for your unique body type and wellness goals
          </p>
        </div>
      </section>

      {/* Treatment Programs */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Wellness Treatment Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our evidence-based Ayurvedic programs, each designed to address specific health concerns
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <Card key={treatment.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    {treatment.icon}
                    <div>
                      <CardTitle className="text-xl">{treatment.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {treatment.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {treatment.sessions} sessions
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {treatment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {treatment.benefits.map((benefit, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Program Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {treatment.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Suitable For:</h4>
                    <p className="text-sm text-muted-foreground italic">
                      {treatment.suitable}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{treatment.price}</div>
                    <Button className="shadow-warm">
                      Start Program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Options */}
      <section className="px-4 py-16 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Expert Consultations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book one-on-one sessions with certified Ayurvedic practitioners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {consultationTypes.map((consultation, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{consultation.type}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{consultation.price}</div>
                  <CardDescription>{consultation.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{consultation.description}</p>
                  <Button variant="outline" className="w-full">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with a personalized consultation to find the perfect wellness program for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 shadow-warm">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/marketplace')}>
              Browse Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessJourney;