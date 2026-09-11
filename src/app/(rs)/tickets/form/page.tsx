import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTickets } from "@/lib/queries/getTickets";

export default async function TicketsFormPage({ searchParams }:
    { searchParams: Promise<{ [key: string]: string | undefined }> }) {
    try {
        const { customerId, ticketId } = await searchParams;

        if (customerId) {
            const tickets = await getTickets(Number(customerId));

            if (!tickets && !customerId) {
                return (
                    <div>
                        <h1>Ticket {ticketId} not found</h1>
                        <BackButton title="Go Back" variant="default" />
                    </div>
                );
            }

            // Render the form with the customer data

        } else {
            // Render the form for creating a new customer
        }

        // new ticket form
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

            if (!customer.active) {
                return (
                    <div>
                        <h1>Customer {customerId} not Active</h1>
                        <BackButton title="Go Back" variant="default" />
                    </div>
                );
            }
            console.log("customer", customer);
        }
        // Edit ticket form
        const ticket = ticketId ? await getTickets(Number(ticketId)) : null;

        if(!ticket){
            return (
                <div>
                    <h1>Ticket {ticketId} not found</h1>
                    <BackButton title="Go Back" variant="default" />
                </div>
            );
        }
        const customer = ticket ? await getCustomers(Number(ticket.customerId)) : null;
        // return the ticket form

        console.log("ticket", ticket);
        console.log("customer", customer);


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