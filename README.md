# Multimedia & Authoring Portfolio

A professional portfolio website showcasing rotoscoping and 3D rendering projects for multimedia and digital authoring.

## Overview

This project is a modern, responsive portfolio website created for **Kim Ryan B. Macaroncio** (BSIT-NS-2A-T), showcasing work in:
- **3D Solar System** - A dynamic 3D rendering project created in Blender with Python scripting
- **1-Minute Video Rotoscope** - A frame-by-frame animation project using Adobe After Effects

## Features

✨ **Modern Design**
- Dark theme with cyan/blue accent colors
- Smooth animations and transitions
- Professional and clean layout

📱 **Responsive Layout**
- Mobile-friendly grid system
- Adaptive navigation
- Works on all device sizes

🎨 **Rich Content**
- Project showcase with detailed descriptions
- Technical specifications and tools used
- Professional about/profile section
- Step-by-step tutorials

## Project Structure

```
M&A/
├── index.html              # Home page
├── portfolio.html          # Project details
├── about.html             # About & skills
├── css/
│   └── styles.css         # Main stylesheet
├── images/                # Project images (placeholder)
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## Pages

### Home (index.html)
- Hero section with project overview
- Featured projects showcase
- Personal projects grid
- Navigation to other sections

### Portfolio (portfolio.html)
- Detailed project information
- Tools and technologies used
- Render information and specifications
- Animation sequences and process details
- Step-by-step tutorials

### About (about.html)
- Professional biography
- Skills and expertise
- Technical proficiencies
- Education information
- Creative philosophy

## Technologies Used

### Frontend
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Responsive Design

### Tools & Skills Showcased
- **3D**: Blender, 3D Modeling
- **Video**: Adobe After Effects, Adobe Premiere Pro, CapCut
- **Programming**: Python Scripting

## How to Use

### Option 1: Direct Browser Access
Simply open `index.html` in any modern web browser.

### Option 2: Local Server
Run a local server to test:
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

### Option 3: Live Server (VS Code)
1. Install Live Server extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Browser Compatibility
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding Project Images
1. Place images in the `images/` folder
2. Update the image placeholders in HTML files
3. Modify image paths in project-image-placeholder sections

### Embedding Videos
Replace placeholder divs with iframe embeds:
```html
<iframe width="100%" height="600" src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen></iframe>
```

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #00d4ff;      /* Cyan */
    --secondary-color: #0099cc;    /* Blue */
    --dark-bg: #0a0e27;           /* Dark background */
    --card-bg: #1a1f3a;           /* Card background */
}
```

## Content Sections

### Project Details Included
- **3D Solar System**
  - Tools: Blender 3.1, Python Scripting
  - Render time: 13.5 hours
  - Resolution: 1920x1080 @ 24fps
  - Features: Procedural system, orbital mechanics, atmospheric effects

- **1-Minute Video Rotoscope**
  - Tools: Adobe After Effects, Adobe Premiere Pro, CapCut
  - Process: Frame-by-frame tracing with auto-brush
  - Techniques: Background removal, motion tracking, stylized animation

## Credits

**Portfolio Creator:** Kim Ryan B. Macaroncio  
**Program:** Bachelor of Science in Information Technology  
**Specialization:** Multimedia & Authoring  
**Year:** 2026  
**Disclaimer:** Academic project created for educational purposes

## License

© 2025 Kim Ryan B. Macaroncio (BSIT-NS-2A-T). All rights reserved.

## Notes

This is a work-in-progress portfolio website. Current features:
- ✅ Complete HTML structure
- ✅ Professional CSS styling with dark theme
- ✅ Responsive mobile design
- ✅ All pages created and linked
- ⏳ Ready for video embeds
- ⏳ Ready for image assets

## Future Enhancements

- Add actual project images
- Embed YouTube videos
- Add contact form
- Implement smooth scroll sections
- Add project filtering
- Include testimonials/feedback section
- Add blog or tutorials section

---

**Status:** Active - Placeholder stage  
**Last Updated:** April 2026
