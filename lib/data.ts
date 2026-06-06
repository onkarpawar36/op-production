import { CaseStudy, PortfolioProject, PricingPlan, Service, Testimonial } from '@/lib/types';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
  { href: '/admin', label: 'Admin' },
];

export const stats = [
  { label: 'Projects Completed', value: '850+' },
  { label: 'Happy Clients', value: '220+' },
  { label: 'Average Turnaround Time', value: '3-7 Days' },
  { label: 'Client Retention Rate', value: '92%' },
];

export const services: Service[] = [
  { title: 'Reel Editing', description: 'Short-form edits optimized for social performance.', features: ['Social Media Optimized', 'Fast Delivery', 'Retention Focused'], category: 'Social' },
  { title: 'YouTube Editing', description: 'Long-form storytelling engineered for watch time.', features: ['Storytelling', 'Long Form Content', 'Audience Retention'], category: 'Long-form' },
  { title: 'Motion Graphics', description: 'Premium motion design for brand authority.', features: ['Titles', 'Lower Thirds', 'Visual Enhancements'], category: 'Branding' },
  { title: 'Wedding Films', description: 'Emotion-driven cinematic wedding stories.', features: ['Cinematic Storytelling', 'Highlight Films'], category: 'Events' },
  { title: 'Commercial Advertisements', description: 'Conversion-focused ad creatives and brand videos.', features: ['Product Videos', 'Brand Campaigns'], category: 'Commercial' },
  { title: '3D Animation', description: 'CGI visuals and product-focused animations.', features: ['Product Visualizations', 'CGI Content'], category: '3D' },
  { title: 'Product Visualizations', description: 'Clean product showcases for digital campaigns.', features: ['Studio Look', 'Launch Ready', 'Multi-platform Exports'], category: 'Product' },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'op-1',
    title: 'Creator Growth Reel Series',
    category: 'Reels',
    client: 'Global Creator',
    summary: 'High-retention reel campaign that scaled monthly reach.',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    tags: ['Hooks', 'Captions', 'Pacing'],
    result: '4.2M combined views',
  },
  {
    id: 'op-2',
    title: 'YouTube Story Edit',
    category: 'YouTube Videos',
    client: 'Personal Brand Coach',
    summary: 'Narrative edit with strategic pacing and retention beats.',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
    tags: ['Story Arc', 'Sound Design'],
    result: '38% watch-time increase',
  },
  {
    id: 'op-3',
    title: 'SaaS Brand Motion Launch',
    category: 'Motion Graphics',
    client: 'B2B Startup',
    summary: 'Launch film with clean graphics and product flow.',
    thumbnail: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/wTcNtgA6gHs',
    tags: ['Explainers', 'Motion Design'],
    result: '2.7x landing page CTR',
  },
  {
    id: 'op-4',
    title: 'Luxury Wedding Highlight',
    category: 'Wedding Films',
    client: 'Destination Couple',
    summary: 'Cinematic highlight with emotional narrative pacing.',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/oUFJJNQGwhk',
    tags: ['Color Grade', 'Storytelling'],
    result: 'Delivered in 5 days',
  },
  {
    id: 'op-5',
    title: 'Performance Ad Creative',
    category: 'Commercial Projects',
    client: 'DTC Brand',
    summary: 'Direct-response edits tailored for paid campaigns.',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/G6D9cBaLViA',
    tags: ['Conversion', 'UGC Hybrid'],
    result: '31% lower CPA',
  },
  {
    id: 'op-6',
    title: '3D Product Reveal',
    category: '3D Animation',
    client: 'Tech Hardware Brand',
    summary: '3D launch asset with premium materials and lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    tags: ['CGI', 'Lighting', 'Texturing'],
    result: 'Global launch campaign asset',
  },
];

