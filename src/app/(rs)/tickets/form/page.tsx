import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTickets } from "@/lib/queries/getTickets";
import TicketForm from "./TicketForm";

export default async function TicketsFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId, ticketId } = await searchParams;

        // --------------------------------
        // Create new ticket for a customer
        // --------------------------------
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

            return <TicketForm customer={customer} />;
        }

        // --------------------------------
        // Edit existing ticket
        // --------------------------------
        if (ticketId) {
            const ticket = await getTickets(Number(ticketId));

            if (!ticket) {
                return (
                    <div>
                        <h1>Ticket {ticketId} not found</h1>
                        <BackButton title="Go Back" variant="default" />
                    </div>
                );
            }

            const customer = await getCustomers(Number(ticket.customerId));

            if (!customer) {
                return (
                    <div>
                        <h1>Customer {ticket.customerId} not found</h1>
                        <BackButton title="Go Back" variant="default" />
                    </div>
                );
            }

            return <TicketForm customer={customer} ticket={ticket} />;
        }

        // --------------------------------
        // No customerId or ticketId
        // --------------------------------
        return (
            <div>
                <h1>Invalid ticket request</h1>
                <BackButton title="Go Back" variant="default" />
            </div>
        );
    } catch (error) {
        console.error("Error fetching ticket form data:", error);

        return (
            <div>
                <h1>Something went wrong</h1>
                <BackButton title="Go Back" variant="default" />
            </div>
        );
    }
}