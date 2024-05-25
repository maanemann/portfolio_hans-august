
"use client";

import { createContext, useContext, useState } from "react";


// // #region themeContext

const themes = {
  ockerdust: {
    textATheme: 'text-ockerdust-200',
    textA2Theme: 'text-ockerdust-300',
    textA3Theme: 'text-ockerdust-400',
    textBTheme: 'text-ockerdust-900',
    textBrightTheme: 'text-ockerdust-200',
    textReverseTheme: 'text-ockerdust-950',
    placehReverseTheme: 'text-ockerdust-950/50',
    borderATheme: 'border-ockerdust-300',
    borderBTheme: 'border-ockerdust-200',
    borderDarkTheme: 'border-ockerdust-700',
    outlineDarkerTheme: 'outline-ockerdust-800',
    outlineDarkTheme: 'outline-ockerdust-700',
    outlineDarkBTheme: 'outline-ockerdust-600',
    bgATheme: 'bg-ockerdust-900',
    bgBTheme: 'bg-ockerdust-950',
    bgBrighterTheme: 'bg-ockerdust-300',
    bgBrightTheme: 'bg-ockerdust-700',
    bgBrightBTheme: 'bg-ockerdust-800',
    scrollbarTheme: 'scrOckerdustCustom',
    gradientTheme: 'from-ockerdust-800',
    beforeDarkerTheme: 'before:bg-ockerdust-800',
    selectionTheme: 'selection:bg-ockerdust-700 selection:text-ockerdust-300',
  },
  aqua: {
    textATheme: 'text-aqua-200',
    textA2Theme: 'text-aqua-300',
    textA3Theme: 'text-aqua-400',
    textBTheme: 'text-aqua-900',
    textBrightTheme: 'text-aqua-200',
    textReverseTheme: 'text-aqua-950',
    borderATheme: "border-aqua-300",
    borderBTheme: 'border-aqua-200',
    borderDarkTheme: 'border-aqua-700',
    outlineDarkTheme: 'outline-aqua-700',
    outlineDarkerTheme: 'outline-aqua-800',
    outlineDarkBTheme: 'outline-aqua-600',
    bgATheme: "bg-aqua-900",
    bgBTheme: "bg-aqua-950",
    bgBrighterTheme: 'bg-aqua-300',
    bgBrightTheme: 'bg-aqua-700',
    bgBrightBTheme: 'bg-aqua-800',
    scrollbarTheme: 'scrAquaCustom',
    gradientTheme: 'from-aqua-800',
    beforeDarkerTheme: 'before:bg-aqua-800',
    selectionTheme: 'selection:bg-aqua-800 selection:text-aqua-400',
  },
};

const themeContext = createContext();

export function ThemeWrapper({ children }) {
  const [themeKey, setThemeKey] = useState('ockerdust');

  return(
    // Here we serve two properties to use elsewhere: `theme` and `setTheme`. `theme` refers to the `themes` variable (above) – that stores the theme objects – and points to the property (theme name) that matches what's stored in the state. Bracket notation is used instead of dot notation, as `themeKey` is a (state) variable refering to a property rather than a property itself. `setTheme` just fires the setter function (`setThemeKey`) for the state variable `themeKey` :
    <themeContext.Provider value={{ theme: themes[themeKey], setTheme: setThemeKey }}>
      { children }
    </themeContext.Provider>
  )
}

export function useThemeContext() {
  return useContext(themeContext);
}

// // #endregion themeContext


// #tag menuContext

// const menuStates = {
//   closed: {
//     xx: 'xx'
//   },
//   open: {
//     xx: 'xx'
//   }
// }

const menuContext = createContext();

export function MenuWrapper({ children }) {
  const [menuVisibility, setMenuVisibility] = useState(`hidden`);
  const [maskVisibility, setMaskVisibility] = useState(`hidden`);
  
  const handleMenu = () => {
    setMenuVisibility(menuVisibility === `hidden` ? `block` : `hidden`);
    setMaskVisibility(maskVisibility === `hidden` ? `block` : `hidden`);
  }

  return(
    <menuContext.Provider value={{
      menuVisibility, setMenuVisibility, handleMenu,
      maskVisibility, setMaskVisibility
    }}>
      { children }
    </menuContext.Provider>
  )
}

export function useMenuContext() {
  return useContext(menuContext);
}

