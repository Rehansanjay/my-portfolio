import React from "react";
import { motion } from "framer-motion";
import CodeWindow from "@/components/CodeWindow";

function About() {
  const skills = [
    { name: "React / Next.js", category: "Frontend", level: 90 },
    { name: "TypeScript", category: "Frontend", level: 85 },
    { name: "Node.js / Express", category: "Backend", level: 85 },
    { name: "Python", category: "AI / ML", level: 80 },
    { name: "TensorFlow / CNN", category: "AI / ML", level: 75 },
    { name: "MongoDB / Supabase", category: "Backend", level: 80 },
    { name: "Razorpay", category: "Payments", level: 85 },
    { name: "Docker / CI/CD", category: "DevOps", level: 75 },
    { name: "Git / GitHub", category: "DevOps", level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      aria-label="About me"
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2 className="section-header__title">
          <span className="section-header__number">01.</span>
          About Me
        </h2>
        <div className="section-header__line" />
      </motion.div>

      <div className="about__grid">
        <div className="about__text">
          <motion.p className="about__paragraph" variants={itemVariants}>
            This is Rehansanjay, as a full-stack developer, I bring together creativity and technical expertise to build meaningful digital experiences for the web. My journey into full-stack development grew from a deep curiosity about how the front and back ends work together to create seamless applications.
          </motion.p>
          <motion.p className="about__paragraph" variants={itemVariants}>
            Fast-forward to today, I specialize in crafting robust, scalable, and user-centric applications with modern technologies across the entire development stack. I have hands-on experience in building responsive interfaces using React and Next.js, designing efficient server-side logic with Node.js and Express.js, and managing databases such as MongoDB and MySQL.
          </motion.p>
          <motion.p className="about__paragraph" variants={itemVariants}>
            Additionally, I work with tools like Git, GitHub, Docker, and cloud platforms to deliver production-ready applications with smooth deployment workflows.
          </motion.p>

          <motion.div className="about__skills" variants={containerVariants}>
            <h3 className="about__skills-title">Core Technologies</h3>
            <div className="about__skills-grid">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="about__skill"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="about__skill-header">
                    <span className="about__skill-name">{skill.name}</span>
                    <span className="about__skill-category">{skill.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="about__visual" variants={itemVariants}>
          <CodeWindow />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;