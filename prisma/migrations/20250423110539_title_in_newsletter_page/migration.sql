/*
  Warnings:

  - Added the required column `title` to the `NewsletterPage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsletterPage" ADD COLUMN     "title" TEXT NOT NULL;
