/*
  Warnings:

  - Added the required column `review` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "review" TEXT NOT NULL;
