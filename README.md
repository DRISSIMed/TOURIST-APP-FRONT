# Fusion Starter - Morocco Travel Website

A production-ready full-stack React application template featuring a beautiful Morocco travel website with integrated Express server, React Router 6 SPA mode, TypeScript, and modern tooling.

## 🚀 Quick Deployment Options

### Frontend-Only Deployment (Recommended for Static Hosting)

**Deploy to Vercel (Recommended):**

1. Push code to GitHub/GitLab/Bitbucket
2. Connect to [Vercel](https://vercel.com)
3. Import your repository - auto-configured via `vercel.json`
4. Deploy! ✨

**Other Static Hosts:**

```bash
npm run build:client
# Deploy the dist/spa folder to Netlify, Vercel, GitHub Pages, etc.
```

📖 **Detailed Instructions:** See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

### Full-Stack Deployment

For full backend functionality:

```bash
npm run build      # Builds both client and server
npm start          # Starts production server
```

## 🛠 Tech Stack

- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server (optional for static deployment)
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## 🌟 Features

- 📱 Fully responsive Morocco travel website
- 🌍 Multi-language support (English, French, Spanish)
- 💬 WhatsApp integration for bookings
- 🎨 Beautiful Morocco-themed design with animations
- 📧 Email service with WhatsApp fallback
- 🎯 SEO optimized
- ⚡ Fast loading with Vite
- 🔧 Modern development experience

## 📁 Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── services/            # API services with fallbacks
├── App.tsx              # App entry point with SPA routing
└── global.css           # TailwindCSS 3 theming

server/                   # Express API backend (optional)
├── index.ts              # Main server setup
└── routes/               # API handlers

shared/                   # Types used by both client & server
└── api.ts                # Shared interfaces
```

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev        # Starts both client and server
```

### Client-Only Development (for static deployment)

```bash
npm install
npm run dev:client # Starts only the frontend
```

### Build & Test

```bash
npm run build:client    # Build frontend only
npm run build          # Build both frontend and backend
npm test              # Run tests
npm run typecheck     # TypeScript validation
```

## 🎨 Customization

### Update Branding

- **Colors**: Edit `client/global.css` and `tailwind.config.ts`
- **Logo**: Search for "MAROC" in `client/pages/Index.tsx`
- **Contact Info**: Update `client/services/emailService.ts`

### Add New Routes

1. Create component in `client/pages/NewPage.tsx`
2. Add route in `client/App.tsx`:

```typescript
<Route path="/new-page" element={<NewPage />} />
```

### Add Backend Endpoints (Optional)

1. Create handler in `server/routes/my-route.ts`
2. Register in `server/index.ts`
3. Use shared types from `shared/api.ts`

## 📱 Mobile-First Design

The website is built mobile-first with responsive design:

- Touch-friendly navigation
- Optimized images and animations
- Fast WhatsApp integration
- Smooth scrolling and transitions

## 🔗 Integrations

### Available MCP Integrations

For enhanced functionality, consider connecting:

- **Supabase**: Database and authentication
- **Netlify**: Advanced hosting features
- **Figma**: Design to code conversion
- **Linear**: Project management
- **Notion**: Content management

[Open MCP Popover](#open-mcp-popover) to connect integrations.

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🛟 Support

- 📖 Documentation: [Builder.io Docs](https://www.builder.io/c/docs/projects)
- 🐛 Issues: Create an issue on GitHub
- 💬 Questions: Use the discussion board

---

**Ready to deploy?** Check out [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for step-by-step instructions!
