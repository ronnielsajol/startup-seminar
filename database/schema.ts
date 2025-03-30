import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";

// Users Table
export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	firstName: varchar("firstName", { length: 255 }).notNull(),
	lastName: varchar("lastName", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).unique().notNull(),
	qrCode: varchar("qr_code", { length: 255 }).notNull(), // Stores the QR code
});

// Seminars Table
export const seminars = pgTable("seminars", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 255 }).notNull(),
	date: timestamp("date").notNull(),
});

// Attendance Table
export const attendance = pgTable("attendance", {
	id: serial("id").primaryKey(),
	userId: integer("user_id")
		.references(() => users.id)
		.notNull(),
	seminarId: integer("seminar_id")
		.references(() => seminars.id)
		.notNull(),
	attendedAt: timestamp("attended_at").defaultNow(),
});
