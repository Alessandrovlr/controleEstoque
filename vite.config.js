import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'cor-vermelha': 'var(--cor-vermelha)',
//         'cor-verde': 'var(--cor-verde)',
//       },
//     },
//   },
// }

//aparentemente o module.exports estava dando conflito com o export default