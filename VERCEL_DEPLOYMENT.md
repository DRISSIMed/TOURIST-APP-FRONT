# Vercel Frontend Deployment Guide

This guide helps you deploy only the frontend part of this application to Vercel.

## Quick Setup

### 1. Connect to Vercel

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will auto-detect the configuration from `vercel.json`

### 2. Build Configuration

The project is already configured for frontend-only deployment:

- **Build Command**: `npm run build:client`
- **Output Directory**: `dist/spa`
- **Install Command**: `npm install`
- **Framework**: Vite (auto-detected)

### 3. Environment Variables (Optional)

No environment variables are required for frontend-only deployment as the app falls back to WhatsApp for contact functionality.

## What's Included in Frontend Deployment

✅ **Working Features:**
- Complete tour showcase website
- Multi-language support (English, French, Spanish)
- Responsive design with Morocco-themed styling
- WhatsApp integration for bookings
- Tour browsing and detail pages
- Contact forms with WhatsApp fallback

⚠️ **Backend-dependent Features (Gracefully Handled):**
- Email notifications (falls back to WhatsApp)
- Server-side form processing (uses WhatsApp instead)

## Manual Deployment Steps

If you prefer manual deployment:

1. **Build the frontend:**
   ```bash
   npm run build:client
   ```

2. **Deploy the `dist/spa` folder:**
   - Upload the contents of `dist/spa` to any static hosting service
   - Or use Vercel CLI: `vercel --prod`

## Project Structure for Frontend

```
dist/spa/              # Built frontend (deploy this)
├── index.html         # Main HTML file
├── assets/           # CSS, JS, and other assets
│   ├── index-*.css
│   ├── index-*.js
│   └── ...
└── ...

client/               # Source frontend code
├── components/       # React components
├── pages/           # Route pages
├── services/        # API services (with fallbacks)
└── ...
```

## Customization

### Update Contact Information

Edit `client/services/emailService.ts`:

```typescript
const EMAIL_CONFIG = {
  adminEmail: "your-email@domain.com",
  adminWhatsApp: "+1234567890",  // Your WhatsApp number
  companyName: "Your Company Name",
};
```

### Update Styling/Branding

- Colors: `client/global.css` and `tailwind.config.ts`
- Logo/Brand: Search for "MAROC" in `client/pages/Index.tsx`
- Content: Update tour packages and destinations in `client/pages/Index.tsx`

## Troubleshooting

### Build Fails
- Ensure you're using Node.js 18+ 
- Clear `node_modules` and `package-lock.json`, then run `npm install`
- Check for TypeScript errors with `npm run typecheck`

### Styles Missing
- Ensure Tailwind CSS is properly configured
- Check that `global.css` is imported in your components

### WhatsApp Not Working
- Verify the phone number format in `EMAIL_CONFIG`
- Test WhatsApp links manually: `https://wa.me/1234567890?text=test`

## Production Checklist

- [ ] Update contact information in email service
- [ ] Customize branding and colors
- [ ] Test WhatsApp integration
- [ ] Verify all routes work correctly
- [ ] Test responsive design on mobile
- [ ] Update meta tags for SEO (in `index.html`)

## Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Review build logs in Vercel dashboard
- Test locally with `npm run build:client && npx serve dist/spa`
