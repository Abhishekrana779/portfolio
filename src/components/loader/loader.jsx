import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#08051c] text-white">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-600/20
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-500/10
          blur-[100px]
        "
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-[300px]
          w-[300px]
          rounded-full
          bg-pink-500/10
          blur-[100px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative flex h-28 w-28 items-center justify-center">
          {/* Outer rotating ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-transparent
              border-t-purple-400
              border-r-pink-400
              border-b-cyan-400
            "
          />

          {/* Inner rotating ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-3
              rounded-full
              border
              border-dashed
              border-purple-400/30
            "
          />

          {/* Center */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              shadow-lg
              shadow-purple-500/20
              backdrop-blur-xl
            "
          >
            <span className="text-2xl font-bold">
              A
            </span>
          </motion.div>
        </div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mt-8
            text-4xl
            font-bold
            tracking-tight
            sm:text-5xl
          "
        >
          Abhi
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          </span>
        </motion.h1>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-3
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-slate-500
          "
        >
          Loading
        </motion.p>

        <div
          className="
            mt-7
            h-1
            w-52
            overflow-hidden
            rounded-full
            bg-white/10
            sm:w-64
          "
        >
          <motion.div
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "100%",
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-full
              w-1/2
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-cyan-400
              shadow-lg
              shadow-purple-500/50
            "
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="mt-5 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-cyan-400
                opacity-75
              "
            />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>

          <span className="text-xs text-slate-600">
            Preparing your portfolio
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-cyan-400
        "
      />
    </div>
  );
}
