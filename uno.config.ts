import { defineConfig, presetUno, presetIcons, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography()
  ],
  rules: [
    ['btn', { padding: '0.5rem 1rem', 'border-radius': '0.25rem', 'background-color': '#4f46e5', color: 'white', 'font-weight': '500', cursor: 'pointer', transition: 'background-color 0.3s' }],
    ['card', { padding: '1rem', 'border-radius': '0.5rem', 'box-shadow': '0 2px 8px rgba(0,0,0,0.1)', 'background-color': '#fff' }],
    ['shadow-md', { 'box-shadow': '0 4px 6px rgba(0,0,0,0.1)' }],
    ['text-gradient', { 'background-image': 'linear-gradient(90deg,#ff7e5f,#feb47b)', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent' }]
  ],
  shortcuts: {
    'btn-primary': 'btn bg-blue-600 hover:bg-blue-700 text-white',
    'btn-secondary': 'btn bg-gray-500 hover:bg-gray-600 text-white',
    'card-lg': 'card p-6 rounded-xl shadow-md',
    'title-lg': 'text-2xl font-bold text-gray-800',
    'title-sm': 'text-lg font-semibold text-gray-700'
  }
})
