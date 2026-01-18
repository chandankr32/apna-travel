# 🚕 Apna Tour & Travel - Ranchi

A premium, high-conversion landing page for taxi and travel services in Ranchi, Jharkhand.

## 🚀 How to Deploy to GitHub Pages (Fixing the Error)

If you saw the error `No such file or directory @ ... /docs`, follow these steps:

1. **Upload Files**: Ensure all files (index.html, index.tsx, App.tsx, etc.) are in the **root** folder of your repository (not inside a `src` or `docs` folder).
2. **Go to Settings**: In your GitHub repository, click on the **Settings** tab at the top.
3. **Pages Section**: Click on **Pages** in the left-hand sidebar.
4. **Build and Deployment**:
   - **Source**: Deploy from a branch.
   - **Branch**: Select `main` (or your active branch).
   - **Folder**: Change this from `/docs` to **`/(root)`**. 👈 *This fixes your specific error.*
5. **Save**: Click Save.
6. **Wait**: Your website will be live at `https://your-username.github.io/your-repo-name/` in about 1-2 minutes.

## ✨ Features

- **Premium Fleet**: Showcasing Maruti Suzuki Ertiga and Toyota Innova Crysta with cinematic transitions.
- **WhatsApp Integration**: All booking forms redirect directly to your WhatsApp with pre-filled trip details.
- **Modern UI**: Built with Tailwind CSS, featuring a glassmorphism navbar and smooth animations.
- **Mobile Optimized**: Fully responsive design for booking on the go.

## 📞 Support
Update the phone number in `constants.tsx` to your own to receive bookings!
