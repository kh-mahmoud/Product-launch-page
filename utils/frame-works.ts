export const frameworks = [
    "react",
    "chrome",
    "qwik",
    "mobile",
    "tailwind",
    "desktop",
    "vue",
    "safari",
    "svelte",
  ] as const ;
  
  export type FrameworkProps = (typeof frameworks)[number];