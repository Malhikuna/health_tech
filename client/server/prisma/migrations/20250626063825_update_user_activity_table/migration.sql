/*
  Warnings:

  - The `activity_date` column on the `user_activities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `user_activities` DROP COLUMN `activity_date`,
    ADD COLUMN `activity_date` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);
