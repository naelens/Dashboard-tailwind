import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.tsx",
    
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },

      maxWidth: {
        app: '700px',
      },
    },
  },
  plugins: [],
} satisfies Config;
