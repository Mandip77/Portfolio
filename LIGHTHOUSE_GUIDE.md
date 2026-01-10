# Lighthouse Performance Analysis Guide

## Overview
Lighthouse is Google's tool that measures your website's performance, accessibility, best practices, and SEO. This guide will help you run Lighthouse using Chrome DevTools (the easiest method).

---

## What is Lighthouse?

Lighthouse analyzes your website and gives you:
- **Performance Score** (0-100): How fast your site loads
- **Accessibility Score**: How accessible your site is
- **Best Practices Score**: Adherence to web best practices
- **SEO Score**: Search engine optimization

### Key Performance Metrics:
- **First Contentful Paint (FCP)**: When content first appears
- **Largest Contentful Paint (LCP)**: When main content loads
- **Total Blocking Time (TBT)**: Time page is blocked
- **Cumulative Layout Shift (CLS)**: Visual stability

---

## Prerequisites

1. **Google Chrome browser** (recommended)
2. **Your portfolio running** (either locally or deployed)
3. **10 minutes** of your time

---

## Step 1: Start Your Portfolio

### If Testing Locally:

1. **Open Terminal/Command Prompt**
2. **Navigate to your project**:
   ```bash
   cd react/myprofile
   ```
3. **Start the development server**:
   ```bash
   npm start
   ```
4. **Wait for it to start** - you'll see:
   ```
   Compiled successfully!
   Local: http://localhost:3000
   ```
5. **Note the URL**: Usually `http://localhost:3000`

### If Testing Deployed Site:

1. **Open your deployed portfolio** in Chrome
2. **Note the URL**: e.g., `https://mandip77.github.io/Portfolio`

---

## Step 2: Open Chrome DevTools

### Method 1: Keyboard Shortcut (Easiest)
1. **Press** `F12` on Windows/Linux
2. **Or** `Cmd + Option + I` on Mac

### Method 2: Right-Click Menu
1. **Right-click anywhere** on your portfolio page
2. **Click "Inspect"** or **"Inspect Element"**

### Method 3: Menu Bar
1. **Click the three dots** (⋮) in top-right of Chrome
2. **Go to**: More Tools → Developer Tools

---

## Step 3: Find the Lighthouse Tab

Once DevTools opens:

1. **Look at the top tabs** in DevTools:
   - Elements
   - Console
   - Sources
   - Network
   - **Lighthouse** ← This is what we need!

2. **Click the "Lighthouse" tab**

3. **If you don't see Lighthouse tab**:
   - Click the `>>` icon (double arrow) to see more tabs
   - Or look for a "+" icon to add more tabs

---

## Step 4: Configure Lighthouse

In the Lighthouse tab, you'll see options:

### 1. Categories to Analyze
Check or uncheck these boxes:
- ✅ **Performance** (most important - keep checked)
- ⬜ **Accessibility** (optional)
- ⬜ **Best Practices** (optional)
- ⬜ **SEO** (optional)
- ⬜ **Progressive Web App** (optional)

**For this guide**: Keep **Performance** checked. You can analyze others later.

### 2. Device Type
Choose one:
- **Mobile** (recommended for most users)
- **Desktop** (if you want to test desktop performance)

**For this guide**: Use **Mobile** (simulates mobile users)

---

## Step 5: Run the Analysis

1. **Click the "Analyze page load" button** (blue button at bottom)

2. **Wait for analysis**:
   - Lighthouse will reload your page
   - It will analyze performance
   - This takes **30-60 seconds**
   - You'll see progress: "Gathering data...", "Analyzing page...", etc.

3. **Don't close the tab** while it's analyzing!

---

## Step 6: Review Your Results

After analysis completes, you'll see a report with:

### Performance Score (0-100)
- **90-100**: Excellent! 🎉
- **50-89**: Good, room for improvement
- **0-49**: Needs significant optimization

### Key Metrics

#### First Contentful Paint (FCP)
- **Good**: Under 1.8 seconds
- **Needs improvement**: 1.8-3.0 seconds
- **Poor**: Over 3.0 seconds

#### Largest Contentful Paint (LCP)
- **Good**: Under 2.5 seconds
- **Needs improvement**: 2.5-4.0 seconds
- **Poor**: Over 4.0 seconds

#### Total Blocking Time (TBT)
- **Good**: Under 200 milliseconds
- **Needs improvement**: 200-600 milliseconds
- **Poor**: Over 600 milliseconds

#### Cumulative Layout Shift (CLS)
- **Good**: Under 0.1
- **Needs improvement**: 0.1-0.25
- **Poor**: Over 0.25

### Opportunities Section

Scroll down to see **"Opportunities"** - these are suggestions to improve performance:
- Reduce unused JavaScript
- Optimize images
- Defer offscreen images
- Remove unused CSS
- **Serve video in appropriate sizes** (if video not compressed)
- And more...

### Diagnostics Section

Shows additional information about performance issues.

---

## Step 7: Save the Report

1. **Click "Export"** button (top right of report)
2. **Choose format**:
   - **HTML** (recommended - opens in browser)
   - JSON (for developers)
3. **Save the file** to a location you remember (e.g., Desktop)
4. **File name suggestion**: `lighthouse-report-before-compression.html`

