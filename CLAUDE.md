# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React component library that provides a Telegram OAuth login button widget. The library wraps the official Telegram login widget script and provides a React-friendly interface.

## Build System

### Commands

- **Install dependencies**: `npm install` - Install all required packages
- **Development (watch mode)**: `npm run start` - Runs webpack in watch mode for development
- **Production build**: `npm run build` - Creates production bundle in `build/` directory
- **Tests**: `npm test` - Note: Tests are not currently configured (exits with error)

### Build Configuration

The project uses **webpack 5** with **Babel 7** to transpile the React component:

- Entry point: `src/index.js`
- Output: `build/index.js` (CommonJS2 format for npm distribution)
- Babel presets: `@babel/preset-env` and `@babel/preset-react` (modern Babel 7 syntax)
- External dependencies: React and prop-types are marked as external to avoid bundling (uses parent project's dependencies)
- Mode: Production by default with automatic optimizations
- Supports React 16.8+, 17.x, and 18.x

## Architecture

### Component Structure

The library exports a single component: `TelegramLoginButton` (src/index.js:5)

**Key implementation details**:

1. **Dynamic script loading**: The component dynamically injects the Telegram widget script (`https://telegram.org/js/telegram-widget.js`) into the DOM on mount (src/index.js:25-26)

2. **Global callback bridge**: Uses a global `window.TelegramLoginWidget` object to bridge the Telegram widget's callback to React props (src/index.js:21-23)

3. **Two authentication modes**:
   - **Callback mode**: Uses `dataOnauth` prop - callback function receives user data directly
   - **Redirect mode**: Uses `dataAuthUrl` prop - redirects user to specified URL with auth params

4. **Props mapping**: Component props are converted to `data-*` attributes on the script tag to configure the Telegram widget (src/index.js:28-42)

### Props

- `botName` (required): The Telegram bot name registered with BotFather
- `dataOnauth`: Callback function that receives user object after authentication
- `dataAuthUrl`: URL for redirect-based authentication (mutually exclusive with `dataOnauth`)
- `buttonSize`: "large", "medium", or "small"
- `cornerRadius`: Custom border radius for the button
- `requestAccess`: Access level (default: "write")
- `usePic`: Show user picture (default: true)
- `lang`: Language code (default: "en")
- `widgetVersion`: Telegram widget version number (default: 22 - latest as of 2025)

### Development Constraints

**Important**: The Telegram login widget has strict requirements:

- Does NOT work on `localhost` or local IP addresses
- Only works on port 80
- Requires a custom domain registered with BotFather (e.g., `yourdomain.local` via hosts file)
- To run with create-react-app: `sudo yarn PORT=80 start` (Unix) or `set PORT=80 && yarn start` (Windows CMD)

## Examples

The `examples/` directory contains a basic usage example showing how to implement the login button with a callback handler.
