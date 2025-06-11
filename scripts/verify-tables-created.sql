-- Verify all tables are created and show their structure
\dt

-- Show detailed information about each table
SELECT 
    t.table_name,
    t.table_type,
    c.column_name,
    c.data_type,
    c.is_nullable,
    c.column_default
FROM information_schema.tables t
JOIN information_schema.columns c ON t.table_name = c.table_name
WHERE t.table_schema = 'public'
ORDER BY t.table_name, c.ordinal_position;

-- Count rows in each table
SELECT 'blog_categories' as table_name, COUNT(*) as row_count FROM blog_categories
UNION ALL
SELECT 'project_categories', COUNT(*) FROM project_categories
UNION ALL
SELECT 'blog_posts', COUNT(*) FROM blog_posts
UNION ALL
SELECT 'contact_submissions', COUNT(*) FROM contact_submissions
UNION ALL
SELECT 'portfolio_projects', COUNT(*) FROM portfolio_projects
UNION ALL
SELECT 'testimonials', COUNT(*) FROM testimonials
UNION ALL
SELECT 'newsletter_subscriptions', COUNT(*) FROM newsletter_subscriptions
UNION ALL
SELECT 'lead_submissions', COUNT(*) FROM lead_submissions;
