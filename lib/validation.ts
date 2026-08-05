import { z } from "zod";
export const shopSchema = z.object({ name:z.string().min(2).max(80), logo:z.string().url().optional().or(z.literal("")), description:z.string().min(10).max(600), rating:z.coerce.number().min(0).max(5).optional() });
export const orderSchema = z.object({ shopId:z.string().cuid(), price:z.coerce.number().positive().max(1_000_000), status:z.enum(["DRAFT","CONFIRMED","PROCESSING","SHIPPED","DELIVERED","CANCELLED","REFUNDED"]).default("DRAFT"), tracking:z.string().max(120).optional() });
