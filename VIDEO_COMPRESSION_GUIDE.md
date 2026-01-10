# Video Compression Guide - Using HandBrake (Easy Method)

## Overview
This guide will help you compress your portfolio's background video from 2160p (4K) to 1080p, reducing file size by 70-90% while maintaining good quality.

## Why Compress?
- **Faster Page Load**: 2-5 seconds faster initial load
- **Better User Experience**: Less waiting for users
- **Lower Bandwidth**: Saves data for mobile users
- **Better Performance**: Improved Core Web Vitals scores

---

## Step 1: Download and Install HandBrake

1. **Visit HandBrake website**: https://handbrake.fr/
2. **Download** the version for your operating system:
   - **Mac**: Download `.dmg` file
   - **Windows**: Download `.exe` installer
   - **Linux**: Download from your distribution's repository
3. **Install** HandBrake:
   - **Mac**: Open the `.dmg` file and drag HandBrake to Applications folder
   - **Windows**: Run the installer and follow the setup wizard

---

## Step 2: Locate Your Video File

1. Open your project folder
2. Navigate to: `react/myprofile/src/assets/`
3. Find the file: `video (2160p).mp4`
4. **Note the location** - you'll need to open this file in HandBrake

---

## Step 3: Open Video in HandBrake

1. **Launch HandBrake** (from Applications on Mac, or Start menu on Windows)
2. **Click "Open Source"** button (or File → Open Source)
3. **Navigate to** your video file: `react/myprofile/src/assets/video (2160p).mp4`
4. **Select the file** and click "Open"
5. Wait for HandBrake to analyze the video (takes a few seconds)

---

## Step 4: Choose Preset Settings

1. **Look at the right sidebar** - you'll see a list of presets
2. **Recommended preset**: 
   - Scroll down to find **"Fast 1080p30"** 
   - Or **"Fast 720p30"** (for even smaller file size)
3. **Click the preset** to select it

**Which preset to choose?**
- **Fast 1080p30**: Better quality, slightly larger file (~5-10 MB)
- **Fast 720p30**: Good quality, smaller file (~3-7 MB)

For a background video, 720p is usually sufficient and will load faster.

---

## Step 5: Adjust Settings (Optional but Recommended)

### Dimensions Tab
1. Click on **"Dimensions"** tab at the top
2. Make sure **"Anamorphic"** is set to **"None"**
3. **Width**: Should be 1920 for 1080p (or 1280 for 720p)
4. **Height**: Should be 1080 for 1080p (or 720 for 720p)
5. If dimensions don't match, HandBrake will automatically scale

### Video Tab
1. Click on **"Video"** tab
2. **Video Encoder**: Should be **H.264 (x264)** (this is good)
3. **Framerate**: 
   - **"30"** or **"Same as source"** (both work fine)
   - For background videos, 30fps is perfect
4. **Quality**: 
   - **RF (Rate Factor)**: Set between **23-28**
   - Lower number = Better quality but larger file
   - Higher number = Smaller file but lower quality
   - **Recommended: 25** (good balance)

### Audio Tab
1. Click on **"Audio"** tab
2. For background videos (usually muted), you can:
   - **Option A**: Keep audio track (if you want sound)
   - **Option B**: Remove audio track (smaller file size)
     - Click the audio track and select **"None"**

---

## Step 6: Choose Output Location

1. **At the bottom** of HandBrake window, click **"Browse"** button
2. **Choose where to save** the compressed video:
   - **Recommendation**: Save to your Desktop or Documents folder
   - **File name**: `hero-video-optimized.mp4` (or any name you prefer)
3. **Click "Save"**

---

## Step 7: Start Compression

1. **Review your settings** one more time:
   - Preset: Fast 1080p30 or Fast 720p30 ✓
   - Output location: Set ✓
   - Quality: RF 23-28 ✓

2. **Click "Start Encode"** button (green play button at the top)

