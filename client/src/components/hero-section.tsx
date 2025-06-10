import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                👋 Available for new opportunities
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I'm <span className="gradient-text">Aadesh Sain</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Frontend Developer & AI Expert
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about crafting clean, functional & beautiful user interfaces with modern technologies and AI integration.
            </motion.p>
            
            {/* Role Badges */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Badge className="gradient-bg text-primary-foreground border-0">React Developer</Badge>
              <Badge className="gradient-bg-2 text-primary-foreground border-0">Next.js Expert</Badge>
              <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-primary-foreground border-0">AI Integration</Badge>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="gradient-bg text-primary-foreground border-0 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:border-primary hover:text-primary transition-all duration-300"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500" 
                alt="Aadesh Sain - Frontend Developer" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl animate-float"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-pink-500/20"></div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 gradient-bg-2 rounded-full flex items-center justify-center text-white text-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              >
                ⚛️
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 gradient-bg rounded-full flex items-center justify-center text-white"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                💻
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
