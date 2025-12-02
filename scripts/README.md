# Nothing Theme

Custom Drupal 11 theme based on Tailwind CSS Starter Kit 5.0.0-alpha4.

## Requirements

- Node.js (v16 or higher)
- npm or yarn
- DDEV

## Quick Start

### 1. Install dependencies

```bash
cd web/themes/custom/nothing
npm install
```

Or using the script:

```bash
./scripts/install.sh
```

### 2. Make scripts executable (only on first setup)

```bash
chmod +x scripts/*.sh
```

### 3. Build CSS

```bash
npm run build
```

Or:

```bash
./scripts/build.sh
```

## Development Commands

### Install dependencies

```bash
npm install
```

The script automatically detects the environment (DDEV or local).

### Build CSS (one time)

```bash
npm run build
```

Creates a minified CSS file in `css/style.css`.

### Watch mode (auto-rebuild on changes)

```bash
npm run dev
```

CSS will automatically rebuild when files in `templates/` and `src/css/` change.

**Recommendation:** Keep this command running in a separate terminal tab during development.

### Production build

```bash
npm run prod
```

Creates an optimized CSS version with minimal file size.

## Working with Tailwind CSS

### Adding custom styles

Edit `src/css/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
.custom-class {
  @apply bg-blue-500 text-white p-4 rounded-lg;
}
```

### Configuring Tailwind

Edit `tailwind.config.js` to add custom colors, fonts, etc.:

```javascript
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e40af',
        'brand-red': '#dc2626',
      },
    },
  },
  plugins: [],
}
```

## Using with DDEV

Scripts automatically detect if DDEV is running and execute commands accordingly.

### If DDEV is running:

```bash
# Commands execute inside the container
./scripts/build.sh
./scripts/watch.sh
```

### If DDEV is not running:

```bash
# Commands execute locally
./scripts/build.sh
./scripts/watch.sh
```

### Alternative DDEV commands

You can also use DDEV directly:

```bash
# Build
ddev exec "cd web/themes/custom/nothing && npm run build"

# Watch mode
ddev exec "cd web/themes/custom/nothing && npm run dev"

# Install dependencies
ddev exec "cd web/themes/custom/nothing && npm install"
```

## Creating New Templates

### Content Type template

Create file `templates/content/node--[content-type].html.twig`:

```twig
<article{{ attributes.addClass('node', 'bg-white', 'rounded-lg', 'shadow-md', 'p-6') }}>
  <h2{{ title_attributes.addClass('text-3xl', 'font-bold', 'mb-4') }}>
    {{ label }}
  </h2>
  <div{{ content_attributes.addClass('prose', 'max-w-none') }}>
    {{ content }}
  </div>
</article>
```

### After creating templates

Clear Drupal cache:

```bash
# With DDEV
ddev drush cr

# Without DDEV
drush cr
```

## Troubleshooting

### Scripts won't execute

Make them executable:

```bash
chmod +x scripts/*.sh
```

### CSS not updating

1. Check that watch mode is running
2. Clear Drupal cache: `ddev drush cr`
3. Rebuild CSS: `npm run build`

### Error "tailwindcss: not found"

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

### node_modules not ignored in Git

Check `.gitignore`:

```
node_modules/
package-lock.json
css/style.css
css/style.css.map
*.log
```

## Files NOT to commit

- `node_modules/` npm dependencies
- `package-lock.json` lock file
- `css/style.css` compiled CSS
- `css/style.css.map` source map
- `*.log` log files

These files are already added to `.gitignore`.

## Production Deployment

Before deploying to production:

1. Build production CSS:
   ```bash
   npm run prod
   ```

2. Commit the compiled `css/style.css`

3. Enable theme on the server:
   ```bash
   drush theme:enable nothing
   drush config-set system.theme default nothing
   drush cr
   ```

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Drupal Theming Guide](https://www.drupal.org/docs/theming-drupal)
- [Twig Documentation](https://twig.symfony.com/doc/)

## Tips

- Use `npm run dev` (watch mode) during development
- Clear Drupal cache after changing templates
- Use Tailwind utility classes instead of custom CSS
- Check compiled CSS file size

## License

MIT

## Author

Pavel Kasianov

---

**Questions?** Create an issue in the project repository.
