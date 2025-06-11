-- Verify all data has been inserted correctly
SELECT 'Blog Categories' as table_name, COUNT(*) as count FROM blog_categories
UNION ALL
SELECT 'Project Categories', COUNT(*) FROM project_categories  
UNION ALL
SELECT 'Blog Posts', COUNT(*) FROM blog_posts
UNION ALL
SELECT 'Portfolio Projects', COUNT(*) FROM portfolio_projects
UNION ALL
SELECT 'Testimonials', COUNT(*) FROM testimonials
ORDER BY table_name;

-- Check featured content
SELECT 'Featured Blog Posts' as content_type, COUNT(*) as count 
FROM blog_posts WHERE featured = true
UNION ALL
SELECT 'Featured Portfolio Projects', COUNT(*) 
FROM portfolio_projects WHERE featured = true
UNION ALL
SELECT 'Featured Testimonials', COUNT(*) 
FROM testimonials WHERE featured = true;

-- Sample data verification
SELECT 'Sample Blog Post' as type, title, category, author_name 
FROM blog_posts WHERE featured = true LIMIT 1;

SELECT 'Sample Portfolio Project' as type, title, category, client_name,
       results_metric_1_label, results_metric_1_value
FROM portfolio_projects WHERE featured = true LIMIT 1;

SELECT 'Sample Testimonial' as type, client_name, client_company, project_result
FROM testimonials WHERE featured = true LIMIT 1;
