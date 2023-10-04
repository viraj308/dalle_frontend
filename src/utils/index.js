import { useState, useEffect } from "react";
import FileSaver from "file-saver";

import { surpriseMePrompts } from "../constants";

export function getRamdomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRamdomPrompt(prompt);

  return randomPrompt;
}

export function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

//dark mode code

export function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
