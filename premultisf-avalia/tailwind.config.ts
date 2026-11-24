import type { Config } from "tailwindcss";
// Paleta de cores do painel. Troque aqui para ajustar.
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { marinho: "#1f2344", laranja: "#f09409", telha: "#e25d29", ferrugem: "#c05025", roxo: "#603689", magenta: "#af1062" }, fontFamily: { head: ["var(--font-head)", "Calibri", "sans-serif"] } } },
  plugins: [],
} satisfies Config;
