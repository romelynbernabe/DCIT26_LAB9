# Laboratory 1: Questions

1. Plain text directly inside a `View` causes a React Native error because text must be rendered inside a `Text` component.
2. `flex: 1` makes a component expand to fill the available space in its parent layout.
3. The React Native equivalents are `View` for `div`, `Text` for `p`, `Image` for `img`, and `Pressable` (or `Button`) for `button`.
4. `global.css` contains the Tailwind directives that NativeWind processes. `tailwind.config.js` tells Tailwind which files to scan for utility classes and configures the NativeWind preset.
5. `Pressable` is preferred for custom-styled controls because it can contain custom content and respond to presses, while React Native's built-in `Button` has limited styling.
6. A `View` lays out children in a column by default. `flex-row` changes the layout so its children are arranged horizontally.
7. Add an `onPress` handler to the `Pressable`. The handler defines what the app should do when the user presses it.
