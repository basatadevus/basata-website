import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence, animate } from "framer-motion";

type TitleProps = {
  onMeetTeamClick: () => void;
};

function Title({ onMeetTeamClick }: TitleProps) {
  const [isCircleComplete, setIsCircleComplete] = useState(false);
  const [isTextComplete, setIsTextComplete] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [isMissionComplete, setIsMissionComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const text = "The AI-powered operational backbone for US clinics.";
  const mission = `Welcome to Basata, where we're revolutionizing healthcare by empowering doctors to focus on what truly matters — <span class="italic text-gray-600">caring for their patients.</span>`;

  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  const circleControls = useAnimation();
  const textControls = useAnimation();
  const ekgControls = useAnimation();

  useEffect(() => {
    const animateSequence = async () => {
      // Initial large circle
      await circleControls.start({
        pathLength: 1,
        transition: { duration: 2, ease: "easeInOut" }
      });
      setIsCircleComplete(true);

      // Shrink and position the circle
      await circleControls.start({
        r: 24,
        cx: 376,
        cy: 200,
        transition: { duration: 1, ease: "easeInOut" }
      });

      // Start breathing effect
      circleControls.start({
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          times: [0, 0.5, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }
      });

      // Fade in the text
      await textControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
      });
      setTimeout(() => setIsTextComplete(true), 750);

      // Start the EKG animation
      ekgControls.start({
        pathLength: [0, 1],
        transition: { duration: 2, ease: "linear", repeat: Infinity }
      });
    };
    animateSequence();
  }, [circleControls, textControls, ekgControls]);

  useEffect(() => {
    if (isTextComplete) {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: 3,
        ease: "easeInOut",
        onComplete: () => {
          setTimeout(() => setIsTypingComplete(true), 750);
        },
      });
      return controls.stop;
    }
  }, [isTextComplete, count, text.length]);

  useEffect(() => {
    if (isTypingComplete) {
      setTimeout(() => setShowMission(true), 750);
    }
  }, [isTypingComplete]);

  useEffect(() => {
    if (isMissionComplete) {
      setTimeout(() => setShowButton(true), 750);
    }
  }, [isMissionComplete]);

  return (
    <div className="relative flex flex-col gap-y-5 h-[100vh] w-[100vw] justify-center items-center overflow-y-visible bg-white">
      <div className="flex items-center justify-center w-full z-10">
        <svg className="w-[750px] h-[400px] pr-[7%]" viewBox="0 0 800 400">
          <motion.circle
            cx="400"
            cy="200"
            r="150"
            fill="none"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={circleControls}
          />
          <motion.text
            x="410"
            y="215"
            fontSize="48"
            fontWeight="bold"
            fill="black"
            initial={{ opacity: 0, x: 50 }}
            animate={textControls}
          >
            basata AI
          </motion.text>
        </svg>
      </div>
      {isCircleComplete && (
        <svg className="absolute w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M0,500 Q250,400 300,500 T600,500 T1000,500"
            fill="none"
            stroke="rgba(0, 255, 255, 0.3)"
            strokeWidth="6"
            initial={{ pathLength: 0 }}
            animate={ekgControls}
          />
        </svg>
      )}
      <AnimatePresence>
        {isTextComplete && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-black text-xl md:text-2xl px-5 z-10 text-center"
          >
            <motion.span>{displayText}</motion.span>
            {isTypingComplete && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            )}
          </motion.h3>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMission && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setIsMissionComplete(true)}
            className="text-black text-lg md:text-xl items-center justify-center mx-auto px-5 z-10 text-center"
            dangerouslySetInnerHTML={{ __html: mission }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-base md:text-lg font-semibold hover:bg-blue-600 transition-colors"
            onClick={onMeetTeamClick}
          >
            Meet the Team
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Title;
