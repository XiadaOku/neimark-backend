-- AlterTable
ALTER TABLE "achivement" ALTER COLUMN "level" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1;
