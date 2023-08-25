-- CreateTable
CREATE TABLE "savedEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "savedEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "savedEvent" ADD CONSTRAINT "savedEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savedEvent" ADD CONSTRAINT "savedEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
