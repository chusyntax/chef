import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm";

export const foodTable = pgTable("food", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  quantity: integer("quantity").notNull(),
});

export const db = drizzle(process.env.DATABASE_URL!);
