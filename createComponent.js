// Import required modules
import fs from 'fs';
import path from 'path';

// Function to convert PascalCase to kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

// Function to create a file with the provided content
function createFile(filePath, content) {
  const dir = path.dirname(filePath);

  // Ensure the directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}`);
}

// Main function
function createComponentFiles(componentName) {
  if (!componentName) {
    console.error('Error: Please provide a component name as an argument.');
    process.exit(1);
  }

  const kebabCaseName = toKebabCase(componentName);

  // Define the file paths
  const files = [
    {
      path: `registry/default/akasha-ui/${kebabCaseName}.tsx`,
      content: `// ${componentName} component\n\nexport default function ${componentName}() {\n  return (\n    <div>${componentName} component</div>\n  );\n}`,
    },
    {
      path: `registry/default/examples/${kebabCaseName}-demo.tsx`,
      content: `// ${componentName} demo\n\nimport ${componentName} from '../akasha-ui/${kebabCaseName}';\n\nexport default function ${componentName}Demo() {\n  return (\n    <div>\n      <h1>${componentName} Demo</h1>\n      <${componentName} />\n    </div>\n  );\n}`,
    },
    {
      path: `content/docs/components/${kebabCaseName}.mdx`,
      content: `# ${componentName}\n\nThis document explains how to use the **${componentName}** component.\n\n## Usage\n\n\`\`\`tsx\nimport ${componentName} from 'akasha-ui/${kebabCaseName}';\n\nfunction App() {\n  return <${componentName} />;\n}\n\`\`\``,
    },
  ];

  // Create each file
  files.forEach(({ path, content }) => createFile(path, content));
}

// Get the component name from command line arguments
const componentName = process.argv[2];
createComponentFiles(componentName);
