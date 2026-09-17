"use client"
import { type selectTicketSchemaType, insertTicketSchema, type insertTicketSchemaType } from "@/zod-schema/ticket"
import { zodResolver } from "@hookform/resolvers/zod";
import { selectCustomerSchemaType } from "@/zod-schema/customer";
import { InputWithLabel } from "@/components/input/InputWithLabels";
import { TextareaWithLabel } from "@/components/input/TextareaWithLabels";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { CheckboxWithLabel } from "@/components/input/CheckboxWithLabel";

type props = {
    ticket?: selectTicketSchemaType,
    customer: selectCustomerSchemaType
}

export default function TicketForm({ ticket, customer }: props) {
    const defaultValues: insertTicketSchemaType = {
        id: ticket?.id ?? 0,
        customerId: ticket?.customerId ?? 0,
        title: ticket?.title ?? "",
        description: ticket?.description ?? "",
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
            <FormProvider {...form}>
                <form className="flex flex-col md:flex-row gap-4 md:gap-8"
                    onSubmit={form.handleSubmit(submitForm)}>
                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <InputWithLabel fieldTitle="Title" nameInSchema="title" />
                        <InputWithLabel fieldTitle="Tech" nameInSchema="tech" disabled={true} />

                        <CheckboxWithLabel message="Yes" fieldTitle="Completed" nameInSchema="completed" />

                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg">Customer Info</h3>
                            <hr className="w-4/5" />
                            <p>{customer.firstName} {customer.lastName}</p>
                            <p>{customer.address1}</p>
                            {customer.address2 ? <p>{customer.address2} </p> : null}
                            <p>{customer.city} {customer.state} {customer.zipCode}</p>
                            <hr className="w-4/5" />
                            <p>{customer.email}</p>
                            <p>{customer.phone}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-xs">
                        <TextareaWithLabel className="h-90" fieldTitle="Description" nameInSchema="description" />
                        <div className="flex gap-2">
                            <Button type="submit" variant={"default"} title="save" className={'w-3/4'}>Save</Button>
                            <Button type="button" variant={"destructive"} title="save"
                                onClick={() => form.reset(defaultValues)}>Reset</Button>

                        </div>

                    </div>

                </form>
            </FormProvider>
        </div>
    )
}