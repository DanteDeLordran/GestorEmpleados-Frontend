<h1>Employee manager</h1>
<h2>Frontend side using : </h2>
<ul>
    <li>Angular</li>
    <li>DaisyUI</li>
</ul>

<p>Steps to correctly implement DaisyUI to Angular project</p>
<ol>
    <li>Install TailwindCSS by 'npm i tailwindcss -D'</li>
    <li>Execute 'npx tailwindcss init'</li>
    <li>Copy the tailwind.config.js config like : https://tailwindcss.com/docs/installation</li>
    <li>Add '@tailwind base;' '@tailwind components;' '@tailwind utilities;' to the styles.css file on the root project file</li>
    <li>Add 'plugins: [require("daisyui")]' to the 'tailwind.config.js'</li>
    <li>Add global styles at 'tailwind.config.js' by adding 'daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "{{your choice colors}}",
          "secondary": "",
          "accent": "",
          "neutral": "",
          "base-100": "",
          "info": "",
          "success": "",
          "warning": "",
          "error": "",
        },
      },
    ],
  },'</li>
    <li>Create and watch your global styles preview at : https://daisyui.com/theme-generator/</li>
    <li>For premade themes visit : https://daisyui.com/docs/themes/</li>
    <li>Enjoy the DaisyUI styles and material</li>
</ol>