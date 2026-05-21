-- Add domain_start_date to client_websites
ALTER TABLE "client_websites" ADD COLUMN "domain_start_date" TIMESTAMP(3);
