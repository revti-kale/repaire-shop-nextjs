INSERT INTO customers
(first_name, last_name, email, phone, address1, address2, city, state, zip_code, notes, active, created_at, updated_at)
VALUES
('John', 'Doe', 'john.doe@example.com', '555-1234', '123 Main St', '', 'Anytown', 'CA', '12345', '', true, NOW(), NOW()),

('Jane', 'Smith', 'jane.smith@example.com', '555-5678', '456 Oak Ave', '', 'Somewhere', 'NY', '67890', '', true, NOW(), NOW()),

('Bob', 'Johnson', 'bob.johnson@example.com', '555-9012', '789 Pine Rd', '', 'Elsewhere', 'TX', '54321', '', true, NOW(), NOW()),

('Alice', 'Williams', 'alice.williams@example.com', '555-3456', '321 Elm St', '', 'Nowhere', 'FL', '98765', '', true, NOW(), NOW()),

('Charlie', 'Brown', 'charlie.brown@example.com', '555-7890', '098 Maple Dr', '', 'Anywhere', 'WA', '54321', '', true, NOW(), NOW());