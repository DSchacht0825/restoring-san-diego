# Hero Background Image

## Image Requirements

Place your hero background image here as `hero-background.jpg`

### Recommended Specifications:
- **File name**: `hero-background.jpg` (or update CSS if using different name)
- **Dimensions**: 1920x1080px or higher for best quality
- **Aspect ratio**: 16:9 or similar landscape orientation
- **File size**: Optimized for web (under 500KB recommended)
- **Format**: JPG for photos, PNG for graphics with transparency

### Current Setup:
- Image will display with cover sizing (fills entire hero section)
- Centered positioning for best visual impact
- Blue overlay with 70-60% opacity maintains text readability
- Responsive design works on all screen sizes

### To Add Your Image:
1. Save your image as `hero-background.jpg` in this folder
2. Or rename your image file and update the CSS path in `css/styles.css` line 246

### Alternative Image Formats:
If using a different format, update this line in `css/styles.css`:
```css
background-image: url('../images/hero/your-image-name.jpg');
```

The overlay will ensure text remains readable regardless of image contrast.