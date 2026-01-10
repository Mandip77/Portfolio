# Video Optimization Guide

## Current Video Status
Your portfolio currently uses a background video: `video (2160p).mp4` in the Hero section.

## Why Optimize?
- **Performance**: Large video files slow down page load times
- **User Experience**: Faster loading = better user experience
- **Bandwidth**: Reduces data usage for mobile users
- **SEO**: Google favors faster-loading websites

## Recommended Optimizations

### 1. **Compress Video File**
Your current video is 2160p (4K), which is likely very large. For a background video, you don't need such high resolution.

#### Recommended Settings:
- **Resolution**: 1080p (1920x1080) or even 720p (1280x720)
- **Bitrate**: 2-4 Mbps for 1080p, 1-2 Mbps for 720p
- **Format**: MP4 (H.264 codec)
- **Frame Rate**: 24-30 fps (reduce from 60fps if applicable)
- **Target Size**: Keep under 5-10 MB if possible

### 2. **Tools for Compression**

#### Free Online Tools:
- **HandBrake** (Recommended): https://handbrake.fr/
  - Free, open-source video transcoder
  - Cross-platform (Windows, Mac, Linux)
  
- **FFmpeg** (Command Line):
  ```bash
  ffmpeg -i input.mp4 -vf scale=1920:1080 -b:v 2M -r 30 output.mp4
  ```

- **Online Tools**:
  - CloudConvert: https://cloudconvert.com/
  - FreeConvert: https://www.freeconvert.com/video-compressor
  - Clipchamp: https://clipchamp.com/

#### Recommended HandBrake Settings:
1. Open your video file
2. **Preset**: Fast 1080p30 or Fast 720p30
3. **Video**:
   - Video Encoder: H.264 (x264)
   - Framerate: 30 (or Same as source)
   - Constant Quality: RF 23-28 (higher = more compression)
4. **Dimensions**:
   - Resolution Limit: 1080p (or 720p)
   - Anamorphic: None
5. Click "Start Encode"

### 3. **Use Multiple Video Sources (Responsive)**
Consider creating multiple versions:
- **Desktop**: 1080p version
- **Tablet**: 720p version  
- **Mobile**: 480p version (or remove video on mobile)

Update `Hero.js`:
```javascript
const HeroVideo = styled.video`
  /* ... existing styles ... */
  
  @media (max-width: 768px) {
    display: none; /* Option: Hide video on mobile */
  }
`;
```

Or use multiple sources:
```javascript
<HeroVideo autoPlay loop muted playsInline>
  <source src="/videos/hero-1080p.mp4" type="video/mp4" media="(min-width: 1024px)" />
  <source src="/videos/hero-720p.mp4" type="video/mp4" media="(min-width: 768px)" />
  <source src="/videos/hero-480p.mp4" type="video/mp4" />
</HeroVideo>
```

### 4. **Poster Image**
Add a poster image as fallback:
```javascript
<HeroVideo 
  src={backgroundVideo} 
  poster="/images/video-poster.jpg"
  autoPlay 
  loop 
  muted 
  playsInline 
/>
```

### 5. **Preload Strategy**
Current implementation uses `preload="auto"` which is good for background videos that are always visible.

Options:
- `preload="auto"`: Load entire video (current)
- `preload="metadata"`: Load only metadata
- `preload="none"`: Don't preload

### 6. **Lazy Loading Alternative**
For better performance, consider:
- Using a CSS background with a compressed image instead
- Using WebM format (smaller than MP4) with MP4 fallback
- Implementing Intersection Observer to load video only when section is visible

## Implementation Steps

### Step 1: Compress Your Video
1. Use HandBrake or preferred tool
2. Compress to 1080p or 720p
3. Target file size: < 5-10 MB
4. Save as `video-optimized.mp4`

### Step 2: Replace Video File
1. Replace `src/assets/video (2160p).mp4` with optimized version
2. Rename to `hero-video.mp4` (cleaner name)
3. Update import in `Hero.js`:
   ```javascript
   import backgroundVideo from '../assets/hero-video.mp4';
   ```

### Step 3: Test Performance
1. Check file size reduction
2. Test page load time
3. Verify video quality is acceptable
4. Test on mobile devices

## Expected Results
- **File Size Reduction**: 70-90% smaller file
- **Load Time Improvement**: 2-5 seconds faster initial load
- **Better Mobile Experience**: Lower data usage
- **Maintained Quality**: Still looks good as background

## Additional Tips

1. **Consider Removing Video on Mobile**: 
   - Save bandwidth
   - Improve performance
   - Many users prefer static backgrounds on mobile

2. **Use CSS Background Instead**:
   ```javascript
   // Alternative approach
   const HeroSection = styled.section`
     background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
                 url('/images/hero-background.jpg') center/cover;
   `;
   ```

3. **Monitor Performance**:
   - Use Chrome DevTools Network tab
   - Check Lighthouse scores
   - Monitor Core Web Vitals

## Current Status
✅ Video already has overlay for better text readability  
✅ Video uses appropriate attributes (autoPlay, loop, muted, playsInline)  
⚠️ Video file likely needs compression  
⚠️ Consider responsive video sources  

## Next Steps
1. Compress your video file using recommended tools
2. Replace the current video with optimized version
3. Consider adding poster image
4. Test performance improvements
5. Optionally: Add mobile-specific optimization
