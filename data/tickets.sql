INSERT INTO tickets
(customer_id, title, description, completed, tech, created_at, updated_at)
VALUES

(1, 'Laptop Screen Replacement',
 'Customer reports a cracked laptop screen with visible display damage. Inspect the display and replace the screen if required.',
 false, 'Mike', NOW(), NOW()),

(2, 'Keyboard Not Working',
 'Several keyboard keys are not responding. Test the keyboard, check for hardware damage, and replace it if necessary.',
 false, 'Sarah', NOW(), NOW()),

(3, 'Wi-Fi Connectivity Issue',
 'Computer frequently disconnects from Wi-Fi. Check network settings, drivers, router connectivity, and wireless adapter.',
 false, 'John', NOW(), NOW()),

(4, 'Overheating Issue',
 'Computer becomes very hot and shuts down unexpectedly. Clean internal components and check the cooling fan and thermal paste.',
 false, 'Emily', NOW(), NOW()),

(5, 'Data Recovery',
 'Customer accidentally deleted important files. Attempt to recover the lost data from the storage drive.',
 false, 'David', NOW(), NOW()),

(3, 'RAM Upgrade',
 'Customer wants to improve system performance by upgrading the computer RAM. Check compatibility and install additional memory.',
 false, 'Mike', NOW(), NOW()),

(5, 'Software Installation',
 'Customer needs required business software installed and configured on the computer. Verify that all applications work correctly after installation.',
 false, 'Sarah', NOW(), NOW());