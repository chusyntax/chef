import { Hono } from "hono";
import { db, foodTable } from "./db/schema";

const app = new Hono();

app.get("/foods", async (c) => {
  const foods = await db.select().from(foodTable).execute();
  return c.json(foods);
});

app.post("/food", async (c) => {
  const body = await c.req.json();
  await db
    .insert(foodTable)
    .values({ name: body.name, quantity: body.quantity })
    .execute();
  return c.json({ message: "Food added" });
});

app.listen(3000);
