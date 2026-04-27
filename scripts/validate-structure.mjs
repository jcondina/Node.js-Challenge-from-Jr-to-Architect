import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const projectsDir = join(root, "projects");
const requiredProjectFiles = ["README.md", "questions.md", "rubric.md"];
const requiredTemplates = [
  "project-template.md",
  "questions-template.md",
  "rubric-template.md",
  "adr-template.md",
  "threat-model-template.md",
  "postmortem-template.md",
];

const errors = [];

function fail(message) {
  errors.push(message);
}

function assertExists(path, label = path) {
  if (!existsSync(path)) {
    fail(`Missing ${label}`);
  }
}

assertExists(join(root, "README.md"), "README.md");
assertExists(projectsDir, "projects/");
assertExists(join(root, "templates"), "templates/");

for (const template of requiredTemplates) {
  assertExists(join(root, "templates", template), `templates/${template}`);
}

const projectNames = existsSync(projectsDir)
  ? readdirSync(projectsDir).filter((name) => statSync(join(projectsDir, name)).isDirectory())
  : [];

if (projectNames.length !== 25) {
  fail(`Expected 25 project folders, found ${projectNames.length}`);
}

const sortedProjects = [...projectNames].sort();
for (let index = 1; index <= 25; index += 1) {
  const prefix = String(index).padStart(2, "0");
  const project = sortedProjects.find((name) => name.startsWith(`${prefix}-`));
  if (!project) {
    fail(`Missing project folder with prefix ${prefix}-`);
    continue;
  }

  for (const file of requiredProjectFiles) {
    const path = join(projectsDir, project, file);
    assertExists(path, `projects/${project}/${file}`);
    if (existsSync(path)) {
      const text = readFileSync(path, "utf8");
      for (const heading of ["## Objetivos", "## Entregables", "## Criterios de aceptacion"]) {
        if (file === "README.md" && !text.includes(heading)) {
          fail(`projects/${project}/${file} missing heading "${heading}"`);
        }
      }
    }
  }

  if (index >= 7) {
    assertExists(join(projectsDir, project, "starter"), `projects/${project}/starter/`);
    assertExists(join(projectsDir, project, "starter", "README.md"), `projects/${project}/starter/README.md`);
  }
}

const forbiddenTopLevel = ["solutions", "answers", "respuestas", "soluciones"];
for (const name of forbiddenTopLevel) {
  if (existsSync(join(root, name))) {
    fail(`Forbidden public answer folder exists: ${name}/`);
  }
}

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stats = statSync(path);
    if (stats.isDirectory()) {
      if (entry === ".git" || entry === "node_modules") continue;
      walk(path, files);
    } else {
      files.push(path);
    }
  }
  return files;
}

for (const file of walk(root)) {
  const rel = relative(root, file).replaceAll("\\", "/");
  if (rel.endsWith(".env") && !rel.endsWith(".env.example")) {
    fail(`Forbidden real env file: ${rel}`);
  }

  if (/\.(md|ts|js|mjs|json|yml|yaml|example)$/i.test(file)) {
    const text = readFileSync(file, "utf8");
    if (/sk-[A-Za-z0-9_-]{20,}/.test(text) || /ghp_[A-Za-z0-9_]{20,}/.test(text)) {
      fail(`Potential secret found in ${rel}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Structure validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Structure validation passed.");

