/*
  Warnings:

  - Added the required column `maxPeople` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "maxPeople" INTEGER NOT NULL;
