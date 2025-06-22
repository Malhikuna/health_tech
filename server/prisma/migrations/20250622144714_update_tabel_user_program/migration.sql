/*
  Warnings:

  - You are about to drop the column `activity_date` on the `user_programs` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `start_date` to the `user_programs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user_programs` DROP COLUMN `activity_date`,
    ADD COLUMN `start_date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);
