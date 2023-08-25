/*
  Warnings:

  - The primary key for the `savedEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `savedEvent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "savedEvent" DROP CONSTRAINT "savedEvent_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "savedEvent_pkey" PRIMARY KEY ("userId", "eventId");
