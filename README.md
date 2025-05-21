# @fyzanshaik/chaya-prisma-package

A shared Prisma package for database schema, types, and reusable Zod validation schemas.

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Schema Changes](#schema-changes)
- [Versioning & Publishing](#versioning--publishing)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This package centralizes the Prisma schema, generated types, and Zod validation schemas for use across multiple projects. It ensures consistency and reusability for database access and validation logic.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/chaya-prisma-package.git
cd chaya-prisma-package
pnpm install
```

### 2. Build the Package

```bash
pnpm build
```

### 3. Use in Your Project

Add this package as a dependency in your project (after publishing):

```bash
pnpm add @fyzanshaik/chaya-prisma-package
```

---

## Development Workflow

### Making Changes

1. **Create a new branch:**

   ```bash
   git checkout -b feat/your-feature
   ```

2. **Make your changes** (code, schema, or validation).

3. **Run lint and build:**

   ```bash
   pnpm lint
   pnpm build
   ```

4. **Test your changes** in your consuming project if needed.

5. **Commit and push:**

   ```bash
   git add .
   git commit -m "feat: describe your change"
   git push origin feat/your-feature
   ```

6. **Open a Pull Request** on GitHub.

---

## Schema Changes

If you need to update the Prisma schema:

1. **Edit `prisma/schema.prisma`** as needed.

2. **Run migrations (if required):**

   ```bash
   pnpm db:migrate
   ```

3. **Regenerate Prisma Client:**

   ```bash
   pnpm db:generate
   ```

4. **Rebuild the package:**

   ```bash
   pnpm build
   ```

5. **Test the changes** in your consuming project.

---

## Versioning & Publishing

> **Note:** Only maintainers should publish to npm.

### Bump the Version

Use [pnpm version](https://pnpm.io/cli/version) to bump the version:

```bash
pnpm version patch   # or minor/major as appropriate
```

### Publish to npm

```bash
pnpm publish --access public
```

### After PR Merge

- The maintainer will review and merge your PR.
- The maintainer is responsible for bumping the version and publishing to npm.

---

## Contributing

- Please follow the [Conventional Commits](https://www.conventionalcommits.org/) style for commit messages.
- Open a PR for all changes.
- Ensure all builds and lint checks pass before requesting a review.

---

## License

[ISC](./LICENSE)

---

## Maintainers

- [Faizan Shaik](https://github.com/fyzanshaik)

---
