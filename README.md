# Educational Video Player

A modern web application for creating, watching, and commenting on educational videos.

---

## Overview

This is a responsive educational video platform built with React and Tailwind CSS. The application allows users to browse videos, upload new content, watch videos with advanced playback controls, and engage through comments.

### Key Features

- **Video Browsing**: Grid view of all available educational videos
- **Video Upload**: Create new videos with title, description, and video URL
- **Advanced Video Player**: 
  - Play/Pause controls
  - Volume adjustment and mute toggle
  - Playback speed options (0.5x, 1x, 1.5x, 2x)
  - Clickable progress bar for seeking
  - Fullscreen mode
- **Comments System**: View and post comments on any video
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Monochromatic UI**: Clean black, gray, and white color scheme

### Technology Stack

- **Frontend**: React 18.2+ with Hooks and Context API
- **Styling**: Tailwind CSS 3.3+
- **Icons**: Heroicons (inline SVG)
- **API**: RESTful backend integration
- **Build Tool**: Create React App

---

## How to Build and Run

### Prerequisites

- Node.js v14.0.0 or higher
- npm v6.0.0 or higher

### Installation Steps

1. **Create the React project**
   ```bash
   npx create-react-app evpmajick
   cd evpmajick
   ```

2. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind**
   
   Update `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```
   
   Update `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Create project structure**
   ```bash
   mkdir -p src/{api,components/{common,video,comments},views,context,config,types,utils}
   ```

5. **Copy application files**
   
   Copy the provided code into the following structure:
   ```
   src/
   ├── api/videoService.js
   ├── components/
   │   ├── common/ (LoadingSpinner, ErrorMessage, Button)
   │   ├── video/ (VideoCard, VideoPlayer, VideoPlayerControls, VideoInfo)
   │   └── comments/ (CommentsSection, CommentForm, CommentItem)
   ├── views/ (SplashScreen, VideoListView, VideoUploadForm, VideoPlayerView)
   ├── context/ (AppContext, useAppContext)
   ├── config/constants.js
   ├── types/index.js
   ├── utils/validation.js
   └── App.jsx
   ```

6. **Configure your user ID**
   
   Edit `src/config/constants.js`:
   ```javascript
   export const CONFIG = {
     API_BASE_URL: 'https://take-home-assessment-423502.uc.r.appspot.com',
     USER_ID: 'your_name_here', 
     PLAYBACK_SPEEDS: [0.5, 1, 1.5, 2],
     MAX_COMMENT_LENGTH: 500,
   };
   ```

7. **Run the application**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `build/` folder.

---

## Screenshots

### 1. Splash Screen


---

### 2. Video List View

---

### 3. Video Upload Form


---

### 4. Video Player


---

### 5. Comments Section


---

### 6. Responsive Mobile View


---

##  Testing the Application

### Quick Test Guide

1. **Start the application**
   - Verify splash screen loads
   - Click "Get Started" to navigate to video list

2. **Browse videos**
   - Videos should display in a grid
   - Click on any video card to watch

3. **Upload a video**
   - Click "Upload Video" button
   - Fill in the form:
     - Title: "Test Video"
     - Description: "This is a test video for demonstration"
     - Video URL: `https://www.w3schools.com/html/mov_bbb.mp4`
   - Click "Upload Video" button
   - Should redirect to video list with new video

4. **Watch a video**
   - Click on a video card
   - Test all player controls:
     - Play/Pause button
     - Volume slider and mute button
     - Speed controls (0.5x, 1x, 1.5x, 2x)
     - Click on progress bar to seek
     - Fullscreen button

5. **Post a comment**
   - Enter your name in the "Your name" field
   - Type a comment in the comment input
   - Click send button or press Enter
   - Comment should appear in the list

**Video URLs for testing:**
```
https://www.w3schools.com/html/mov_bbb.mp4
https://www.w3schools.com/html/movie.mp4
```

### API Integration

The application connects to:
```
Base URL: https://take-home-assessment-423502.uc.r.appspot.com
```

**Endpoints used:**
- `GET /videos` - Fetch all videos
- `POST /videos` - Create new video
- `GET /videos/{id}/comments` - Get comments for a video
- `POST /videos/{id}/comments` - Post a comment

---

## 📝 Additional Notes

### Important Configuration

Before running the application, make sure to:
1. Update `USER_ID` in `src/config/constants.js` with your name in snake_case format
2. Example: If your name is "Jane Doe", use `'jane_doe'`

### Features Implemented

- View list of videos with thumbnails  
- Select and watch videos  
- Create new videos with form validation  
- Full-screen video playback  
- Playback speed control (0.5x, 1x, 1.5x, 2x)  
- Volume adjustment with mute toggle  
- Comment on videos  
- View comments from other users  
- Responsive design for all devices  
- Clean monochromatic UI design  

### Project Structure

```
src/
├── api/              # API service layer
├── components/       # Reusable UI components
│   ├── common/      # Shared components (Button, Loading, Error)
│   ├── video/       # Video-related components
│   └── comments/    # Comment-related components
├── views/           # Page-level components
├── context/         # State management (React Context)
├── config/          # Configuration constants
├── utils/           # Helper functions
└── App.jsx          # Main application component
```

### Troubleshooting

**Issue: Tailwind styles not showing**
- Restart the development server with `npm start`
- Verify `tailwind.config.js` content paths are correct

**Issue: API calls failing**
- Check browser console for error messages
- Verify `API_BASE_URL` in `constants.js`
- Ensure `USER_ID` is in snake_case format

**Issue: Videos not playing**
- Ensure video URL is a direct link to a video file (.mp4, .webm)
- Test the URL directly in the browser

---
