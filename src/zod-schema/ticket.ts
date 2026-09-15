import { tickets } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const insertTicketSchema = createInsertSchema(tickets, {
    id: z.union([z.number(), z.literal("(new)")]),
    title: (schema) => schema.min(1, "title is required").max(255),
    description: (schema) => schema.min(1, "description is required").max(500),
    tech: (schema) => schema.min(1, "email is required").max(255),
});

export const selectTicketsSchema = createSelectSchema(tickets)

export type insertTicketSchema = z.infer<typeof insertTicketSchema>;

export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;

export type selectTicketSchemaType = z.infer<typeof selectTicketsSchema>;
