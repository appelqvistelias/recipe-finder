# 🥘 Recipe Finder

A simple and elegant recipe search application built with **React**. It allows users to find recipes using the **Edamam API**, view detailed ingredients, and even see unit conversions tailored to Swedish measurements.

## 🌟 Features

- 🔎 Search for recipes by keyword
- 📋 View ingredients, calories, and diet labels
- 🇸🇪 Unit conversion to Swedish-friendly measurements
- 📱 Responsive design for mobile and desktop

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- Edamam API credentials (get them at [https://developer.edamam.com/](https://developer.edamam.com/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/appelqvistelias/recipe-finder.git
   cd recipe-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your Edamam credentials:

   ```
   VITE_APP_ID=your_app_id
   VITE_APP_KEY=your_app_key
   VITE_USER_ID=your_user_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack

- **React** – Frontend library
- **Vite** – Fast dev/build tool
- **Edamam API** – Recipe and nutrition data

## 📂 Folder Structure

```
src/
├── api/
├── components/
├── pages/
├── App.css
├── App.jsx
└── index.css
└── main.jsx
```

## 📄 License

MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are welcome! Please open issues and submit PRs to improve the app.
