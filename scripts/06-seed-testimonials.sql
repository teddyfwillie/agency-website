-- Seed testimonials
INSERT INTO testimonials (
  client_name, client_title, client_company, client_avatar, testimonial_text, 
  rating, project_result, featured, approved
) VALUES
(
  'Jessica Martinez',
  'CEO',
  'Luxe Fashion Boutique',
  '/placeholder.svg?height=60&width=60',
  'Working with this team was absolutely incredible. They didn''t just build us a website—they built us a revenue machine. Our online sales increased by 340% in the first three months after launch. The attention to detail and focus on conversion optimization really shows in the results.',
  5,
  '340% Sales Increase',
  true,
  true
),
(
  'Michael Chen',
  'Founder',
  'TechStart SaaS',
  '/placeholder.svg?height=60&width=60',
  'I was skeptical about investing in a new website, but the ROI has been phenomenal. Our lead generation increased by 250% and the quality of leads is much higher. The team understood our business goals and delivered exactly what we needed to scale.',
  5,
  '250% More Leads',
  true,
  true
),
(
  'Roberto Silva',
  'Owner',
  'Bella Vista Restaurant Chain',
  '/placeholder.svg?height=80&width=80',
  'This is hands down the best investment we''ve made for our business. Not only did they create a stunning website, but they also provided strategic insights that helped us understand our customers better. Our online orders doubled within two months, and customer satisfaction scores are at an all-time high.',
  5,
  '200% More Orders',
  true,
  true
),
(
  'Sarah Johnson',
  'Founder',
  'MedConnect Platform',
  '/placeholder.svg?height=40&width=40',
  'Professional, responsive, and results-driven. They transformed our outdated website into a modern lead-generation machine.',
  5,
  '180% User Growth',
  false,
  true
),
(
  'David Park',
  'CEO',
  'Prime Properties',
  '/placeholder.svg?height=40&width=40',
  'The team''s expertise in UX design is evident in every aspect of our new site. User engagement has increased dramatically.',
  5,
  '120% More Leads',
  false,
  true
),
(
  'Emma Thompson',
  'Founder',
  'FitTrack App',
  '/placeholder.svg?height=40&width=40',
  'From concept to launch, the process was seamless. They understood our vision and brought it to life perfectly.',
  5,
  '300% App Downloads',
  false,
  true
);
