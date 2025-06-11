import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./Filters.module.css";
import Icon from "../Icon/Icon";

const filterOptions = [
  { label: "A to Z", value: "a-z" },
  { label: "Z to A", value: "z-a" },
  { label: "Less than 10$", value: "less-10" },
  { label: "Greater than 10$", value: "greater-10" },
  { label: "Popular", value: "popular" },
  { label: "Not popular", value: "not-popular" },
  { label: "Show all", value: "all" },
];

const Filters = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(filterOptions[0]);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={() => setIsOpen(!isOpen)}>
        {selected.label}
        <Icon
          name="icon-chevron-down"
          className={`${s.arrow} ${isOpen ? s.open : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={s.optionsList}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {filterOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={s.optionItem}
              >
                {option.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Filters;
