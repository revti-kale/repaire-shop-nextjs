"use client"
import { type selectTicketSchemaType, insertTicketSchema, type insertTicketSchemaType } from "@/zod-schema/ticket"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { selectCustomerSchemaType } from "@/zod-schema/customer";

type props = {
    ticket?: selectTicketSchemaType,
    customer: selectCustomerSchemaType
}

export default function TicketForm({ ticket, customer }: props) {
    const defaultValues: insertTicketSchemaType = {
        id: ticket?.id ?? 0,
        customerId: ticket?.customerId ?? 0,
        title: ticket?.title ?? "",
        description: ticket?.description ?? null,
        tech: ticket?.tech ?? "new-ticket@example.com",
        completed: ticket?.completed ?? false
    }

    const form = useForm<insertTicketSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertTicketSchema),
        defaultValues,
    })

    async function submitForm(data: insertTicketSchemaType) {
        console.log(data, "data")
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                 {ticket?.id ? "Edit" : "New"} Ticket  {ticket?.id ? `# ${ticket.id}` : "Form"}
                </h2>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                onSubmit={form.handleSubmit(submitForm)}>
                <p>{JSON.stringify(form.getValues())}</p>
            </form>

        </div>
    )
}