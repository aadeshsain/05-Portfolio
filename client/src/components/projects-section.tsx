// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github, Lock } from "lucide-react";

// const projects = [
//   {
//     name: "Blindshub",
//     category: "E-commerce",
//     description: "Modern e-commerce platform with responsive design, product catalog, and seamless user experience.",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "PHP", "CSS"],
//     isPrivate: false,
//     categoryColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
//   },
//   {
//     name: "Kid-ex",
//     category: "Educational",
//     description: "Interactive educational platform designed for children with engaging UI and learning modules.",
//     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "TypeScript", "GSAP"],
//     isPrivate: false,
//     categoryColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300"
//   },
//   {
//     name: "ITTechXpert",
//     category: "Enterprise",
//     description: "Private UI components and interfaces developed for enterprise-level applications and clients.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "Next.js", "Private"],
//     isPrivate: true,
//     categoryColor: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"
//   },
//     {
//     name: "Blindshub",
//     category: "E-commerce",
//     description: "Modern e-commerce platform with responsive design, product catalog, and seamless user experience.",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "Next.js", "Tailwind"],
//     isPrivate: false,
//     categoryColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
//   },
//   {
//     name: "Kid-ex",
//     category: "Educational",
//     description: "Interactive educational platform designed for children with engaging UI and learning modules.",
//     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "TypeScript", "GSAP"],
//     isPrivate: false,
//     categoryColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300"
//   },
//   {
//     name: "ITTechXpert",
//     category: "Enterprise",
//     description: "Private UI components and interfaces developed for enterprise-level applications and clients.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
//     tech: ["React", "Next.js", "Private"],
//     isPrivate: true,
//     categoryColor: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"
//   }
// ];

// const techColors: { [key: string]: string } = {
//   "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
//   "Next.js": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300",
//   "Tailwind": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300",
//   "TypeScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300",
//   "GSAP": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
//   "Private": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300"
// };

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="py-20 bg-muted/30">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="text-3xl sm:text-4xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-muted-foreground max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Here are some of the projects I've worked on, showcasing my skills in frontend development
//           </motion.p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="card-hover group overflow-hidden">
//                 <div className="relative overflow-hidden">
//                   <img 
//                     src={project.image} 
//                     alt={`${project.name} ${project.category} Platform`}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h3 className="text-xl font-bold">{project.name}</h3>
//                     <Badge className={project.categoryColor}>
//                       {project.category}
//                     </Badge>
//                   </div>
//                   <p className="text-muted-foreground mb-4">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className={techColors[tech] || "bg-gray-100 dark:bg-gray-800"}
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex space-x-3">
//                     <Button 
//                       className={`flex-1 ${project.isPrivate ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'gradient-bg hover:shadow-md'} text-primary-foreground transition-all duration-300`}
//                       disabled={project.isPrivate}
//                     >
//                       {project.isPrivate ? (
//                         <>
//                           <Lock className="h-4 w-4 mr-2" />
//                           Private
//                         </>
//                       ) : (
//                         <>
//                           <ExternalLink className="h-4 w-4 mr-2" />
//                           Live Demo
//                         </>
//                       )}
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       disabled={project.isPrivate}
//                       className={project.isPrivate ? 'text-gray-400 border-gray-400 cursor-not-allowed' : 'hover:border-primary transition-all duration-300'}
//                     >
//                       <Github className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    name: "Blindshub",
    category: "E-commerce",
    description: "Modern e-commerce platform with responsive design, product catalog, and seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tech: ["React", "PHP", "CSS"],
    isPrivate: false,
    categoryColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
    liveLink: "https://blindshub.com"
  },
  {
    name: "Kid-ex",
    category: "Educational",
    description: "Interactive educational platform designed for children with engaging UI and learning modules.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tech: ["React", "JavaScript", "GSAP"],
    isPrivate: false,
    categoryColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300",
    liveLink: "https://kid-ex.com"
  },
  {
    name: "ITTechXpert",
    category: "Enterprise",
    description: "Private UI components and interfaces developed for enterprise-level applications and clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tech: ["React", "Next.js", "Private"],
    isPrivate: true,
    categoryColor: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"
  },
  {
    name: "Learn Support Main",
    category: "Learning",
    description: "Modern Learning platform with responsive design, product catalog, and seamless user experience.",
    image: "https://i.pinimg.com/736x/05/0d/97/050d9763a39608d63bb3b38043c74980.jpg",
    tech: ["React", "TypeScript", "Tailwind"],
    isPrivate: false,
    categoryColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
    liveLink: "https://dashboard.render.com/static/srv-d164dl8dl3ps739vqhag"
  },
  // {
  //   name: "Kid-ex",
  //   category: "Educational",
  //   description: "Interactive educational platform designed for children with engaging UI and learning modules.",
  //   image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  //   tech: ["React", "TypeScript", "GSAP"],
  //   isPrivate: false,
  //   categoryColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300",
  //   liveLink: "https://kid-ex.com"
  // },{
  //   name: "ITTechXpert",
  //   category: "Enterprise",
  //   description: "Private UI components and interfaces developed for enterprise-level applications and clients.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  //   tech: ["React", "Next.js", "Private"],
  //   isPrivate: true,
  //   categoryColor: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300"
  // }
];

const techColors: { [key: string]: string } = {
  "React": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
  "Next.js": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300",
  "Tailwind": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300",
  "TypeScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300",
  "GSAP": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
  "Private": "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are some of the projects I've worked on, showcasing my skills in frontend development
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} ${project.category} Platform`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <Badge className={project.categoryColor}>
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={techColors[tech] || "bg-gray-100 dark:bg-gray-800"}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.isPrivate ? (
                      <Button 
                        className="flex-1 bg-gray-400 hover:bg-gray-400 cursor-not-allowed text-primary-foreground transition-all duration-300"
                        disabled
                      >
                        <Lock className="h-4 w-4 mr-2" />
                        Private
                      </Button>
                    ) : (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <Button className="w-full gradient-bg hover:shadow-md text-primary-foreground transition-all duration-300">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      disabled={project.isPrivate}
                      className={project.isPrivate ? 'text-gray-400 border-gray-400 cursor-not-allowed' : 'hover:border-primary transition-all duration-300'}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
