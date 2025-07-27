# Deployment Guide

This guide explains how to deploy your freelance portfolio website to GitHub Pages using the automated GitHub Actions workflow.

## 🚀 Quick Deployment

The website is configured for automatic deployment to GitHub Pages. Follow these steps:

### 1. Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on every push to the `main` branch

### 2. Repository Configuration

If your repository name is different from the default, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  
  // Update these if your repo name is different
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
};
```

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

- ✅ Trigger on every push to `main` branch
- ✅ Install dependencies and build the project
- ✅ Generate static files optimized for GitHub Pages
- ✅ Deploy automatically to GitHub Pages
- ✅ Provide deployment status and URL

## 📋 Deployment Process

### What Happens During Deployment:

1. **Checkout Code**: Gets the latest code from your repository
2. **Setup Environment**: Installs Node.js 18 and caches dependencies
3. **Install Dependencies**: Runs `npm ci` for faster, reliable installs
4. **Build Project**: Runs `npm run build` to create optimized static files
5. **Upload Artifact**: Prepares the `out` folder for deployment
6. **Deploy**: Publishes to GitHub Pages

### Build Output:

- Static HTML, CSS, and JS files in the `out` directory
- Optimized for fast loading and SEO
- All assets properly configured for GitHub Pages

## 🔧 Manual Deployment

If you prefer manual deployment:

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
# Upload the contents to your hosting provider
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## 📝 Environment Variables

For production builds, ensure all environment variables are properly set:

- No sensitive data should be exposed to the client
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Configure secrets in GitHub repository settings if needed

## 🚨 Troubleshooting

### Common Issues:

**Build Fails:**
- Check the Actions tab for detailed error logs
- Ensure all dependencies are listed in `package.json`
- Verify TypeScript and ESLint pass locally

**Images Not Loading:**
- Ensure `images.unoptimized: true` is set in `next.config.ts`
- Use proper paths for static assets in the `public` directory

**404 Errors:**
- Check `basePath` and `assetPrefix` configuration
- Ensure trailing slashes are handled correctly

**Deployment Doesn't Start:**
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow file is in `.github/workflows/`
- Ensure you have proper permissions for GitHub Pages

## 📊 Monitoring

After deployment:

- ✅ Check the **Actions** tab for build status
- ✅ Visit your GitHub Pages URL to verify deployment
- ✅ Test all navigation and functionality
- ✅ Verify responsive design on different devices

## 🔄 Updates

To update your website:

1. Make changes to your code
2. Commit and push to the `main` branch
3. GitHub Actions will automatically rebuild and deploy
4. Changes will be live within 2-5 minutes

---

Your freelance portfolio website is now ready for professional deployment! 🎉
