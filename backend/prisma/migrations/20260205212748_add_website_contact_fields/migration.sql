-- AlterTable
ALTER TABLE "websites" ADD COLUMN     "address" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "working_hours" TEXT DEFAULT 'Mon - Sat: 9:30 AM - 7:00 PM';