3. **Wait for compression**:
   - You'll see progress bar showing encoding progress
   - **Time**: Usually takes 2-5 minutes depending on video length
   - You can minimize HandBrake and do other things while it works

---

## Step 8: Check File Size

1. **After compression completes**, navigate to the output file you saved
2. **Right-click** the file and select **"Get Info"** (Mac) or **"Properties"** (Windows)
3. **Check the file size**:
   - **Target**: Should be under 10 MB (ideally 5-7 MB)
   - **Original**: Probably 50-100 MB or more
   - **If still too large**: Re-encode with RF 26-28 or use 720p preset

---

## Step 9: Replace Original Video

### Option A: Replace the Original File (Recommended)

1. **Backup the original** (optional but recommended):
   - Right-click `video (2160p).mp4`
   - Copy it to a backup location (Desktop or separate folder)

2. **Rename the compressed video**:
   - Rename your compressed file to: `video (2160p).mp4`
   - (This replaces the original name)

3. **Move the compressed video** to: `react/myprofile/src/assets/`
   - Replace the old file with the new one

### Option B: Use New Filename (Alternative)

1. **Keep the compressed video** as `hero-video-optimized.mp4`
2. **Move it** to: `react/myprofile/src/assets/hero-video-optimized.mp4`
3. **Update the import** in `src/components/Hero.js`:
   ```javascript
   // Change this line:
   import backgroundVideo from '../assets/video (2160p).mp4';
   
   // To this:
   import backgroundVideo from '../assets/hero-video-optimized.mp4';
   ```

---

## Step 10: Test in Browser

1. **Start your development server**:
   ```bash
   cd react/myprofile
   npm start
   ```

2. **Open your portfolio** in browser: http://localhost:3000

3. **Check the video**:
   - Does it load faster? ✓
   - Does it look good as background? ✓
   - Is the quality acceptable? ✓

4. **If quality is poor**: Re-compress with lower RF number (23-24)
5. **If file is still large**: Re-compress with 720p preset

---

## Troubleshooting

### Video Quality is Poor
- **Solution**: Lower the RF number (try 23-24)
- **Or**: Use 1080p preset instead of 720p

### File Size is Still Large
- **Solution**: Increase RF number (try 27-28)
- **Or**: Use 720p preset instead of 1080p
- **Or**: Reduce video length if possible

### HandBrake Crashes
- **Solution**: Make sure you have enough disk space
- **Or**: Try a different preset
- **Or**: Restart HandBrake

### Video Doesn't Load in Browser
- **Solution**: Make sure file is in `src/assets/` folder
- **Or**: Check the file name matches the import in `Hero.js`
- **Or**: Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Expected Results

### Before Compression
- File size: **50-100+ MB**
- Page load time: **5-10+ seconds**
- Video quality: 4K (unnecessary for background)

### After Compression
- File size: **5-10 MB** (80-90% reduction!)
- Page load time: **2-5 seconds** (much faster!)
- Video quality: 1080p or 720p (still looks great)

---

## Quick Reference Settings

### For Best Quality (1080p)
- **Preset**: Fast 1080p30
- **RF**: 23-25
- **Expected size**: 7-10 MB

### For Best Performance (720p)
- **Preset**: Fast 720p30
- **RF**: 25-27
- **Expected size**: 3-7 MB

### For Balanced (Recommended)
- **Preset**: Fast 1080p30
- **RF**: 25
- **Expected size**: 5-8 MB

---

## Next Steps

After compressing your video:

1. ✅ Test the video in your browser
2. ✅ Run Lighthouse analysis (see `LIGHTHOUSE_GUIDE.md`)
3. ✅ Compare performance before/after
4. ✅ Commit your changes to git

---

## Need Help?

If you encounter any issues:
1. Check HandBrake documentation: https://handbrake.fr/docs/
2. Try a different preset
3. Adjust RF quality settings
4. Use 720p instead of 1080p if file is still large

**Remember**: For a background video, perfect quality isn't necessary - faster loading is more important!
