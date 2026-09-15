import { customers } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

// This is a Zod schema for inserting a new customer into the database.
// Drizzle customers table
//         ↓
// createInsertSchema(customers)
//         ↓
// Automatically generate Zod schema
//         ↓
// Customize firstName validation
//         ↓
// insertCustomerSchema
//         ↓
// Validate form/API data
//         ↓
// Only valid data goes to Drizzle
//         ↓
// INSERT INTO customers


export const insertCustomerSchema = createInsertSchema(customers, {
     firstName: (schema) => schema.min(1, "First name is required"),
     lastName: (schema) => schema.min(1, "Last name is required"),
     address1: (schema) => schema.min(1, "Address is required"),
     address2: (schema) => schema.optional(),
     city: (schema) => schema.min(1, "City is required"),
     state: (schema) => schema.min(1, "State is required"),
     zipCode: (schema) => schema.min(1, "Zip code is required"),
     phone: (schema) => schema.regex(/^\d{10}$/, "Invalid phone number"),
     email: (schema) => schema.email("Invalid email address"),

});

export const selectCustomerSchema = createInsertSchema(customers)

export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;

export type selectCustomerSchemaType = z.infer<typeof selectCustomerSchema>;