---

## Step 8: Compare Before/After

### Before Video Compression:
1. **Run Lighthouse** (follow steps above)
2. **Note your Performance Score**: _____ / 100
3. **Save report as**: `lighthouse-report-before.html`

### After Video Compression:
1. **Compress your video** (follow `VIDEO_COMPRESSION_GUIDE.md`)
2. **Run Lighthouse again**
3. **Note your new Performance Score**: _____ / 100
4. **Save report as**: `lighthouse-report-after.html`
5. **Compare the scores** - you should see improvement!

---

## Understanding Your Scores

### Performance Score Breakdown:

#### What Affects Your Score?

**Large Impact:**
- **Video file size** (this is why we compress!)
- **Image sizes**
- **JavaScript bundle size**
- **Server response time**

**Medium Impact:**
- **CSS file size**
- **Font loading**
- **Third-party scripts**

**Small Impact:**
- **Caching**
- **Minification**
- **Compression**

### Common Issues and Fixes:

| Issue | Fix |
|-------|-----|
| Large video file | Compress video (see VIDEO_COMPRESSION_GUIDE.md) |
| Unused JavaScript | Code splitting, lazy loading |
| Large images | Compress images, use WebP format |
| Render-blocking CSS | Move CSS to bottom or inline critical CSS |
| Slow server | Use CDN, optimize hosting |

---

## Step 9: Test Different Scenarios

### Test 1: Desktop Performance
1. Select **"Desktop"** device type
2. Run analysis
3. Compare with mobile scores

### Test 2: Different Pages
1. Navigate to different sections
2. Run Lighthouse on each page
3. Compare scores

### Test 3: Throttled Network (Advanced)
1. In DevTools, go to **Network** tab
2. Change throttling to **"Slow 3G"**
3. Run Lighthouse again
4. See how site performs on slow connections

---

## Expected Improvements After Video Compression

### Before Compression:
- **Performance Score**: 40-60 (likely)
- **LCP**: 4-8 seconds
- **Total Blocking Time**: 500-1500ms
- **File Size**: 50-100+ MB

### After Compression:
- **Performance Score**: 70-90 (improved!)
- **LCP**: 2-4 seconds (faster!)
- **Total Blocking Time**: 200-600ms (better!)
- **File Size**: 5-10 MB (80-90% smaller!)

---

## Tips for Best Results

1. **Run analysis on incognito window**:
   - Prevents browser extensions from affecting results
   - More accurate measurement

2. **Close other tabs**:
   - Reduces system resource usage
   - More accurate results

3. **Run multiple times**:
   - Scores can vary slightly
   - Average the results for accuracy

4. **Test on different networks**:
   - Test on WiFi
   - Test on mobile data
   - See how it performs

---

## What to Focus On

### High Priority:
1. ✅ **Compress video** (biggest impact)
2. ✅ **Optimize images**
3. ✅ **Reduce JavaScript bundle size**

### Medium Priority:
4. ⚠️ **Minify CSS and JavaScript**
5. ⚠️ **Use CDN for assets**
6. ⚠️ **Enable caching**

### Low Priority:
7. 💡 **Remove unused code**
8. 💡 **Optimize fonts**
9. 💡 **Reduce third-party scripts**

---

## Next Steps

After running Lighthouse:

1. ✅ **Review your Performance Score**
2. ✅ **Read the "Opportunities" section**
3. ✅ **Implement suggested improvements** (starting with video compression)
4. ✅ **Run Lighthouse again** to see improvements
5. ✅ **Track your progress** - save reports to compare

---

## Need Help?

### Lighthouse Not Showing Up?
- Make sure you're using Chrome (not Edge, Firefox, etc.)
- Update Chrome to latest version
- Try refreshing DevTools (close and reopen)

### Scores Seem Low?
- Don't worry - this is normal for development servers
- Production builds perform better
- Focus on improvements, not absolute scores

### Want More Advanced Analysis?
- Check out Lighthouse CI for automated testing
- Use PageSpeed Insights (online version)
- Try WebPageTest for detailed analysis

---

## Additional Resources

- **Lighthouse Documentation**: https://developers.google.com/web/tools/lighthouse
- **Web.dev Performance Guide**: https://web.dev/performance/
- **Chrome DevTools Guide**: https://developers.google.com/web/tools/chrome-devtools

---

## Quick Checklist

Before running Lighthouse:
- [ ] Portfolio is running (localhost or deployed)
- [ ] Chrome browser installed
- [ ] DevTools can be opened (F12)

Running Lighthouse:
- [ ] Opened Chrome DevTools
- [ ] Found Lighthouse tab
- [ ] Selected "Performance" category
- [ ] Selected "Mobile" device
- [ ] Clicked "Analyze page load"

After analysis:
- [ ] Reviewed Performance Score
- [ ] Read "Opportunities" section
- [ ] Saved report as HTML
- [ ] Noted key metrics (LCP, TBT, CLS)

After video compression:
- [ ] Ran Lighthouse again
- [ ] Compared scores before/after
- [ ] Confirmed improvements

---

**Remember**: Lighthouse is a tool to help you improve, not a judgment. Use it to identify opportunities and track your progress! 🚀
