import { motion } from "framer-motion";
import image from "../assets/images/image.png";

export default function ProfileImageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-[300px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-[1px]"
    >
      <div className="rounded-2xl bg-black/80 backdrop-blur-xl p-3 shadow-[0_0_25px_rgba(255,255,255,0.04)] hover:shadow-[0_0_35px_rgba(255,255,255,0.06)] transition">
        <img
          src={image}
          alt="Profile"
          className="w-full h-[360px] object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}
