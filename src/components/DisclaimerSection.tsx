
import CyberButton from "./CyberButton";

const DisclaimerSection = () => {
  return (
    <section id="disclaimer" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-4 inline-block relative">
            <span className="text-gradient neon-text">Legal Disclaimer</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Important information regarding the use of SKINCARE GPT
          </p>
        </div>
        
        <div className="glass-panel p-8 max-w-4xl mx-auto border border-cyber-purple/30">
          <div className="space-y-4 text-gray-300">
            <h3 className="text-xl font-cyber text-white">General Disclaimer</h3>
            <p>
              SKINCARE GPT is an AI tool designed to provide general skincare information and recommendations. While we strive for accuracy and helpful advice, all information provided should be considered as general guidance only and not as professional medical advice.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Not Medical Advice</h3>
            <p>
              The information provided by SKINCARE GPT is not intended to diagnose, treat, cure, or prevent any disease, skin condition, or health issue. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, dermatologist, or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Image Analysis Limitation</h3>
            <p>
              While SKINCARE GPT offers image analysis capabilities, this analysis is for general informational purposes only. The AI's interpretation of skin conditions through images has limitations and should not be relied upon for medical diagnosis. Skin conditions that appear similar visually may have different causes requiring different treatments.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Product Recommendations</h3>
            <p>
              Product recommendations provided by SKINCARE GPT are based on general knowledge about skincare ingredients and products. Individual results may vary, and we cannot guarantee that recommended products will work for everyone. Always patch test new products and discontinue use if irritation occurs.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Spa Services</h3>
            <p>
              Recommendations for spa services are provided for informational purposes only. AI WEB TOOLS LLC is not affiliated with, endorsing, or vouching for the quality of any specific spa service or establishment mentioned. Users should conduct their own research and due diligence before engaging any spa service.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Limitation of Liability</h3>
            <p>
              AI WEB TOOLS LLC and its affiliates, partners, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use of, or inability to use, SKINCARE GPT or any information provided by it.
            </p>
            
            <h3 className="text-xl font-cyber text-white mt-6">Privacy Policy</h3>
            <p>
              By using SKINCARE GPT, you acknowledge that you have read and understood our Privacy Policy. Please refer to OpenAI's Privacy Policy for more information on how your data is handled when using this AI tool.
            </p>
            
            <div className="pt-6 flex justify-center">
              <CyberButton variant="outline">
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Privacy Policy
                </a>
              </CyberButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
