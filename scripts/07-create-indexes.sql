-- Create indexes for better performance

-- Blog posts indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Portfolio projects indexes
CREATE INDEX IF NOT EXISTS idx_portfolio_published ON portfolio_projects(published);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_projects(featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_projects(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_created_at ON portfolio_projects(created_at DESC);

-- Testimonials indexes
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_rating ON testimonials(rating);

-- Contact submissions indexes
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);

-- Newsletter subscriptions indexes
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscriptions(active);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);

-- Lead submissions indexes
CREATE INDEX IF NOT EXISTS idx_leads_status ON lead_submissions(status);
CREATE INDEX IF NOT EXISTS idx_leads_type ON lead_submissions(lead_type);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON lead_submissions(created_at DESC);
