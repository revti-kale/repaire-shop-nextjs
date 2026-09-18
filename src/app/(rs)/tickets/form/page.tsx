import BackButton from "@/components/BackButton";
import { getCustomers } from "@/lib/queries/getCustomers";
import { getTickets } from "@/lib/queries/getTickets";
import TicketForm from "./TicketForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { init, Users } from "@kinde/management-api-js";

async function getTechnicians() {
    const domain = process.env.KINDE_DOMAIN;
    const clientId = process.env.KINDE_MANAGEMENT_CLIENT_ID;
    const clientSecret = process.env.KINDE_MANAGEMENT_CLIENT_SECRET;

    if (!domain || !clientId || !clientSecret) {
        throw new Error(
            "Kinde Management API environment variables are missing"
        );
    }

    console.log("Kinde Management API config:", {
        domain,
        clientId,
        hasSecret: !!clientSecret,
    });

    init({
        kindeDomain: domain,
        clientId,
        clientSecret,
    });

    const users = await Users.getUsers();

    return (
        users?.users?.map((user: any) => ({
            id: user.email,
            description: user.email,
        })) ?? []
    );
}

export default async function TicketsFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId, ticketId } = await searchParams;

        const { getPermission, getUser } = getKindeServerSession();

        const [managerPermission, user] = await Promise.all([
            getPermission("manager"),
            getUser(),
        ]);

        const isManager = managerPermission?.isGranted;

        // --------------------------------
        // Create new ticket for a customer
        // --------------------------------
        if (customerId) {
            const customer = await getCustomers(Number(customerId));

            if (!customer) {
                return (
                    <div>
                        <h1>Customer {customerId} not found</h1>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </div>
                );
            }

            if (!customer.active) {
                return (
                    <div>
                        <h1>Customer {customerId} not Active</h1>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </div>
                );
            }

            if (isManager) {
                const techs = await getTechnicians();

                return (
                    <TicketForm
                        customer={customer}
                        techs={techs}
                    />
                );
            }

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
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </div>
                );
            }

            const customer = await getCustomers(
                Number(ticket.customerId)
            );

            if (!customer) {
                return (
                    <div>
                        <h1>
                            Customer {ticket.customerId} not found
                        </h1>
                        <BackButton
                            title="Go Back"
                            variant="default"
                        />
                    </div>
                );
            }

            if (isManager) {
                const techs = await getTechnicians();

                return (
                    <TicketForm
                        customer={customer}
                        ticket={ticket}
                        techs={techs}
                    />
                );
            }

            const isEditable = user?.email?.toLowerCase() === ticket.tech.toLowerCase();

            return (
                <TicketForm
                    ticket={ticket}
                    customer={customer}
                    isEditable={isEditable}
                />
            );
        }

        // --------------------------------
        // No customerId or ticketId
        // --------------------------------
        return (
            <div>
                <h1>Invalid ticket request</h1>
                <BackButton
                    title="Go Back"
                    variant="default"
                />
            </div>
        );
    } catch (error) {
        console.error(
            "❌ Error fetching ticket form data:",
            error
        );

        return (
            <div>
                <h1>Something went wrong</h1>

                <pre className="mt-4 whitespace-pre-wrap text-red-500">
                    {error instanceof Error
                        ? error.message
                        : String(error)}
                </pre>

                <BackButton
                    title="Go Back"
                    variant="default"
                />
            </div>
        );
    }
}