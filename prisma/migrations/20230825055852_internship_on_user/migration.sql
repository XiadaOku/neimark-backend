-- CreateTable
CREATE TABLE "internshipOnUser" (
    "internshipId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "internshipOnUser_pkey" PRIMARY KEY ("internshipId","userId")
);

-- AddForeignKey
ALTER TABLE "internshipOnUser" ADD CONSTRAINT "internshipOnUser_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "internship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internshipOnUser" ADD CONSTRAINT "internshipOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
