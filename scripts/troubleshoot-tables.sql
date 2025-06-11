-- Check if tables exist and get their information
SELECT 
    table_name,
    table_schema,
    table_type
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;
