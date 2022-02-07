/*
  Warnings:

  - You are about to drop the `opcoes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `letra_a` to the `Pergunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letra_b` to the `Pergunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letra_c` to the `Pergunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letra_d` to the `Pergunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letra_e` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `opcoes` DROP FOREIGN KEY `Opcoes_perguntaId_fkey`;

-- AlterTable
ALTER TABLE `pergunta` ADD COLUMN `letra_a` VARCHAR(191) NOT NULL,
    ADD COLUMN `letra_b` VARCHAR(191) NOT NULL,
    ADD COLUMN `letra_c` VARCHAR(191) NOT NULL,
    ADD COLUMN `letra_d` VARCHAR(191) NOT NULL,
    ADD COLUMN `letra_e` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `opcoes`;
