/*
  Warnings:

  - Added the required column `companyId` to the `internship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "internship" ADD COLUMN     "companyId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "internship" ADD CONSTRAINT "internship_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
