import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0], {
    ease: cubicBezier(0.17, 0.67, 0.83, 0.67),
  });
  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 32]);

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      className="p-32 flex flex-col items-center justify-center bg-primary overflow-hidden relative"
    >
      <motion.div className="flex flex-col gap-0 overflow-hidden items-center justify-center">
        <h1 className="text-[96px] text-input-bg font-bold text-center">
          Win Your Day
        </h1>
        <h2 className="text-lg text-light font-normal text-center">
          Ditch the chaos, conquer your day. Focus Flow streamlines the Pomodoro
          Technique, turning to-do lists into trophies. Break down work,
          maximize focus, and crush procrastination. Sign up for early access
          and unlock peak productivity.
        </h2>
      </motion.div>
      <motion.div
        className="w-full border-8 border-dark-input-border rounded-main overflow-hidden"
        style={{
          rotateX: rotate,
          marginTop: marginTop,
        }}
      >
        <img
          draggable="false"
          src="./desktop.png"
          className="w-full h-full overflow-hidden"
        />
      </motion.div>
    </div>
  );
}

export default App;