export const testimonials: Testimonial[] = [
  { id: 't-1', name: 'Aarav Mehta', role: 'YouTuber', company: 'Creator Studio', rating: 5, feedback: 'OP Productions transformed our channel quality and delivery speed.' },
  { id: 't-2', name: 'Sofia Lin', role: 'CMO', company: 'Scale Labs', rating: 5, feedback: 'World-class editing quality. The process felt premium from day one.' },
  { id: 't-3', name: 'Nina Kapoor', role: 'Founder', company: 'Brand Atelier', rating: 5, feedback: 'Their motion graphics elevated our ads and improved conversion performance.' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Creator Studio',
    challenge: 'Inconsistent edits and delayed publishing impacted channel growth.',
    solution: 'Built a weekly production workflow with story-focused editing and retention optimization.',
    results: ['120% monthly growth in short-form reach', 'From 9 days to 4 days average delivery', 'Improved repeat-client content cadence'],
    before: 'Irregular posting schedule with basic cuts.',
    after: 'Structured publishing with cinematic edits and stronger hooks.',
    videoUrl: 'https://www.youtube.com/embed/aqz-KE-bpKQ',
  },
  {
    id: 'cs-2',
    client: 'Scale Labs',
    challenge: 'Campaign creatives looked generic and underperformed globally.',
    solution: 'Produced premium ad variants using motion graphics and multilingual subtitle versions.',
    results: ['31% lower customer acquisition cost', '2.1x ad engagement rate', 'International-ready campaign assets'],
    before: 'One-size-fits-all ad outputs.',
    after: 'Segmented high-performing variants by audience type.',
    videoUrl: 'https://www.youtube.com/embed/G6D9cBaLViA',
  },
];

export const pricingPlans: PricingPlan[] = [
  { name: 'Reel Edit', price: '$50', details: ['Single reel edit'], group: 'Reels' },
  { name: 'Reel + Subtitles', price: '$60', details: ['Edit', 'Subtitles'], group: 'Reels' },
  { name: 'Reel + Motion Graphics', price: '$90', details: ['Edit', 'Motion Graphics'], group: 'Reels' },
  { name: 'YouTube Video (10 Min)', price: '$200', details: ['Storytelling edit'], group: 'YouTube' },
  { name: 'YouTube Video (15 Min)', price: '$250', details: ['Storytelling edit'], group: 'YouTube' },
  { name: 'YouTube + Subtitles (10 Min)', price: '$250', details: ['Edit', 'Subtitles'], group: 'YouTube' },
  { name: 'YouTube + Subtitles (15 Min)', price: '$300', details: ['Edit', 'Subtitles'], group: 'YouTube' },
  { name: 'YouTube + Motion Graphics (10 Min)', price: '$350', details: ['Edit', 'Motion Graphics'], group: 'YouTube' },
  { name: 'YouTube + Motion Graphics (15 Min)', price: '$400', details: ['Edit', 'Motion Graphics'], group: 'YouTube' },
  { name: 'Premium Package', price: '$450', details: ['Editing', 'Motion Graphics', 'Thumbnail Design'], group: 'YouTube' },
  { name: 'Creator Starter', price: '$500/month', details: ['12 Reels', '2 Revisions', 'Delivery In 3-7 Days', 'Copyright-Free Music', 'Color Correction', 'Sound Enhancement'], group: 'Monthly Retainers' },
  { name: 'Creator Growth', price: '$800/month', details: ['20 Reels', '2 Revisions', 'Delivery In 3-7 Days', 'Copyright-Free Music', 'Color Correction', 'Sound Enhancement'], group: 'Monthly Retainers' },
  { name: 'Creator Pro', price: '$1200+/month', details: ['30 Reels', '2 Revisions', 'Delivery In 3-7 Days', 'Copyright-Free Music', 'Color Correction', 'Sound Enhancement'], group: 'Monthly Retainers' },
];

export const processSteps = ['Discovery', 'Planning', 'Editing', 'Review', 'Delivery'];

export const faqItems = [
  { question: 'What is your turnaround time?', answer: 'Most projects are delivered in 3-7 days depending on complexity and scope.' },
  { question: 'How many revisions are included?', answer: 'Standard plans include 2 revisions to ensure final delivery quality.' },
  { question: 'How is pricing structured?', answer: 'You can choose per-project pricing or monthly retainers for ongoing content.' },
  { question: 'Which file formats do you deliver?', answer: 'We deliver platform-ready outputs including MP4 (H.264), ProRes and social variants.' },
  { question: 'Which payment methods are accepted?', answer: 'We accept international bank transfer, UPI, card and selected payment gateways.' },
];

export const availableDates = ['2026-06-10', '2026-06-12', '2026-06-15', '2026-06-18', '2026-06-21'];
export const bookedDates = ['2026-06-11', '2026-06-14', '2026-06-16'];

export const projectTypes = [
  'Reel Editing',
  'YouTube Editing',
  'Motion Graphics',
  'Wedding Films',
  'Commercial Advertisements',
  '3D Animation',
  'Product Visualizations',
];
