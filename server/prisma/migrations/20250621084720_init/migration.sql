-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NULL,
    `profile_data` JSON NOT NULL,
    `created_at` TIMESTAMP NOT NULL,

    UNIQUE INDEX `users_id_key`(`id`),
    UNIQUE INDEX `users_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `cover_image_url` VARCHAR(255) NOT NULL,
    `duration_days` INTEGER NOT NULL,

    UNIQUE INDEX `programs_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `recipes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `intructions` TEXT NOT NULL,
    `colories` INTEGER NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `cooking_time_minutes` INTEGER NOT NULL,

    UNIQUE INDEX `recipes_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daily_plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `program_id` INTEGER NOT NULL,
    `day_number` INTEGER NOT NULL,
    `breakfast_recipe_id` INTEGER NOT NULL,
    `lunch_recipe_id` INTEGER NOT NULL,
    `dinner_recipe_id` INTEGER NOT NULL,

    UNIQUE INDEX `daily_plans_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `program_id` INTEGER NOT NULL,
    `day_number` INTEGER NOT NULL,
    `activity_date` DATE NOT NULL,
    `breakfast_completed` TINYINT NOT NULL,
    `lunch_completed` TINYINT NOT NULL,
    `dinner_completed` TINYINT NOT NULL,

    UNIQUE INDEX `user_activities_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `daily_plans` ADD CONSTRAINT `daily_plans_program_id_fkey` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_plans` ADD CONSTRAINT `daily_plans_breakfast_recipe_id_fkey` FOREIGN KEY (`breakfast_recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_plans` ADD CONSTRAINT `daily_plans_lunch_recipe_id_fkey` FOREIGN KEY (`lunch_recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `daily_plans` ADD CONSTRAINT `daily_plans_dinner_recipe_id_fkey` FOREIGN KEY (`dinner_recipe_id`) REFERENCES `recipes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_activities` ADD CONSTRAINT `user_activities_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_activities` ADD CONSTRAINT `user_activities_program_id_fkey` FOREIGN KEY (`program_id`) REFERENCES `programs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
