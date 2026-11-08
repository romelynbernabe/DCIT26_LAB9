# Romelyn D. Bernabe — LAB 9 React Native

**Name:** Romelyn D. Bernabe  
**Course/Year/Section:** BSIT 3-7

This project is based on the uploaded laboratory handout: React Native with Expo and NativeWind/Tailwind.

## Run the project

1. Install Node.js LTS (the lab handout recommends Node 22.13 or newer), Visual Studio Code, and Android Studio.
2. In Android Studio, install Android SDK and create/start an Android Virtual Device (AVD).
3. Open this project folder in VS Code.
4. In the VS Code terminal, install dependencies:

   ```bash
   npm install
   ```

5. Start Expo:

   ```bash
   npx expo start -c
   ```

6. When Expo starts and the Android emulator is running, press `a` in the terminal to open the app on Android.
   - Press `w` for web preview (if web dependencies are installed and configured).
   - Press `Ctrl + C` to stop the server.

## If creating a fresh Expo project instead

The lab handout recommends Expo SDK 57. In a terminal, run:

```bash
npx create-expo-app@latest lab1-hello-rn --template blank@sdk-57
cd lab1-hello-rn
```

Then copy the source/config files from this package into the new project, keeping the Expo-generated `package.json` and `app.json`. Install the NativeWind packages listed in the lab handout before running.

## GitHub commands

Create an empty repository on GitHub first (do not add README, license, or .gitignore there if you already have this README locally). Then run these commands from the project folder, replacing the URL with your repository URL:

```bash
git init
git add .
git commit -m "Complete React Native LAB 9"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If Git says `remote origin already exists`, use:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Do not upload `node_modules`. It should be ignored by Git.
