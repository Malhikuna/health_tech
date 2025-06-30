/*
  Warnings:

  - You are about to drop the column `program_id` on the `user_activities` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `user_activities` table. All the data in the column will be lost.
  - You are about to drop the column `profile_data` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - Added the required column `user_program_id` to the `user_activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_activities` DROP FOREIGN KEY `user_activities_program_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_activities` DROP FOREIGN KEY `user_activities_user_id_fkey`;

-- DropIndex
DROP INDEX `user_activities_program_id_fkey` ON `user_activities`;

-- DropIndex
DROP INDEX `user_activities_user_id_fkey` ON `user_activities`;

-- AlterTable
ALTER TABLE `user_activities` DROP COLUMN `program_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `user_program_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `profile_data`,
    MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);

-- CreateTable
CREATE TABLE `user_programs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `program_id` INTEGER NOT NULL,
    `activity_date` DATE NOT NULL,
    `status` ENUM('active', 'completed', 'cancelled') NOT NULL DEFAULT 'active',
    `profile_data` JSON NOT NULL,
    `calculated_target_calories` INTEGER NOT NULL,

    UNIQUE INDEX `user_programs_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `unit` VARCHAR(50) NOT NULL,
    `calories_per_unit` DOUBLE NOT NULL,
    `protein_per_unit` DOUBLE NOT NULL,
    `carbs_per_unit` DOUBLE NOT NULL,
    `fats_per_uni` DOUBLE NOT NULL,

    UNIQUE INDEX `ingredients_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recipe_ingredients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recipe_id` INTEGER NOT NULL,
    `ingredient_id` INTEGER NOT NULL,
    `base_quantity` DOUBLE NOT NULL,

    UNIQUE INDEX `recipe_ingredients_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_programs` ADD CONSTRAINT `user_programs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_programs` ADD CONSTRAINT `user_programs_program_id_fkey` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipe_ingredients` ADD CONSTRAINT `recipe_ingredients_recipe_id_fkey` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `recipe_ingredients` ADD CONSTRAINT `recipe_ingredients_ingredient_id_fkey` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_activities` ADD CONSTRAINT `user_activities_user_program_id_fkey` FOREIGN KEY (`user_program_id`) REFERENCES `user_programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
