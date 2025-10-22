7-1 SCSS Architecture root

This folder uses the 7-1 architecture for organizing SCSS into 7 folders and 1 main file.

Folders:
- abstracts: variables, functions, mixins, placeholders
- base: global styles (typography, resets, global layout)
- components: small, reusable components (buttons, cards, modals)
- layout: layout-related styles (grid, header, footer)
- pages: page-specific styles
- themes: theme variables and theme-specific overrides
- vendors: 3rd-party CSS/overrides

main.scss is the single entry point that imports partials from these folders.

How to use:
- Edit partials in the appropriate folder and import them (already wired in main.scss).
- Watch/compile `SCSS/main.scss` to `css/styles.css` using your Sass watcher or extension.
