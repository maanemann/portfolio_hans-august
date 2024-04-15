
"use client";

import { createContext, useContext, useState } from "react";


// // #region themeContext

const themes = {
  ockerdust: {
    textATheme: 'text-ockerdust-200',
    textA2Theme: 'text-ockerdust-300',
    textBTheme: 'text-ockerdust-900',
    textBrightTheme: 'text-ockerdust-200',
    textReverseTheme: 'text-ockerdust-950',
    placehReverseTheme: 'text-ockerdust-950/50',
    borderATheme: 'border-ockerdust-300',
    bgATheme: 'bg-ockerdust-900',
    bgBTheme: 'bg-ockerdust-950',
    bgBrightTheme: 'bg-ockerdust-700',
    bgReverseTheme: 'bg-ockerdust-700',
    scrollbarTheme: 'scrOckerdustCustom',
  },
  aqua: {
    textATheme: 'text-aqua-200',
    textA2Theme: 'text-aqua-300',
    textBTheme: 'text-aqua-900',
    textBrightTheme: 'text-aqua-200',
    textReverseTheme: 'text-aqua-950',
    borderATheme: "border-aqua-300",
    bgATheme: "bg-aqua-900",
    bgBTheme: "bg-aqua-950",
    bgBrightTheme: 'bg-aqua-700',
    bgReverseTheme: 'bg-aqua-700',
    scrollbarTheme: 'scrAquaCustom',
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

