# @chapito/core

A framework-agnostic horizontal carousel library powered by GSAP.

## Installation

```bash
npm install @chapito/core
```

## Usage

### Basic Usage

```typescript
import { createChapito } from '@chapito/core';

// Initialize with a container element
const carousel = createChapito('#carousel-container', {
  speed: 50,
  direction: 'left',
  draggable: true,
  pauseOnHover: true,
  gap: 20
});
```

### Class-based Usage

```typescript
import { Chapito } from '@chapito/core';

const carousel = new Chapito('#carousel-container', {
  speed: 50,
  direction: 'left',
  draggable: true,
  pauseOnHover: true,
  gap: 20
});

// Control the carousel
carousel.play();
carousel.pause();
carousel.next();
carousel.previous();
carousel.goTo(2);

// Get current state
const currentIndex = carousel.getCurrentIndex();

// Clean up
carousel.destroy();
```

## Options

- `speed` (number): Animation speed multiplier (default: 50)
- `gap` (number): Gap between items in pixels (default: 0)
- `direction` ('left' | 'right'): Direction of animation (default: 'left')
- `draggable` (boolean): Enable drag interaction (default: false)
- `pauseOnHover` (boolean): Pause animation on hover (default: true)

## HTML Structure

```html
<div id="carousel-container">
  <div class="carousel-item">Item 1</div>
  <div class="carousel-item">Item 2</div>
  <div class="carousel-item">Item 3</div>
  <!-- Add more items as needed -->
</div>
```

## Framework Integration

This library is framework-agnostic and can be used with React, Vue, Angular, or vanilla JavaScript. Check the framework-specific packages for easier integration:

- `@chapito/react`
- `@chapito/vue`

## License

ISC
