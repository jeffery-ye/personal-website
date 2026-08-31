# Jeffery Ye - Personal Portfolio

[jeffye.com](https://www.jeffye.com)

GREETINGS! This is a personal portfolio website built to showcase Software and AI Engineering projects. This site features a cool space theme, interactive animations, and a centralized content management system.

## Built With

* **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Fonts:** Space Grotesk (Headers) & Inter (Body)

## Features

* **Constellation View:** An interactive galaxy-style navigation mode with animated star nodes, warp transitions between systems, and nebula backgrounds. Toggle between Galaxy and Normal views.
* **Custom Space Theme:** A unique dark mode aesthetic with starfield backgrounds and glassmorphism effects.
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile. Mobile devices automatically use the accessible List View.
* **Accessibility:** Respects `prefers-reduced-motion`, with graceful fallbacks.
* **Interactive Components:** Includes draggable canvas, animated constellation lines, gradient text effects, and hover animations.
* **PDF Integration:** Embedded resume viewer with download and print capabilities.

## Getting Started

If you would like to take this project for whatever uses you can come up with, follow the steps below!

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/jeffery-ye/personal-website.git](https://github.com/jeffery-ye/personal-website.git)
    cd personal-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the site.

## Project Structure

```text
src/
├── assets/          # Images and Resume PDF
├── components/      # Reusable UI components
│   └── galaxy/      # Galaxy View components (GalaxyCanvas, GalaxyNode, etc.)
├── data/            # Central content file (content.js)
├── hooks/           # Custom hooks (useHardwareCheck)
├── pages/           # Page layouts (Home, About, Projects, Resume)
├── store/           # Zustand state store (useStore.js)
├── App.jsx          # Main application wrapper
└── index.css        # Tailwind imports and global styles
