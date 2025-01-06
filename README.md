<p align="center">
  <a href="https://www.npmjs.com/package/@shivangi_2408/effective-ui">
      <h1 align="center">Effective-UI</h1>
  </a>
</p>
</br>



## Getting Started

Visit <a aria-label="effective-ui learn" href="https://github.com/shivi2408/effective-ui">effective-ui</a> to get started with effective-ui.

NPM Package : https://www.npmjs.com/package/@shivangi_2408/effective-ui

## Storybook

Visit [https://shivi2408.github.io/effective-ui/](https://shivi2408.github.io/effective-ui/) to view the storybook for all components.


## Installation

```bash
# Using npm
npm install @shivangi_2408/effective-ui

# Using yarn
yarn add @shivangi_2408/effective-ui

# Using pnpm
pnpm add @shivangi_2408/effective-ui
```

## Quick Start

```tsx
import { Button } from '@shivangi_2408/effective-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Hello!')} size ="sm">
      Click me
    </Button>
  );
}
```

## Theme Setup [dark, light]

### Step 1. Integrating Theme Provider in Your Project

#### In your main or root file (e.g., main.tsx or index.tsx), wrap your application with the ThemeProvider to enable theming across your project.

```tsx
....
import { ThemeProvider } from "./theme/ThemeProvider";
....

  <>
    <ThemeProvider>
    ...
      <App />
      ...
    </ThemeProvider>
  </>
);

```


### Step 2. Add CSS for Theming
#### Include the theme CSS file provided by the library in your project. Use the CSS @layer feature to ensure proper layering and avoid style conflicts.
```css

@import "@shivangi_2408/effective-ui/dist/theme.css" layer(effective-ui);

@layer effective-ui, project-styles; /* Ensures your styles load before their custom styles */

```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run Storybook
npm run storybook
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Community

We're excited to see the community adopt effective-ui, raise issues, and provide feedback.
Whether it's a feature request, bug report, or a project to showcase, please get involved!
- [GitHub Discussions](https://github.com/effective-ui/effective-ui/discussions)


## License

[Apache License 2.0](https://github.com/shivi2408/effective-ui/blob/main/LICENSE)