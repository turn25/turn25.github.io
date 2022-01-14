import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, y: 15 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

const Layout = ({ children, title }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, type: "easeInOut" }}
    >
      {/* Change title */}
      {title && (
        <Head>
          <title>{title} - Tuan Vu</title>
        </Head>
      )}

      {children}
    </motion.article>
  );
};

export default Layout;
