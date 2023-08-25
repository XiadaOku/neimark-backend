-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achivement" (
    "id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "typeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "achivement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achivementType" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "iconLink" TEXT NOT NULL,

    CONSTRAINT "achivementType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "typeId" TEXT NOT NULL,
    "isReviewed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventOnType" (
    "eventId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "eventOnType_pkey" PRIMARY KEY ("eventId","typeId")
);

-- CreateTable
CREATE TABLE "internship" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "internship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "internshipOnType" (
    "internshipId" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,

    CONSTRAINT "internshipOnType_pkey" PRIMARY KEY ("internshipId","typeId")
);

-- AddForeignKey
ALTER TABLE "achivement" ADD CONSTRAINT "achivement_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "achivementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "achivement" ADD CONSTRAINT "achivement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventOnType" ADD CONSTRAINT "eventOnType_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventOnType" ADD CONSTRAINT "eventOnType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "achivementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internshipOnType" ADD CONSTRAINT "internshipOnType_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "internship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "internshipOnType" ADD CONSTRAINT "internshipOnType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "achivementType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
