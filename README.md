1. Initialize project

```
npx react-native init StorybookDemo --title "Storybook Demo"
```

2. Install storybook in the project and install all dependencies

```
npx -p @storybook/cli sb init --type react_native
```

3. Use node v16.13.0

```
nvm install v16.13.0
nvm use v16.13.0
```

4. Upgrade storybook

```
npx sb upgrade
```

5. Disable inline requires from metro.config.js

```
inlineRequires: false
```

6. Run the storybook

```
npm run storybook
npm run start:storybook
npx react-native run-ios
```

X. Install additional packages

```
npm i @storybook/addons @storybook/theming react-native-storybook-loader --save-dev
```
