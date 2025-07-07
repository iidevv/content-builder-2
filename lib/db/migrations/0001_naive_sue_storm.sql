CREATE TABLE "content" (
	"id" serial PRIMARY KEY NOT NULL,
	"team_id" integer NOT NULL,
	"content" text NOT NULL,
	"created_by" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "content" ADD CONSTRAINT "content_team_id_teams_id_fk" FOREIGN KEY ("team_id") REFERENCES "public"."teams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "content" ADD CONSTRAINT "content_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;