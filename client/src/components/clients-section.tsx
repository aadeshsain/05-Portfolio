// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Star } from "lucide-react";

// const clients = [
//   {
//     name: "John Mitchell",
//     position: "CEO, TechCorp",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
//     testimonial: "Aadesh delivered an exceptional website that exceeded our expectations. The attention to detail and modern design approach transformed our online presence completely."
//   },
//   {
//     name: "Sarah Davis",
//     position: "Founder, StartupHub",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
//     testimonial: "Working with Aadesh was a game-changer for our startup. The React application he built is fast, responsive, and exactly what we needed to scale our business."
//   },
//   {
//     name: "David Wilson",
//     position: "Director, DigitalFlow",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
//     testimonial: "The UI/UX design and development work was outstanding. Aadesh understands both technical excellence and user experience, delivering results that drive business growth."
//   },
//   {
//     name: "Lisa Chen",
//     position: "Owner, CreativeStudio",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
//     testimonial: "Incredible attention to detail and creative problem-solving. The portfolio website showcases our work beautifully and has significantly improved our client conversions."
//   }
// ];

// export function ClientsSection() {
//   return (
//     <section id="clients" className="py-20 bg-muted/30">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="text-3xl sm:text-4xl font-bold mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             Client Testimonials
//           </motion.h2>
//           <motion.p 
//             className="text-lg text-muted-foreground max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             What our clients say about working with us
//           </motion.p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {clients.map((client, index) => (
//             <motion.div
//               key={client.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="card-hover">
//                 <CardContent className="p-8">
//                   <div className="flex items-start space-x-4 mb-6">
//                     <img 
//                       src={client.image} 
//                       alt={`${client.name} - ${client.position}`}
//                       className="w-16 h-16 rounded-full object-cover"
//                     />
//                     <div>
//                       <h4 className="text-lg font-bold">{client.name}</h4>
//                       <p className="text-primary">{client.position}</p>
//                     </div>
//                   </div>
//                   <div className="flex text-yellow-400 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-muted-foreground italic">
//                     "{client.testimonial}"
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
