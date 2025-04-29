
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-cyber-purple/20 last:border-b-0">
      <button
        className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-cyber-purple" />
        ) : (
          <ChevronDown className="h-5 w-5 text-cyber-purple" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      question: "What is SKINCARE GPT?",
      answer: "SKINCARE GPT is an advanced AI assistant specifically trained to provide personalized skincare advice, analyze skin conditions through images, recommend products, and offer spa service suggestions. It can help both skincare enthusiasts and spa business owners with detailed recommendations and insights."
    },
    {
      question: "How does the skin analysis feature work?",
      answer: "Simply upload a clear photo of your skin, and our AI will analyze it to identify your skin type, potential concerns, and conditions. Based on this analysis, SKINCARE GPT provides personalized recommendations for products, routines, and treatments tailored to your unique needs."
    },
    {
      question: "How accurate is the skin analysis?",
      answer: "While SKINCARE GPT uses advanced computer vision technology to analyze skin, it's important to note that it's not a substitute for professional dermatological advice. The AI can identify common skin concerns and provide helpful recommendations, but for serious skin issues, we recommend consulting with a healthcare professional."
    },
    {
      question: "Can SKINCARE GPT recommend specific products?",
      answer: "Yes, SKINCARE GPT can recommend specific skincare products based on your skin type and concerns. It has access to a vast database of skincare products and can suggest options that match your specific needs, budget, and preferences."
    },
    {
      question: "How can spa owners benefit from SKINCARE GPT?",
      answer: "Spa owners can use SKINCARE GPT to get ideas for new service offerings, learn about the latest industry trends, receive guidance on treatment protocols, and get advice on business optimization. The AI can help in creating unique spa experiences and treatments that address current skincare needs and trends."
    },
    {
      question: "Is my data kept private when I use SKINCARE GPT?",
      answer: "Yes, your privacy is important to us. SKINCARE GPT does not store your images or personal data between sessions. Each interaction is treated as a new conversation, ensuring your information remains private and secure."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-cyber-dark/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-4 inline-block relative">
            <span className="text-gradient neon-text">Frequently Asked Questions</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Find answers to common questions about SKINCARE GPT and how it can help with your skincare needs
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-panel p-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
