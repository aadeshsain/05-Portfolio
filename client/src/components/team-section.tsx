import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [

  {
    name: "Sukhdev Sain",
    role: "PHP Developer",
    image: "/sukhi.jpg",
    bio: "Full-stack engineer specializing in scalable backend architectures and PHP development."
  },
  {
    name: "Gourav Sain",
    role: "PHP Developer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    bio: "Full-stack engineer specializing in scalable backend architectures and PHP development."
  },
  {
    name: "Vishal Sain",
    role: "full stack developer",
    image: "/vishal.jpg",
    bio: "Full stack developer in php laravel and react with 2+ years of experience."
  },
{ 
  name: "Amit Sain",
  role: "UI/UX Designer",
  image: "/mitu.jpg",
  bio: "Full-stack engineer specializing in scalable backend architectures and PHP development."
},
    {
    name: "Neha Sain",
    role: "frontend developer",
    image: "/neha.jpg",
    bio: "Creative designer with 2+ years of experience in crafting beautiful and intuitive user interfaces."
  },
  {
    name: "Anu sain",
    role: "react and wordpress developer",
    image: "/anu.jpg",
    bio: "react and wordpress designer in ittechxpert within 2+ years of experience."
  },
  {
    name: "Shivani Sain",
    role: "wordpress developer",
    image: "/shiwanisain.jpg",
    bio: "Creative designer with 2+ years of experience in crafting beautiful and intuitive user interfaces."
  },
  {
    name: "Parul Sain",
    role: "Security Specialist",
    image: "/sukhi.jpg",
    bio: "Creative designer with 2+ years of experience in crafting beautiful and intuitive user interfaces."
  },

];

export function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Talented individuals working together to create exceptional digital experiences
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
