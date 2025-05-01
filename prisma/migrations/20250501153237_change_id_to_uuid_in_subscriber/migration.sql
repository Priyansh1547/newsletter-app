/*
  Warnings:

  - The primary key for the `Subscriber` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Subscriber" DROP CONSTRAINT "Subscriber_pkey",
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Subscriber_id_seq";
