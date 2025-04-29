
import { Eye, Heart, Search, Shield, Spa } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  return (
    <div className="glass-panel p-6 hover:bg-cyber-purple/5 transition-colors h-full">
      <div className="p-3 mb-4 inline-flex items-center justify-center rounded-lg bg-cyber-purple/10 border border-cyber-purple/30">
        <Icon className="h-6 w-6 text-cyber-purple" />
      </div>
      <h3 className="text-xl font-cyber font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Eye,
      title: "Advanced Skin Analysis",
      description: "Upload a photo of your skin for a detailed analysis of your skin type, concerns, and conditions."
    },
    {
      icon: Search,
      title: "Product Recommendations",
      description: "Receive personalized product recommendations based on your specific skin needs and concerns."
    },
    {
      icon: Spa,
      title: "Spa Services",
      description: "Get recommendations for spa services and treatments that address your unique skincare needs."
    },
    {
      icon: Heart,
      title: "Personalized Routines",
      description: "Develop customized skincare routines with step-by-step guidance for morning and evening."
    },
    {
      icon: Shield,
      title: "Spa Industry Support",
      description: "Spa owners can get suggestions to enhance service offerings and stay updated on industry trends."
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-4 inline-block relative">
            <span className="text-gradient neon-text">Advanced Features</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            SKINCARE GPT combines cutting-edge AI technology with comprehensive skincare knowledge to deliver personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
