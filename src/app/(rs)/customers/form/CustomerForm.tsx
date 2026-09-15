"use client"
import { insertCustomerSchema, selectCustomerSchemaType, type insertCustomerSchemaType } from "@/zod-schema/customer"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type props = {
    customer?: selectCustomerSchemaType
}

export default function CustomerForm({ customer }: props) {
    const defaultValues: insertCustomerSchemaType = {
        id: customer?.id || 0,
        firstName: customer?.firstName || "",
        lastName: customer?.lastName || "",
        address1: customer?.address1 || "",
        address2: customer?.address2 || "",
        city: customer?.city || "",
        state: customer?.state || "",
        zipCode: customer?.zipCode || "",
        phone: customer?.phone || "",
        email: customer?.email || "",
        notes: customer?.notes || "",
    }

    const form = useForm<insertCustomerSchemaType>({
        mode: 'onBlur',
        resolver: zodResolver(insertCustomerSchema),
        defaultValues,
    })

    async function submitForm(data: insertCustomerSchemaType) {
        console.log(data, "data")
    }

    return (
        <div className="flex flex-col gap-1 sm:px-8">
            <div>
                <h2 className="text-2xl font-bold">
                    {customer?.id ? "Edit" : "New"} Customer Form
                </h2>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 sm:gap-8"
                onSubmit={form.handleSubmit(submitForm)}>
                <p>{JSON.stringify(form.getValues())}</p>
            </form>

        </div>
    )
}