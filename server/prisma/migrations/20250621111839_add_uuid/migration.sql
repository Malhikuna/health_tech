/*
  Warnings:

  - You are about to alter the column `created_at` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- DropForeignKey
ALTER TABLE `user_activities` DROP FOREIGN KEY `user_activities_user_id_fkey`;

-- DropIndex
DROP INDEX `user_activities_user_id_fkey` ON `user_activities`;

-- AlterTable
ALTER TABLE `user_activities` MODIFY `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `id` CHAR(36) NOT NULL,
    MODIFY `created_at` TIMESTAMP NOT NULL,
    ADD PRIMARY KEY (`id`);

-- DropIndex
DROP INDEX `users_id_key` ON `users`;

-- AddForeignKey
ALTER TABLE `user_activities` ADD CONSTRAINT `user_activities_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
