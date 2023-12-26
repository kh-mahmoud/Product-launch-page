import type { Config } from 'tailwindcss'
import { assets } from './utils/assets'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img-1': `url(${assets.square})`,
        'bg-gradient': `url(${assets.gradient})`,

      },
      backgroundSize: {
        'square-size': '30px',
      }
    },
  },
  plugins: [],
}
export default config
