import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiVite, SiGit, SiPayloadcms 
} from "react-icons/si";
import { Bot, Zap } from "lucide-react";

const skills = [
  { name: "HTML5", icon: SiHtml5, gradient: "gradient-bg" },
  { name: "CSS3", icon: SiCss3, gradient: "gradient-bg" },
  { name: "Tailwind", icon: SiTailwindcss, gradient: "gradient-bg-2" },
  { name: "JavaScript", icon: SiJavascript, gradient: "gradient-bg" },
  { name: "TypeScript", icon: SiTypescript, gradient: "gradient-bg-2" },
  { name: "React", icon: SiReact, gradient: "gradient-bg" },
  { name: "Next.js", icon: SiNextdotjs, gradient: "gradient-bg-2" },
  { name: "Vite", icon: SiVite, gradient: "gradient-bg" },
  { name: "GSAP", icon: Zap, gradient: "gradient-bg-2" },
  { name: "Git", icon: SiGit, gradient: "gradient-bg" },
  { name: "Payload CMS", icon: SiPayloadcms, gradient: "gradient-bg-2" },
  { name: "AI Tools", icon: Bot, gradient: "gradient-bg" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover text-center group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mx-auto mb-4 ${skill.gradient} rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
