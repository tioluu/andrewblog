CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
