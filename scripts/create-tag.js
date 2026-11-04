const { execSync } = require('child_process');
const { readFileSync } = require('fs');

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const version = packageJson.version;
const tag = `v${version}`;

try {
  const currentTags = execSync('git tag --list', { encoding: 'utf8' }).trim();
  if (currentTags && currentTags.split('\n').includes(tag)) {
    console.log(`Tag ${tag} already exists.`);
    process.exit(0);
  }

  execSync(`git tag ${tag}`, { stdio: 'inherit' });
  execSync(`git push origin ${tag}`, { stdio: 'inherit' });
  console.log(`Created and pushed tag: ${tag}`);
} catch (error) {
  console.error('Failed to create tag automatically.');
  console.error(error.message);
  process.exit(1);
}
