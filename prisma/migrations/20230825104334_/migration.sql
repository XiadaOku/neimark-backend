/*
  Warnings:

  - Added the required column `authorVideo` to the `event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `record` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "authorVideo" TEXT NOT NULL,
ADD COLUMN     "record" TEXT NOT NULL;
