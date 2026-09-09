import React from "react";
import { motion } from "framer-motion";
import CodeWindow from "@/components/CodeWindow";

function About() {
  const skills = [
    { name: "Python / asyncio", category: "Voice AI", level: 90 },
    { name: "LiveKit Agents / Pipecat", category: "Voice AI", level: 85 },
    { name: "Twilio Voice & Media Streams", category: "Telephony", level: 85 },
    { name: "Deepgram STT / TTS", category: "Voice AI", level: 85 },
    { name: "WebRTC / SIP", category: "Telephony", level: 75 },
    { name: "TypeScript / NestJS", category: "Backend", level: 85 },
    { name: "React / Next.js", category: "Frontend", level: 85 },
    { name: "Postgres / Prisma / Redis", category: "Backend", level: 80 },
    { name: "Docker / CI/CD / pytest", category: "Tooling", level: 80 },
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
            I&apos;m Rehan, and I work on real-time voice AI &mdash; the kind that has to hold a phone call together while a model thinks. Most of what I know came from debugging my own production calls: audio arriving out of order, sessions torn down mid-sentence, a connection quietly serving the wrong voice after a settings change.
          </motion.p>
          <motion.p className="about__paragraph" variants={itemVariants}>
            That turned into open-source work. Ten of my fixes are merged upstream &mdash; eight into <strong>LiveKit Agents</strong>, plus <strong>Pipecat</strong> and <strong>jambonz</strong> &mdash; and over the last ninety days I&apos;ve been the second most active outside contributor to LiveKit Agents. One of those changes is in its core connection pool: it was closing sockets that were still streaming, and losing handshakes that raced a settings change, which affected eleven plugins at once.
          </motion.p>
          <motion.p className="about__paragraph" variants={itemVariants}>
            Alongside that I build and run my own products: <strong>Atlas</strong>, an outbound voice agent on Twilio and Deepgram that handles objections and books callbacks, and <strong>InvoiceCheck.in</strong>, a GST invoice verification tool that is live with paying users. I write Python, TypeScript and the tests that prove the fix &mdash; I check every one by reverting it and confirming the test fails.
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