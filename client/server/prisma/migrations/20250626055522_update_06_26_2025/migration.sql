/*
  Warnings:

  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `daily_plans` DROP FOREIGN KEY `daily_plans_program_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_activities` DROP FOREIGN KEY `user_activities_user_program_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_programs` DROP FOREIGN KEY `user_programs_program_id_fkey`;

-- DropIndex
DROP INDEX `daily_plans_program_id_fkey` ON `daily_plans`;

-- DropIndex
DROP INDEX `user_activities_user_program_id_fkey` ON `user_activities`;

-- DropIndex
DROP INDEX `user_programs_program_id_fkey` ON `user_programs`;

-- AlterTable
ALTER TABLE `daily_plans` MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `program_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `daily_plans_id_key` ON `daily_plans`;

-- AlterTable
ALTER TABLE `ingredients` ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `ingredients_id_key` ON `ingredients`;

-- AlterTable
ALTER TABLE `programs` MODIFY `id` CHAR(36) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `programs_id_key` ON `programs`;

-- AlterTable
ALTER TABLE `recipe_ingredients` ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `recipe_ingredients_id_key` ON `recipe_ingredients`;

-- AlterTable
ALTER TABLE `recipes` ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `recipes_id_key` ON `recipes`;

-- AlterTable
ALTER TABLE `user_activities` MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `user_program_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `user_activities_id_key` ON `user_activities`;

-- AlterTable
ALTER TABLE `user_programs` MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `program_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `user_programs_id_key` ON `user_programs`;

-- AlterTable
ALTER TABLE `users` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT (CURRENT_TIMESTAMP);

-- AddForeignKey
ALTER TABLE `user_programs` ADD CONSTRAINT `user_programs_program_id_fkey` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_plans` ADD CONSTRAINT `daily_plans_program_id_fkey` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_activities` ADD CONSTRAINT `user_activities_user_program_id_fkey` FOREIGN KEY (`user_program_id`) REFERENCES `user_programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
