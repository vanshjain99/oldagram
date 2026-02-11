# Oldagram 🎨

A nostalgic Instagram-style social media feed featuring posts from famous classical artists. Built with vanilla JavaScript, HTML, and CSS.

## 🌐 Live Demo

Check out the live application: [https://oldagram-app1.netlify.app/](https://oldagram-app1.netlify.app/)

## 📖 Overview

Oldagram is a playful take on Instagram, reimagining what social media might look like if famous historical artists had accounts. The application displays a feed of posts with artist avatars, images, locations, and humorous comments in their voices.

## ✨ Features

- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Artist Posts**: Features posts from renowned artists including:
  - Vincent van Gogh
  - Gustave Courbet
  - Joseph Ducreux
- **Interactive Elements**: Like, comment, and share icons for each post
- **Dynamic Rendering**: Posts are dynamically generated from JavaScript data

<img width="300" alt="image" src="https://github.com/user-attachments/assets/7c434094-1660-4ba8-beab-6fd02816343b" />


## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript (ES6)**: Dynamic content rendering and interactivity
- **Vite**: Build tool and development server
- **Normalize.css**: CSS reset for cross-browser consistency

## 📁 Project Structure

```
oldagram/
├── index.html          # Main HTML file
├── script.js           # JavaScript logic for rendering posts
├── style.css           # Styling and layout
├── images/             # Avatar and post images
├── fonts/              # Custom fonts
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (for running development server)
- A modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vanshjain99/oldagram.git
cd oldagram
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## 💻 Usage

The application automatically renders posts from the `posts` array in `script.js`. Each post object contains:

```javascript
{
    name: "Artist Name",
    username: "artisthandle",
    location: "City, Country",
    avatar: "path/to/avatar.jpg",
    post: "path/to/post-image.jpg",
    comment: "Artist's witty comment",
    likes: 21
}
```

To add new posts, simply add a new object to the `posts` array in `script.js`.

## 🎨 Customization

- **Add More Artists**: Extend the `posts` array with new artist data
- **Modify Styling**: Update `style.css` to change colors, fonts, and layout
- **Add Features**: Enhance the JavaScript to include interactive like buttons, comment functionality, etc.

## 📱 Responsive Design

The application is fully responsive and optimized for various screen sizes, from mobile phones to desktop displays.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Vansh Jain**
- GitHub: [@vanshjain99](https://github.com/vanshjain99)

## 🙏 Acknowledgments

- Inspired by Instagram's design
- Features artwork from famous historical artists
- Built as a learning project to practice vanilla JavaScript

---

⭐ Star this repository if you find it helpful!
```
