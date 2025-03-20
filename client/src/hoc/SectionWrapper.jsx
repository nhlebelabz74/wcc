import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../constants";

const SectionWrapper = (Component, id) => function WrappedComponent() {
    return (
        <motion.section
            className={`${styles.padding} max-w-7xl mx-auto relative`}
            variants={fadeIn("right", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <span id={id} className="-mt-25 pb-25 block">&nbsp;</span>
            <Component />
        </motion.section>
    );
}

export default SectionWrapper;