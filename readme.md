# Boiler FrontEnd

This is a standard boiler fronttend for my most common projects. It includes:

-  HTML: Simple and basic
-  CSS: Framework and Essential styles
-  JS: Essential Vanilla JavaScript as modules

# Table of Contents

1. [Debug Module](#debug-module)
2. [CSS Framework](#css-framework)
   -  [Features](#features)
   -  [Getting Started](#getting-started)
   -  [Typography](#typography)
   -  [Layout System](#layout-system)
   -  [Spacing System](#spacing-system)
   -  [Sizing](#sizing)
   -  [Responsive](#responsive)
   -  [Form Components](#form-components)
   -  [Buttons](#buttons)
   -  [Visual Effects](#visual-effects)
   -  [Interactive States](#interactive-states)
   -  [Customization](#customization)
   -  [Browser Support](#browser-support)
   -  [Examples](#examples)
3. [Utility Functions Documentation](#utility-functions-documentation)
   -  [setStyles](#setstyles)
   -  [Table of Contents](#table-of-contents)
   -  [Events](#events)
   -  [DOM Manipulation](#dom-manipulation)
   -  [Performance Utilities](#performance-utilities)
   -  [Math Utilities](#math-utilities)
   -  [Time/Date Utilities](#timedate-utilities)
   -  [Arrays and Objects](#arrays-and-objects)
   -  [Validation and Resilience](#validation-and-resilience)
   -  [Development Utilities](#development-utilities)

<br>
<br>
<br>
<br>

# Debug Module

The `debug.mjs` module provides developer utilities for debugging and inspecting DOM elements during development. It is located at `scripts/modules/utilities/debug.mjs`.

## Features

-  **Debug Button**: Adds a 🪲 button to the page (bottom-right). Clicking toggles the `debugger` class on `<body>`.
-  **Logging**: Conditional logging via `Debug.log(msg)` and `Debug.logTable(obj)` (active in DEV_MODE).
-  **Element Inspection**:
   -  `Debug.logBox(el)`: Logs element size, position, margin, padding, and border.
   -  `Debug.highlight(el, color)`: Highlights an element with a colored outline.
   -  `Debug.randomBg(el)`: Applies a random background color to an element.
-  **DOM Traversal**:
   -  `Debug.logParents(el)`: Logs the element's parent hierarchy.
   -  `Debug.logChildren(el)`: Logs each child element's tag and dimensions.

## Usage

Import and initialize in your main script:

```javascript
import { Debug } from "./modules/utilities/debug.mjs";
Debug.init();
```

Use the provided methods for debugging DOM elements as needed:

```javascript
Debug.log("Debug message");
Debug.highlight(someElement, "blue");
Debug.logBox(someElement);
```

### Enums

The Debug module uses the following ENUMS for log types:

```javascript
ENUM.LOG = {
   RUN: "run", // 🟩
   GLOBAL: "global", // 🌎
   DATA: "data", // 📊
   WARN: "warn", // ⚠️
   ERROR: "error", // ❌
   INIT: "init", // 🛠️
   DEBUG: "debug", // 🐛
};
```

These can be used with `Debug.log` and `Debug.logTable` to categorize and visually distinguish log output.

<br>
<br>
<br>
<br>
<br>
<br>
<br>

# CSS Framework

A lightweight, modern CSS framework focused on utility classes and beautiful form styling. Built with CSS custom properties and mobile-first responsive design. These utilities make it simple to create flexible, responsive layouts without writing custom CSS.

## Features

-  🎨 **Modern Design System** - Consistent spacing, typography, and color palette
-  📱 **Mobile-First Responsive** - Breakpoint-specific utility classes
-  📝 **Advanced Form Styling** - Beautiful forms with validation states
-  🎯 **Utility-First** - Compose designs with utility classes
-  ⚡ **Lightweight** - Minimal footprint with maximum functionality
-  🎭 **CSS Custom Properties** - Easy theming and customization

## Table of Contents

-  [Getting Started](#getting-started)
-  [Typography](#typography)
-  [Layout System](#layout-system)
-  [Spacing System](#spacing-system)
-  [Sizing](#sizing)
-  [Responsive](#responsive)
-  [Form Components](#form-components)
-  [Buttons](#buttons)
-  [Visual Effects](#visual-effects)
-  [Interactive States](#interactive-states)
-  [Customization](#customization)
-  [Browser Support](#browser-support)
-  [Examples](#examples)

## Getting Started

Include the CSS file in your HTML:

```html
<link rel="stylesheet" href="path/to/framework.css" />
```

## Typography

### Headings

All headings include default styling with proper hierarchy:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

### Text Utilities

```html
<p class="text-sm">Small text</p>
<p class="text-base">Normal text</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>

<p class="font-normal">Normal weight</p>
<p class="font-medium">Medium weight</p>
<p class="font-semibold">Semi-bold weight</p>
<p class="font-bold">Bold weight</p>

<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
```

## Layout System

A key feature of this very minimal framework is its robust support for Flexbox and CSS Grid layouts, making it easy to build responsive and complex layouts with utility classes.

### Flexbox Utilities

Use the `.flex` or `.inline-flex` classes to enable flexbox on containers. Additional utility classes allow you to control direction, wrapping, alignment, and spacing:

-  `.flex-row` / `.flex-col`: Set direction to row or column
-  `.flex-wrap` / `.flex-nowrap`: Enable or disable wrapping
-  `.items-start` / `.items-center` / `.items-end` / `.items-stretch`: Align items vertically
-  `.justify-start` / `.justify-center` / `.justify-end` / `.justify-between` / `.justify-around`: Align items horizontally
-  `.flex-1` / `.flex-auto` / `.flex-none`: Control flex grow/shrink behavior

**Example:**

```html
<div class="flex items-center justify-between">
   <div>Left content</div>
   <div>Right content</div>
</div>

<div class="flex flex-col gap-4">
   <div>Item 1</div>
   <div>Item 2</div>
</div>
```

### Grid Utilities

Enable CSS Grid with the `.grid` class. Use column and gap utilities to define grid structure:

-  `.grid-cols-1`, `.grid-cols-2`, `.grid-cols-3`, `.grid-cols-4`, `.grid-cols-6`, `.grid-cols-12`: Set number of columns
-  `.col-span-1` ... `.col-span-12`: Span columns
-  `.gap-1`, `.gap-2`, `.gap-3`, `.gap-4`, `.gap-6`, `.gap-8`: Set grid gap spacing

**Example:**

```html
<div class="grid grid-cols-3 gap-4">
   <div>Column 1</div>
   <div>Column 2</div>
   <div>Column 3</div>
</div>

<div class="grid grid-cols-12 gap-4">
   <div class="col-span-6">Half width</div>
   <div class="col-span-6">Half width</div>
</div>
```

### Container

```html
<div class="container">
   <!-- Content automatically centered with max-width -->
</div>
```

## Spacing System

### Padding

```html
<div class="p-4">All sides padding</div>
<div class="px-4">Horizontal padding</div>
<div class="py-4">Vertical padding</div>
<div class="px-4 py-2">Custom padding</div>
```

### Margin

```html
<div class="m-4">All sides margin</div>
<div class="mx-auto">Centered horizontally</div>
<div class="my-4">Vertical margin</div>
<div class="mb-4">Bottom margin</div>
```

### Spacing Scale

-  `1` = 0.25rem (4px)
-  `2` = 0.5rem (8px)
-  `3` = 0.75rem (12px)
-  `4` = 1rem (16px)
-  `6` = 1.5rem (24px)
-  `8` = 2rem (32px)

## Sizing

### Width & Height

```html
<div class="w-full">Full width</div>
<div class="w-auto">Auto width</div>
<div class="max-w-md">Max width medium</div>
```

### Max Width Classes

-  `max-w-xl` = 36rem
-  `max-w-2xl` = 42rem
-  `max-w-4xl` = 56rem

## Responsive

The framework uses a mobile-first approach with these breakpoints: - `sm:` - 640px and up - `lg:` - 1024px and up

```html
<!-- Hidden on mobile, visible on tablet+ -->
<div class="hidden md:block">Desktop content</div>

<!-- Different grid layouts per breakpoint -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
   <div>Item 1</div>
   <div>Item 2</div>
   <div>Item 3</div>
</div>

<h1 class="text-2xl md:text-3xl lg:text-4xl">Responsive heading</h1>

<!-- Responsive spacing -->
<div class="p-4 md:p-6 lg:p-8">Responsive padding</div>
```

### Display Utilities

```html
<div class="block">Block display</div>
<div class="inline-block">Inline block display</div>
<div class="flex">Flex display</div>
<div class="grid">Grid display</div>
<div class="hidden">Hidden</div>
```

### Position Utilities

```html
<div class="relative">Relative position</div>
<div class="absolute">Absolute position</div>
<div class="fixed">Fixed position</div>
<div class="sticky">Sticky position</div>
```

## Form Components

### Basic Form Structure

```html
<form>
   <div class="form-group">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required />
      <div class="form-help">We'll never share your email with anyone else.</div>
   </div>

   <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required />
   </div>

   <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Form Validation States

```html
<!-- Error State -->
<div class="form-group form-error">
   <label for="email">Email Address</label>
   <input type="email" id="email" name="email" />
   <div class="form-error-message">Please enter a valid email address.</div>
</div>

<!-- Success State -->
<div class="form-group form-success">
   <label for="email">Email Address</label>
   <input type="email" id="email" name="email" />
</div>
```

### Form Controls

```html
<!-- Text Input -->
<input type="text" placeholder="Enter text" />

<!-- Select Dropdown -->
<select>
   <option>Choose option</option>
   <option>Option 1</option>
   <option>Option 2</option>
</select>

<!-- Textarea -->
<textarea placeholder="Enter message"></textarea>

<!-- Checkbox -->
<div class="form-check">
   <input type="checkbox" id="check1" />
   <label for="check1">Check this box</label>
</div>

<!-- Radio Button -->
<div class="form-check">
   <input type="radio" id="radio1" name="radio-group" />
   <label for="radio1">Option 1</label>
</div>

<!-- File Upload -->
<input type="file" accept=".pdf,.doc,.docx" />
```

## Buttons

### Button Variants

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### Button States

```html
<button class="btn btn-primary" disabled>Disabled</button>
```

## Visual Effects

### Shadows

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
```

### Borders

```html
<div class="rounded">Rounded corners</div>
```

### Background Colors

```html
<div class="bg-white">White background</div>
<div class="bg-gray-50">Light gray background</div>
<div class="bg-gray-100">Lighter gray background</div>
<div class="bg-gray-200">Light gray background</div>
<div class="bg-gray-300">Medium light gray background</div>
<div class="bg-gray-400">Medium gray background</div>
<div class="bg-gray-500">Medium dark gray background</div>
<div class="bg-gray-600">Dark gray background</div>
<div class="bg-gray-700">Darker gray background</div>
<div class="bg-gray-800">Very dark gray background</div>
<div class="bg-gray-900">Nearly black background</div>

<div class="bg-primary">Primary color background</div>
<div class="bg-secondary">Secondary color background</div>
<div class="bg-accent">Accent color background</div>

<div class="bg-success">Success state background</div>
<div class="bg-warning">Warning state background</div>
<div class="bg-error">Error state background</div>
```

## Interactive States

### Transitions

```html
<div class="transition-all">All properties transition</div>
<div class="transition-fast">Fast transition</div>
<div class="transition-slow">Slow transition</div>
```

### Cursor

```html
<div class="cursor-pointer">Pointer cursor</div>
<div class="cursor-not-allowed">Not allowed cursor</div>
```

### Opacity

```html
<div class="opacity-50">50% opacity</div>
<div class="opacity-75">75% opacity</div>
```

## Customization

### CSS Custom Properties

You can customize the framework by overriding CSS custom properties:

```css
:root {
   --primary: #your-primary-color;
   --space-4: 1.5rem; /* Custom spacing */
   --font-family-base: "Your Font", sans-serif;
}
```

### Extending the Framework

Add your custom styles after the framework:

```css
/* Custom component */
.card {
   @apply bg-white shadow-md rounded-lg p-6;
   /* Additional custom styles */
}
```

## Browser Support

-  Chrome 60+
-  Firefox 55+
-  Safari 12+
-  Edge 79+

## Examples

### Login Form

```html
<form class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
   <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>

   <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" required />
   </div>

   <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" required />
   </div>

   <div class="form-check mb-4">
      <input type="checkbox" id="remember" />
      <label for="remember">Remember me</label>
   </div>

   <button type="submit" class="btn btn-primary w-full">Login</button>
</form>
```

### Card Layout

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-3">Card Title</h3>
      <p class="text-gray-600 mb-4">Card description goes here.</p>
      <button class="btn btn-primary">Learn More</button>
   </div>
   <!-- More cards... -->
</div>
```

### Navigation Bar

```html
<nav class="bg-white shadow-sm border-b">
   <div class="container">
      <div class="flex items-center justify-between py-4">
         <div class="text-xl font-bold">Logo</div>
         <div class="hidden md:flex items-center gap-6">
            <a href="#" class="text-gray-600 hover:text-primary">Home</a>
            <a href="#" class="text-gray-600 hover:text-primary">About</a>
            <a href="#" class="text-gray-600 hover:text-primary">Contact</a>
         </div>
         <button class="btn btn-primary">Get Started</button>
      </div>
   </div>
</nav>
```

<br>
<br>
<br>
<br>
<br>

# Utility Javascript Documentation

Below is the documentation for all of the provided utility functions. These utilities cover common DOM operations, event handling, date/time formatting, array manipulation, and more. Each function is designed to simplify and standardize common tasks in front-end development.

## Table of Contents

1. [Events](#events)
2. [DOM Manipulation](#dom-manipulation)
3. [Style Manipulation](#style-manipulation)
4. [Performance Utilities](#performance-utilities)
5. [Math Utilities](#math-utilities)
6. [Time/Date Utilities](#timedate-utilities)
7. [Arrays and Objects](#arrays-and-objects)
8. [Validation and Resilience](#validation-and-resilience)
9. [Development Utilities](#development-utilities)
   <br>
   <br>

## Events

### `eventAdd`

Adds an event listener to a DOM element or collection of elements.

**Parameters**:

-  `el`: The element or collection of elements.
-  `event`: The event type (e.g., "click").
-  `handler`: The event handler function.

Adds an event listener to a DOM element or collection of elements.

**Parameters**:

-  `el`: The element or collection of elements.
-  `event`: The event type (e.g., "click").
-  `handler`: The event handler function.
   <br>
   <br>

## DOM Manipulation

### `querySelector`

**Parameters**:

-  `selector`: CSS selector string.
-  `parent`: (Optional) Parent element/document to search within (default is `document`).
-  The first matched element or `null`.

---

### `querySelectorAll`

Selects all elements matching a CSS selector.

**Parameters**:

-  `selector`: CSS selector string.
-  `parent`: (Optional) Parent element/document to search within (default is `document`).

**Returns**:

-  A `NodeList` of matched elements.

---

### `isElement`

Checks if the provided value is a DOM element.

**Parameters**:

-  `el`: The value to check.

**Returns**:

-  `true` if the value is a DOM element, otherwise `false`.

---

### `createElement`

Creates and optionally inserts a new DOM element with various options.

**Parameters**:

-  `type`: The type of element to create (e.g., `div`).
-  `options`: (Optional) An object with the following properties:
   -  `classes`: Array of CSS class names to add to the element.
   -  `id`: String ID to assign to the element.
   -  `attributes`: Object of attribute key-value pairs to set on the element.
   -  `innerHTML`: HTML content to set inside the element.
   -  `textContent`: Text content to set inside the element.
   -  `parent`: Parent element to append the new element to.
   -  `insertPosition`: Position for insertion when using a parent (`beforebegin`, `afterbegin`, `beforeend`, `afterend`).
   -  `styles`: Object of CSS style properties to apply to the element.
   -  `dataset`: Object of data attributes to set (automatically prefixed with `data-`).
   -  `eventListeners`: Object where keys are event types and values are handler functions.

**Returns**:

-  The created DOM element.

<br>

**Example:**

```javascript
import { createElement } from "./modules/utilities/utils.mjs";

const parent = document.getElementById("container");
const newDiv = createElement("div", {
   classes: ["card", "shadow"],
   id: "myCard",
   parent: parent,
   textContent: "Hello World!",
   attributes: { "data-role": "info" },
});
// newDiv is now appended to #container with the specified classes, id, text, and attribute.
```

## <br>

### `hide`, `show`, `addClass`, `removeClass`, `toggleClass`

Utility functions for modifying visibility and classes of elements.

**Parameters**:

-  `el`: Element or collection of elements.
-  `string`: (Optional) The class name to add, remove, or toggle.

---

### `disable`, `enable`

Disables or enables a DOM element or collection of elements.

**Parameters**:

-  `el`: Element or collection of elements.

---

### `prepend`, `append`

Inserts HTML content before or after specified positions in elements.

**Parameters**:

-  `el`: Element or collection of elements.
-  `html`: The HTML string to insert.
-  `position`: (Optional) Position string (`beforebegin`, `afterbegin`, `beforeend`, `afterend`).

---

### `hasClass`

Checks if an element has a specific class.

**Parameters**:

-  `el`: The DOM element.
-  `className`: The class name to check for.

**Returns**:

-  `true` if the element has the class, otherwise `false`.

---

### `setAttribute`, `removeAttribute`

Sets or removes attributes on a DOM element.

**Parameters**:

-  `el`: The DOM element.
-  `key` / `attributeName`: The attribute name.
-  `value`: (For `_setAttribute`) The attribute value.

<br>
<br>

## Style Manipulation

### setStyles

Applies multiple CSS styles to a DOM element efficiently.

**Location:** `scripts/modules/utilities/utils.mjs`

**Usage:**

```javascript
import { setStyles } from "./modules/utilities/utils.mjs";
const el = document.getElementById("myElement");
setStyles(el, {
   color: "red",
   backgroundColor: "#eee",
   fontWeight: "bold",
});
```

**Parameters:**

-  `el`: The DOM element to style.
-  `objStyles`: An object where keys are CSS property names and values are the styles to apply.

Throws an error if the provided element is not a valid DOM element.

<br>
<br>

## Performance Utilities

### `debounce`

Delays invoking a function until a specified delay has passed since the last call.

**Parameters**:

-  `fn`: The function to debounce.
-  `delay`: The delay in milliseconds.

**Returns**:

-  A debounced function.

---

### `throttle`

Ensures a function is invoked at most once every specified time interval.

**Parameters**:

-  `fn`: The function to throttle.
-  `limit`: The interval in milliseconds.

**Returns**:

-  A throttled function.

<br>
<br>

## Math Utilities

### `getRandomInclusive`

Generates a random integer between two values, inclusive.

**Parameters**:

-  `min`: Minimum value.
-  `max`: Maximum value.

**Returns**:

-  A random integer.

---

### `getRandomExclusive`

Generates a random integer between two values, excluding the min and max.

**Parameters**:

-  `min`: Minimum value.
-  `max`: Maximum value.

**Returns**:

-  A random integer.

---

### `summation`

Calculates the summation of a sequence defined by a term function.

**Parameters**:

-  `start`: Starting value.
-  `end`: Ending value.
-  `termFunction`: (Optional) Function to apply to each term (default is identity).

**Returns**:

-  The summation result.

<br>
<br>

## Time/Date Utilities

### `getCurrentDateTime`

Returns the current date and time as a `Date` object.

**Returns**:

-  A `Date` object.

---

### `addDays`

Adds a specified number of days to a date.

**Parameters**:

-  `date`: The original date.
-  `days`: Number of days to add.

**Returns**:

-  A new `Date` object.

---

### `dateDifferenceInDays`

Calculates the difference in days between two dates.

**Parameters**:

-  `date1`, `date2`: The two dates to compare.

**Returns**:

-  The number of days between the two dates.

---

### `parseDate`

Parses a date string in `YYYY-MM-DD` format.

**Parameters**:

-  `dateString`: The date string to parse.

**Returns**:

-  A `Date` object.

---

### `formatDate`

Formats a date based on a specified format and locale.

**Parameters**:

-  `date`: The date to format.
-  `options`: An object with properties like `format` and `locale`.

**Returns**:

-  A formatted date string.

---

### `formatDateLocale`

Formats a date using `Intl.DateTimeFormat` with flexible options.

**Parameters**:

-  `date`: The date to format.
-  `options`: Options including `locale`, `dateStyle`, and `timeStyle`.

**Returns**:

-  A formatted date string.

<br>
<br>

## Arrays and Objects

### `shuffleArray`

Randomly shuffles the elements of an array.

**Parameters**:

-  `array`: The array to shuffle.

**Returns**:

-  A shuffled array.

---

### `uniqueArray`

Returns a new array with unique elements.

**Parameters**:

-  `array`: The array to filter.

**Returns**:

-  An array of unique elements.

---

### `chunkArray`

Splits an array into chunks of a specified size.

**Parameters**:

-  `array`: The array to split.
-  `size`: Size of each chunk.

**Returns**:

-  An array of chunks.

<br>
<br>

## Validation and Resilience

### `ensureElements`

Normalizes various inputs into an array of elements.

**Parameters**:

-  `el`: The input to normalize.
-  `throwOnError`: (Optional) Whether to throw an error on invalid input.

**Returns**:

-  An array of elements.

<br>
<br>

## Development Utilities

### `log`

Logs messages or values with a module name prefix and emoji type indicator.

**Parameters:**

-  `msg`: Message (string, array, or object) to log.
-  `type`: (Optional) Log type (see ENUMS below).

**Usage:**

```javascript
import { log, ENUM } from "./modules/utilities/utils.mjs";
log("App started", ENUM.LOG.INIT);
log({ user: "Alice", status: "active" }, ENUM.LOG.DATA);
```

## <br>

### `logTable`

Logs an object as a table in the console, with emoji type indicator.

**Parameters:**

-  `obj`: Object to log as a table.
-  `type`: (Optional) Log type (see ENUMS below).

**Usage:**

```javascript
import { logTable, ENUM } from "./modules/utilities/utils.mjs";
logTable({ apples: 5, oranges: 3 }, ENUM.LOG.DATA);
```

### Enums

The following log types are available for use with `log` and `logTable`:

```javascript
ENUM.LOG = {
   RUN: "run", // 🟩
   GLOBAL: "global", // 🌎
   DATA: "data", // 📊
   WARN: "warn", // ⚠️
   ERROR: "error", // ❌
   INIT: "init", // 🛠️
   DEBUG: "debug", // 🐛
};
```
