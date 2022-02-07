-- CreateTable
CREATE TABLE `Pergunta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pergunta` VARCHAR(191) NOT NULL,
    `resposta_certa` VARCHAR(191) NOT NULL,
    `respotas_certas` INTEGER NOT NULL,
    `respotas_erradas` INTEGER NOT NULL,

    UNIQUE INDEX `Pergunta_pergunta_key`(`pergunta`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Opcoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `letra_a` VARCHAR(191) NOT NULL,
    `letra_b` VARCHAR(191) NOT NULL,
    `letra_c` VARCHAR(191) NOT NULL,
    `letra_d` VARCHAR(191) NOT NULL,
    `letra_e` VARCHAR(191) NOT NULL,
    `perguntaId` INTEGER NOT NULL,

    UNIQUE INDEX `Opcoes_perguntaId_key`(`perguntaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Opcoes` ADD CONSTRAINT `Opcoes_perguntaId_fkey` FOREIGN KEY (`perguntaId`) REFERENCES `Pergunta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
