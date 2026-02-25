-- AlterTable
ALTER TABLE "websites" ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_admin_enabled" BOOLEAN NOT NULL DEFAULT true;
