import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Terminal, Apple } from "lucide-react";
import { SiLinux } from "react-icons/si";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A passionate frontend developer with expertise in modern web technologies and AI integration
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with multiple monitors" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                "Crafting clean, functional & beautiful UIs."
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                With extensive experience in modern frontend development, I specialize in creating responsive, accessible, and performance-optimized web applications. My passion lies in bridging the gap between design and functionality.
              </p>
            </div>
            
            {/* Experience */}
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">ITTechXpert</h4>
                      <p className="text-muted-foreground mb-2">Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">
                        Developed private UIs and worked on real-world projects using modern technologies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tools & Environment */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Preferred Tools & Environment</h4>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Terminal className="h-3 w-3" />
                      Cursor AI
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Apple className="h-3 w-3" />
                      macOS
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <SiLinux className="h-3 w-3" />
                      Linux
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
