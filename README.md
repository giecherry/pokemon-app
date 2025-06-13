# PokeKari - A Pokémon Collection Companion

*A fullstack MVP for organizing your Pokémon card collection*

## 💡 What This Project Is

**PokeKari** is a small but personal web app built for Pokémon collectors like myself. It helps users:

* 🔍 Browse and search Pokémon using the [PokéAPI](https://pokeapi.co/)
* 🧾 Add Pokémon to a **Collection** or **Wishlist**
* ✅ Track what’s missing and what’s been caught
* 🔐 Register/login and securely manage personal Pokémon data
* 🔄 View evolutions to identify collection gaps

This is a fullstack application using React (frontend) and Node.js + Express (backend), with MongoDB Atlas for data storage.

---

## 🚀 How to Run It

Both frontend and backend run **locally**.

---

### 🖥️ Frontend

📁 Repo: [github.com/giecherry/pokemon-app](https://github.com/giecherry/pokemon-app)

```bash
git clone https://github.com/giecherry/pokemon-app
cd pokemon-app
npm install
npm run dev
```

Then visit `http://localhost:5173`.

---

### ⚙️ Backend

📁 Repo: [github.com/giecherry/pokemon-app-BE](https://github.com/giecherry/pokemon-app-BE)

```bash
git clone https://github.com/giecherry/pokemon-app-BE
cd pokemon-app-BE
npm install
```

Create a `.env` file with:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Start the server:

```bash
node server.js
```

Runs on: `http://localhost:3000`

---

## 🔎 Technical Stack

| Frontend     | Backend           | Database      |
| ------------ | ----------------- | ------------- |
| React (Vite) | Node.js + Express | MongoDB Atlas |

---

## ✨ Reflection & Thought Process

At first, I had huge ambitions for this — I tried out **SQLite, PostgreSQL, MongoDB**, **Clerk**, and deployment options like **Vercel** and **Render**. I imagined a polished, full-featured app with filters, trades, recommendations, and more.

But... I was on vacation with family, short on time, and had to pivot hard. That ended up being a good thing.

I focused on building something **functional, personal, and meaningful**. I’ve always collected Pokémon cards and often forget which ones I already own. This app is something I actually wanted to exist.

What I learned:

* How to structure a fullstack app from scratch
* Setting up JWT-based auth and route protection
* Working with MongoDB Atlas in a clean, efficient way
* Making tradeoffs and decisions under tight time constraints
* How to let go of "perfect" and ship a usable MVP

Even though the base project started last year when I was new to React, I completely reworked it — the backend is brand new, and the logic is much more structured.

---

## ⚠️ Known Limitations / What I'd Improve

### Backend

* Proper error handling & input validation
* Refactor routes and logic into cleaner controllers
* Optional: switch to SQL for more structured data relations
* Profile managing routes (change email/password, delete account)
* Pagination for collection/wishlist endpoints (especially useful for large collections)
* Automated tests (unit and integration tests for routes)
* Role-based access control (admin/user roles if needed later)

### Frontend

* Advanced filters (by type, generation, aesthetics)
* Better evolution display (tree view or visual indicators)
* More polished UI & better accessibility
* Dark mode, user preferences, and responsive design
* Toast notifications for actions (e.g., "Added to collection!")

### Dream Features

* ✨ AI suggestions based on personal style (I love cute Pokémon!)
* 📤 Wishlist sharing or trading suggestions
* 🏷️ Tagging system (rare, shiny, favorites, etc.)
* 📊 Dashboard with stats: % caught, types collected, generations completed
* 🧩 Gamification — earn badges for completing types or regions
* 🖼️ Upload your own card scans or notes per Pokémon (keeping track of rare or special illustration)
* 💎 Support for browsing multiple illustrations per Pokémon

---

## 🙋🏽‍♀️ Final Thoughts

This app may look simple, but it carries a lot of intention.

* I took what I learned this year and applied it end-to-end
* I tested different tools, failed, restarted, and found what worked
* I made something I care about — and I had fun doing it (even while frustrated)

I see this project as a launchpad. With more time, I’d love to keep expanding it — make it more fun, more functional, and even more “me.”

---

## 📎 Links

* [Frontend Repo](https://github.com/giecherry/pokemon-app)
* [Backend Repo](https://github.com/giecherry/pokemon-app-BE)
* Made with ❤️ by Angie
