import React, { useRef } from "react";
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
// import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas, ParticleRing } from './canvas'
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";

const Certification = () => {
  return (
    <>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>My Certificates</p>
            <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
          </motion.div>
    
          <div className='w-full flex'>
            <motion.p
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
              The following certifications demonstrate my skills and expertise through recognized achievements in the field. Each certification is showcasing my proficiency in various technologies and my commitment to continuous learning and professional growth. They reflect my ability to master complex concepts, stay updated with industry standards, and excel in my domain.
            </motion.p>
          </div>
    
    <div className='flex'>
        <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
            <TiltCard name={"CCNA | Cisco Certified Network Associate"} link={"https://cp.certmetrics.com/cisco/en/public/verify/credential/2e8d93ac0962436f9ca3e1158d7e2b12"} />
        </div>
        <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
            <TiltCard name={"Automation With Selenium Web Driver and TestNg"} link={"https://10pearlsuniversity.org/view-certificate/?cid=10PUC-cc4cb90e6b471e5d0c407149c30e153f49a8a40204a543fa56395590"} />
        </div>
        <div className="grid w-full place-content-center  px-4 py-12 text-slate-900">
            <TiltCard name={"Beginning Amazon Web Services"} link={"https://10pearlsuniversity.org/view-certificate/?cid=10PUC-a87e095bf337d69a5af673d89400c5b74138257a9ad332aa56391517"} />
        </div>
    </div>
    </>
  )
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({name, link}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="top-[90rem] h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid  rounded-xl bg-[#fdfdfd] shadow-lg"
      >
        {/* <img src="public/profile_pic.jpg" 
        style={{
            transform: "translateZ(75px)",
          }}  
        className="mx-auto text-4xl h-[80%] mt-[10px] mb-0" /> */}
      
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold mt-[2rem]"
        >
          {name}
        </p>

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-md font-bold mt-[-2rem]"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">Click Here to See the Certification</a>
        </p>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Certification, "")