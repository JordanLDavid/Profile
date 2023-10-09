import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css'; // Create a CSS file for styling (Grid.css in this example)

const iconData = [
  '🌟', '🚀', '🌈', '🌻', '🌊',
  '🌸', '🌴', '🎈', '🎉', '🎁'
];

const Grid = () => {
  return (
    <ul className="grid">
      <AnimatePresence>
        {iconData.map((icon, index) => (
          <motion.li
            key={index}
            className="grid-item"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {icon}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Grid;