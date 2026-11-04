const fs = require('fs');
const path = require('path');

const PACKAGE_PATH = path.join(__dirname, '..', 'package.json');
const releaseType = (process.argv[2] || 'patch').toLowerCase();

if (!['patch', 'minor', 'major'].includes(releaseType)) {
  console.error('Usage: node scripts/bump-version.js [patch|minor|major]');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8'));
const [major, minor, patch] = packageJson.version.split('.').map(Number);

let nextVersion;
if (releaseType === 'major') {
  nextVersion = `${major + 1}.0.0`;
} else if (releaseType === 'minor') {
  nextVersion = `${major}.${minor + 1}.0`;
} else {
  nextVersion = `${major}.${minor}.${patch + 1}`;
}

packageJson.version = nextVersion;
fs.writeFileSync(PACKAGE_PATH, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log(`Version bumped to ${nextVersion}`);
