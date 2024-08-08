"use client";
import { useEffect, useMemo, useState } from "react";
import { themeChange } from "theme-change";

export const navbarLinks = [
  // { name: "About", link: "/about", sub: [] },
  { name: "Chat", link: "/Chat", sub: [] },
  { name: "VR", link: "/VR", sub: [] },
  // { name: "Psicologia forense", link: "/psicologia-forense"},
  // {
  //   name: "Subsection 1",
  //   link: "",
  //   sub: [
  //     { name: "Lorem ipsum 0", link: "#" },
  //     { name: "Lorem ipsum 0", link: "#" },
  //     { name: "Lorem ipsum 0", link: "#" },
  //   ],
  // },
  // {
  //   name: "Subsection 1",
  //   link: "/help",
  //   sub: [{ name: "Lorem ipsum 0", link: "#" }],
  // },
  { name: "Sign in", link: "/sign-in", sub: [] },
  // { name: "Area do paciente", link: "/paciente" },
];

export const ButtonNavbar = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["cupcake", "coffee", "lofi", "aqua", "wireframe", "forest"];

  // useEffect(() => {
  //   document
  //     .querySelector("html")
  //     .setAttribute("data-theme", themes[themeIndex]);
  //   console.log();
  // }, [themeIndex]);
  //

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <select data-choose-theme className="select select-primary max-w-xs">
      <option disabled selected>
        Change theme
      </option>
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="retro">retro</option>
      <option value="aqua">aqua</option>
      <option value="wireframe">wire</option>
      <option value="luxury">luxury</option>
      <option value="coffee">coffee</option>
    </select>
  );
};
// export const ButtonNavbar = () => {
//   const [themeIndex, setThemeIndex] = useState(0);
//   const themes = ["cupcake", "coffee", "lofi", "aqua", "wireframe", "forest"];
//
//   useEffect(() => {
//     document
//       .querySelector("html")
//       .setAttribute("data-theme", themes[themeIndex]);
//     console.log();
//   }, [themeIndex]);
//
//   const chagenTheme = () => {
//     setThemeIndex((act) => {
//       if (act + 1 == themes.length) return 0;
//       return act + 1;
//     });
//   };
//
//   return (
//     <button onClick={chagenTheme} className="btn btn-info">
//       Theme {themes[themeIndex]}
//     </button>
//   );
// };
