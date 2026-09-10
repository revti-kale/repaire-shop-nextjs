import { db } from ".";
import { migrate } from "drizzle-orm/neon-http/migrator";


export const main = async () => {
    try {
        console.log("Migration started...");
        await migrate(db, { migrationsFolder: "./src/db/migrations" });
        console.log("Migration completed successfully.");
    } catch (error) {
        console.error("Migration failed:", error);
    }
}

main()