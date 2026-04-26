# 🔮 Tarot App

A modern mobile Tarot reading application built with **React Native (Expo)**. This app allows users to draw tarot cards, explore different spreads, and save readings for later reflection.

---

## ✨ Features

* 🃏 Multiple Tarot spreads (e.g., Celtic Cross, Three Card, Love Spread)
* 🔄 Animated card reveal system
* 💾 Save and view past readings
* 🧠 Context-aware interpretations per card position
* 🎨 Smooth UI with responsive layouts
* 📱 Built for mobile-first experience (iOS & Android via Expo)

---

## 🧱 Tech Stack

* **React Native**
* **Expo Router** (file-based navigation)
* **TypeScript**
* **Context API** (state management)
* **Async Storage / Local persistence** (for saved readings)

---

## 📁 Project Structure

```
.
├── app/                  # Expo Router screens
├── components/          # UI components (cards, layouts, etc.)
├── context/             # Global state (SpreadContext, etc.)
├── data/                # Tarot cards & spreads definitions
├── services/           # Storage & logic helpers
├── types/              # TypeScript types
├── images/             # Card assets
└── utils/              # Utility functions
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tarot-app.git
cd tarot-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npx expo start
```

Then run on:

* 📱 iOS Simulator
* 🤖 Android Emulator
* 📲 Expo Go app

---

## 🃏 How It Works

1. Select a tarot spread
2. Draw cards from the deck
3. Cards are assigned to positions (e.g., past, present, future)
4. Flip cards to reveal meaning
5. View interpretation based on spread context
6. Save reading for later

---

## 💾 Data Storage

Saved readings are stored locally using async storage (or custom storage service):

* Each reading includes:

  * Selected spread
  * Drawn cards
  * Timestamp
  * Interpretation data

---

## 🧠 Core Concepts

### Spread System

Each spread defines:

* Number of cards
* Position meanings
* Layout rules

### Card Engine

* Randomized draw system
* Prevents duplicates per reading
* Maps cards to spread positions

---

## 📌 Future Improvements

* 🌐 Online sync for readings
* 🤖 AI-generated interpretations
* 🎴 Deck customization
* 🎵 Ambient tarot reading music
* 🌙 Dark/light mystical themes

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is licensed under the MIT License.

---

## 🔮 Notes

This app is designed for entertainment and self-reflection purposes only.

---
