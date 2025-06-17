import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [

{
  name: "Sukhdev Sain",
  role: "PHP Developer",
  image: "/sukhi.jpg",
  bio: "Backend developer with a strong focus on PHP and building high-performance, scalable systems."
},
{
  name: "Gourav Sain",
  role: "PHP Developer",
  image: "./goru.jpg",
  bio: "Experienced PHP developer skilled in creating robust backend solutions and maintaining scalable infrastructures."
},
{
  name: "Vishal Sain",
  role: "Full Stack Developer",
  image: "/vishal.jpg",
  bio: "Skilled in Laravel and React, delivering full-stack solutions with over 2 years of hands-on experience."
},
{
  name: "Amit Sain",
  role: "UI/UX Designer",
  image: "/mitu.jpg",
  bio: "UI/UX expert with a keen eye for design and a background in building responsive web experiences."
},
{
  name: "Neha Sain",
  role: "Frontend Developer",
  image: "/neha.jpg",
  bio: "Frontend specialist passionate about designing clean, user-friendly interfaces with modern frameworks."
},
{
  name: "Anu Sain",
  role: "React & WordPress Developer",
  image: "/anu.jpg",
  bio: "React and WordPress developer at ITTechXpert, delivering dynamic web solutions for over 2 years."
},
{
  name: "Shivani Sain",
  role: "WordPress Developer",
  image: "/shiwanisain.jpg",
  bio: "Focused on crafting elegant, custom WordPress themes with a strong foundation in UI design."
},
// {
//   name: "Parul Sain",
//   role: "Security Specialist",
//   image: "/sukhi.jpg",
//   bio: "IT security specialist ensuring data protection and application integrity with a creative problem-solving approach."
// },

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
