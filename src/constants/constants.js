export const languages = [
  {
    import: "python",
    display: "Python",
  },
  {
    import: "c_cpp",
    display: "C/C++",
  },
  {
    import: "javascript",
    display: "JavaScript",
  },
  {
    import: "java",
    display: "Java",
  },
  {
    import: "html",
    display: "HTML",
  },
  {
    import: "css",
    display: "CSS",
  },
];

export const themes = [
  {
    importTheme: "dracula",
    display: "Dracula",
  },
  {
    importTheme: "cobalt",
    display: "Cobalt",
  },
  {
    importTheme: "monokai",
    display: "Monokai",
  },
  {
    importTheme: "tomorrow_night",
    display: "Tomorrow Night",
  },
  {
    importTheme: "tomorrow_night_blue",
    display: "Tomorrow Night Blue",
  },
  {
    importTheme: "nord_dark",
    display: "Nord Dark",
  },
  {
    importTheme: "tomorrow_night_eighties",
    display: "Tomorrow Night Eighties",
  },
  {
    importTheme: "vibrant_ink",
    display: "Vibrant Ink",
  },
];

export const htmlPreview =
  '<h1 class="heading1">Heading tag</h1>\n<p>Paragraph tag</p>\n\n<ol id="list1">\n\t<li>Item1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ol>';

export const cssPreview =
  "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nh1 {\n\tfont-family: serif\n}";

export const jsPreview =
  'const btn1 = document.querySelector(".btn");\nbtn1.addEventListener(\'click\', () => {\n\t  console.log("Buttonclicked");\n})';

export const fonts = ["Consolas", "Fira Code", "Courier", "Inconsolata"];
