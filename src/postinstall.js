const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Running Prisma generate from package postinstall...');
  execSync(`npx prisma generate --schema=${path.join(__dirname, 'prisma/schema.prisma')}`, {
    stdio: 'inherit',
  });
  console.log('Prisma client generated successfully!');
} catch (error) {
  console.error('Failed to generate Prisma client:', error);
}
