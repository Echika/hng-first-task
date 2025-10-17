# HNG Internship 13 - Stage 0 Task

A responsive and accessible profile card component built with vanilla HTML, CSS, and JavaScript as part of the HNG13 Internship Stage 0 requirements.

## 🌐 Live Demo

**Live Site:** [View Project](https://echika.github.io/hng-first-task/)

## 📋 Task Overview

This project implements a testable Profile Card component with semantic HTML and modern frontend patterns. The card displays personal information including name, bio, current time, avatar, social links, hobbies, and dislikes - all with proper accessibility attributes for automated testing.

## ✨ Features

- ✅ **Semantic HTML5** - Uses proper semantic tags (`<article>`, `<header>`, `<nav>`, `<section>`, `<figure>`)
- ✅ **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ✅ **Accessibility First** - Keyboard navigable with visible focus states and proper ARIA labels
- ✅ **Test-Ready** - All elements include required `data-testid` attributes
- ✅ **Real-Time Updates** - Current timestamp in milliseconds updates dynamically
- ✅ **Modern CSS** - Flexbox and Grid layouts with smooth animations
- ✅ **No Frameworks** - Pure vanilla JavaScript, HTML, and CSS

## 🎯 Requirements Met

All HNG13 Stage 0 task requirements have been implemented:

### Required Elements with data-testid:
- [x] Profile card root container - `data-testid="test-profile-card"`
- [x] User name - `data-testid="test-user-name"`
- [x] Biography paragraph - `data-testid="test-user-bio"`
- [x] Current time in milliseconds - `data-testid="test-user-time"`
- [x] Avatar image - `data-testid="test-user-avatar"`
- [x] Social links container - `data-testid="test-user-social-links"`
- [x] Individual social links - `data-testid="test-user-social-{network}"`
- [x] Hobbies list - `data-testid="test-user-hobbies"`
- [x] Dislikes list - `data-testid="test-user-dislikes"`

### Technical Implementation:
- [x] Semantic HTML structure
- [x] Avatar with descriptive alt text
- [x] Social links open in new tab with `rel="noopener noreferrer"`
- [x] Time displays accurate `Date.now()` value
- [x] Responsive layout across all screen sizes
- [x] Keyboard navigation support
- [x] Visible focus indicators

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern layouts (Flexbox, Grid), animations
- **Vanilla JavaScript** - DOM manipulation, time updates

## 📁 Project Structure

```
hng-first-task/
│
├── index.html          # Main HTML structure with semantic tags
├── styles.css          # Responsive styling and animations
├── script.js           # Time update functionality
└── README.md           # Project documentation
```

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Echika/hng-first-task.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd hng-first-task
   ```

3. **Open in your browser:**
   - Simply double-click `index.html`, or
   - Use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     # Then visit: http://localhost:8000
     ```

## 🎨 Design Highlights

- **Modern Gradient Background** - Eye-catching purple gradient
- **Smooth Animations** - Fade-in effects and hover transitions
- **Clean Typography** - Readable fonts with proper hierarchy
- **Professional Layout** - Card-based design with proper spacing
- **Interactive Elements** - Hover effects on social links with visual feedback

## 📱 Responsive Breakpoints

- **Mobile** (< 480px) - Single column, stacked layout
- **Tablet** (768px - 1024px) - Side-by-side avatar and content
- **Desktop** (> 1024px) - Full width with optimal spacing

## ♿ Accessibility Features

- Semantic HTML for screen readers
- Descriptive alt text for images
- ARIA labels for navigation
- Keyboard-focusable interactive elements
- High contrast colors for readability
- Visible focus indicators

## ✅ Testing Checklist

The following automated tests will pass:

- [ ] All required `data-testid` attributes are present
- [ ] Time element displays current `Date.now()` value
- [ ] Avatar includes descriptive `alt` attribute
- [ ] Social links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Layout is responsive at various screen sizes
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are clearly visible

## 🚀 Deployment

This project is deployed using **GitHub Pages**.

**Deployment Steps:**
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select "main" branch and "/ (root)" folder
4. Save and wait for deployment
5. Access at: `https://echika.github.io/hng-first-task/`

## 📖 Learning Resources

- [MDN Web Docs - HTML Semantics](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [MDN Web Docs - Accessible Images](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Images)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## 👨‍💻 Author

**Echika**
- GitHub: [@Echika](https://github.com/Echika)
- Repository: [hng-first-task](https://github.com/Echika/hng-first-task)

## 📝 Task Submission

**HNG13 Stage 0 Task - Frontend Wizards**

- ✅ GitHub Repository: https://github.com/Echika/hng-first-task
- ✅ Live Deployment: https://echika.github.io/hng-first-task/
- ✅ All requirements met
- ✅ Automated tests ready

## 🙏 Acknowledgments

Built as part of the [HNG Internship 13](https://hng.tech/) program - Stage 0 Frontend Wizards task.

## 📄 License

This project is open source and available for HNG13 internship evaluation.

---

⭐ **Star this repo if you find it helpful!**

Built with ❤️ for HNG13 Internship
