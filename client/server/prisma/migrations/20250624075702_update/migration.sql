/*
  Warnings:

  - You are about to drop the column `fats_per_uni` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `colories` on the `recipes` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `fats_per_unit` to the `ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ingredients` DROP COLUMN `fats_per_uni`,
    ADD COLUMN `fats_per_unit` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `recipes` DROP COLUMN `colories`;

-- AlterTable
ALTER TABLE `user_activities` MODIFY `breakfast_completed` TINYINT NOT NULL DEFAULT 0,
    MODIFY `lunch_completed` TINYINT NOT NULL DEFAULT 0,
    MODIFY `dinner_completed` TINYINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);
