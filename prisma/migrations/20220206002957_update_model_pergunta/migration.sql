/*
  Warnings:

  - You are about to drop the column `respotas_certas` on the `pergunta` table. All the data in the column will be lost.
  - You are about to drop the column `respotas_erradas` on the `pergunta` table. All the data in the column will be lost.
  - Added the required column `qtn_respotas_certas` to the `Pergunta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtn_respotas_erradas` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pergunta` DROP COLUMN `respotas_certas`,
    DROP COLUMN `respotas_erradas`,
    ADD COLUMN `qtn_respotas_certas` INTEGER NOT NULL,
    ADD COLUMN `qtn_respotas_erradas` INTEGER NOT NULL;
