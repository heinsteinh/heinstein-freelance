# Heinstein Fotso - Freelance Portfolio Website

A professional portfolio website for Heinstein Fotso, a Senior C++ and Qt Developer with 15+ years of experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout optimized for enterprise clients
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 14 for optimal performance and SEO
- **Animations**: Smooth animations powered by Framer Motion
- **Company Showcase**: Dedicated section highlighting Fortune 500 client relationships
- **Professional Sections**: 
  - Hero with tech stack and statistics
  - Company logos and client showcase
  - About section with skills visualization
  - Comprehensive services overview
  - Detailed work experience timeline
  - Education and certifications
  - Contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── CompaniesSection.tsx
    ├── AboutSection.tsx
    ├── ServicesSection.tsx
    ├── ExperienceSection.tsx
    ├── CertificationsSection.tsx
    ├── ContactSection.tsx
    └── Footer.tsx
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site for GitHub Pages

## 🎨 Customization

### Company Logos
Update the company information in `src/components/CompaniesSection.tsx`:
```typescript
const companies = [
  {
    name: 'Company Name',
    logo: '/logos/company-logo.svg',
    website: 'https://company.com',
    // ... other properties
  }
]
```

### Contact Information
Update contact details in `src/components/ContactSection.tsx` and `src/components/Footer.tsx`.

### Personal Information
Modify the content in each component to reflect your personal information, experience, and skills.

## 🚀 Deployment

### GitHub Pages

1. **Update `next.config.ts`** for GitHub Pages:
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: '/repository-name',
     assetPrefix: '/repository-name/',
   }
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

3. **Deploy** the `out` folder to GitHub Pages.

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 SEO Optimized

- Meta tags for social sharing
- Structured data for search engines
- Semantic HTML markup
- Fast loading times
- Mobile-friendly design

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Heinstein Fotso - heinstein.fotso@gmail.com

---

**Ready to launch your freelance portfolio website!** 🚀

To get started:
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open http://localhost:3000 to view your website
4. Customize the content to match your personal information
5. Deploy to GitHub Pages or Vercel when ready
