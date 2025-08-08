# React + Vite

npx create-vite
javascript

--install tailwind
npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
plugins: [react(), tailwindcss()],
resolve: {
alias: {
"@": path.resolve(\_\_dirname, "./src"), //set up path to just call it with the @ symbol in the src folder
}
}
})

--For icons and router
npm install lucide-react react-router-dom tailwind-merge// to combine classes

npm install @radix-ui/react-toast class-variance-authority clsx-- for tailwind

QUDE EN MIN 1:05
