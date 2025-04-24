// tailwind.config.js
module.exports = {
    darkMode: 'class', // Enable dark mode using class strategy
    theme: {
      extend: {
        colors: {
          // Define your light and dark theme colors
          light: {
            background: '#ffffff',
            text: '#000000',
          },
          dark: {
            background: '#1a1a1a',
            text: '#ffffff',
          },
        },
      },
    },
    variants: {
      extend: {
        // Add any variants you want to support
      },
    },
    plugins: [],
  };