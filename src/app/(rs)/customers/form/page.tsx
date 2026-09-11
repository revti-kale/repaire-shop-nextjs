import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";

export default async function CustomersFormPage({ searchParams }: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerId } = await searchParams;

        if (customerId) {
            const customer = await getCustomers(Number(customerId));

            if (!customer) {
                return (
                    <div>
                        <h1>Customer {customerId} not found</h1>
                        <BackButton title="Go Back" variant="default" />
                    </div>
                );
            }

            // Render the form with the customer data
            
        } else {
            // Render the form for creating a new customer
        }

    } catch (error) {
        console.error("Error fetching search params:", error);
    }

    return (
        <div>
            <h1>Customer Form</h1>
            <BackButton title="Go Back" variant="default" />
        </div>
    );
}