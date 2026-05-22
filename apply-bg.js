const fs = require('fs');

const files = [
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\about\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\blog\\[slug]\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\blog\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\careers\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\contact\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\practice-areas\\[slug]\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\practice-areas\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\privacy-policy\\page.tsx",
  "c:\\Users\\hp\\OneDrive\\Documentos\\myProjects\\OJADVOCATES\\src\\app\\team\\[slug]\\page.tsx"
];

const targetPattern = /<div className="absolute inset-0 opacity-\[0\.03\] pointer-events-none">[\s\S]*?<\/svg>\s*<\/div>/g;

const replacement = `<div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-bg.webp"
            alt="Background Image"
            fill
            className="object-cover object-center animate-subtle-zoom select-none brightness-[0.5]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(targetPattern)) {
    // Replace the SVG background pattern with the animated Image background
    content = content.replace(targetPattern, replacement);
    
    // Ensure `next/image` is imported
    if (!content.includes('import Image from "next/image"')) {
      content = 'import Image from "next/image";\n' + content;
    }

    fs.writeFileSync(file, content);
    console.log("Updated: " + file);
  }
});
