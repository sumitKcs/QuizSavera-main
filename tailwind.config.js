import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#2aac75",
        tertiary: "#e0e2db",
        brand: "#2aac75",
        'menu': "#ffffff",
        'menu-hover': "#000000",
        'menu-active': "#000000",
        'menu-active-hover': "#000000",
        'sidebar': "#000000",
        'sidebar-hover': "#000000",
        'sidebar-active': "#000000",
        'sidebar-active-hover': "#000000",
        'sidebar-title': "#ffffff",
        'sidebar-title-hover': "#000000",
        'sidebar-title-active': "#000000",
        'sidebar-title-active-hover': "#000000",
        'footer': "#000000",
        'footer-hover': "#000000",
        'footer-active': "#000000",
        'footer-active-hover': "#000000",
        'footer-title': "#000000",
        'footer-title-hover': "#000000",
        'footer-title-active': "#000000",
        'footer-title-active-hover': "#000000",
        // set 'heading-1' as text-sm of tailwind class

      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],

  plugins: [forms],
};