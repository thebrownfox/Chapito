# Chapito

A modern, framework-agnostic horizontal carousel library powered by GSAP.

## Packages

- **@chapito/core** - Core framework-agnostic library
- **@chapito/react** - React integration (coming soon)
- **@chapito/vue** - Vue integration (coming soon)

## Quick Start

```bash
npm install @chapito/core
```

```typescript
import { createChapito } from '@chapito/core';

const carousel = createChapito('#carousel', {
  speed: 50,
  direction: 'left',
  draggable: true,
  pauseOnHover: true
});
```

## Features

- 🎯 Framework agnostic - works with React, Vue, Angular, or vanilla JS
- 🎮 Draggable with momentum scrolling
- 🔄 Infinite loop animation
- 🎨 Smooth GSAP-powered animations
- 📱 Touch/mobile friendly
- 🎛️ Full API control (play, pause, next, previous, goto)
- 🎯 TypeScript support

## Development

This is a monorepo containing:
- Core library in `packages/core/`
- Framework-specific wrappers in respective packages

## License

ISC
