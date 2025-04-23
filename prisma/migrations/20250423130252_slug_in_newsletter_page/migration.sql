/*
  Warnings:

  - Added the required column `slug` to the `NewsletterPage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsletterPage" ADD COLUMN     "slug" TEXT NOT NULL;
