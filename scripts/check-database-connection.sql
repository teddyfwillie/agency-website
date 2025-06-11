-- Verify we're connected to the right database
SELECT current_database(), current_schema(), current_user;

-- Check if our tables exist with row counts
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;
