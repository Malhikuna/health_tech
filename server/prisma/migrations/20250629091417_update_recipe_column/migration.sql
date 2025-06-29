/*
  Warnings:

  - You are about to drop the column `intructions` on the `recipes` table. All the data in the column will be lost.
  - You are about to alter the column `activity_date` on the `user_activities` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `instructions` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `intructions`,
    ADD COLUMN `instructions` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `user_activities` MODIFY `activity_date` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP NOT NULL;
