# 📱 Practice1 – React Native Mobile App

##  Overview
This is a React Native mobile application built with a modern UI and reusable component architecture.

The app includes:
- Dashboard
- Groups
- Events
- Prayer (WebView integration)
- Give (WebView integration)
- Profile Management

##  Features Implemented

### 🔹 WebView Integration
- Prayer screen loads external website
- Give screen loads external website
- Deep link handling
- External link handling
- Android back button support
- Error handling UI
- Modern skeleton loader

##  Reusable Components
- AppHeader (common header across screens)
- FAB (Floating Action Button)
- PrayerLoader (modern skeleton loader)
- BaseWebViewScreen (shared WebView logic)

### 🔹 Screens
- Dashboard
- Groups
- Events
- Prayer
- Give
- More
- Edit Profile
- Login Flow

### 🔹 Tech Stack
- React Native
- TypeScript
- Tailwind (NativeWind)
- React Navigation
- WebView


## ⚙️ Setup Instructions

Follow the steps below to set up and run the project locally.

### 1. Prerequisites

Make sure the following tools are installed on your system:

- Node.js (v18 or above recommended)
- npm
- Java JDK 17
- Android Studio
- Android SDK
- Git

Verify installation:

node -v  
npm -v  
git --version

---

### 2. Clone the Repository

git clone https://github.com/sridharsridhar27/practice1.git  
cd practice1

---

### 3. Install Dependencies

npm install

---

### 4. Start Metro Server

npm start

Keep this terminal running.

---

### 5. Run the App on Android

Open a new terminal in the project root and run:

npm run android

This will build and install the app on the emulator or connected device.

---

### 6. Start Emulator / Connect Device

Before running the app, make sure:

- Android Emulator is running  
  OR
- A physical device is connected with USB Debugging enabled

Check connected devices:

adb devices

---

### 7. First-Time Build Fix (If Needed)

If the project fails to build the first time, clean and rebuild:

cd android  
gradlew clean  
cd ..  
npm run android

---

### 8. How to Reload the App

- Press **R** twice in the emulator to reload  
  OR
- Open developer menu: Ctrl + M → Reload

---

The app should now be running successfully on your Android device/emulator.

