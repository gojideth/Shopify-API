/*
  Warnings:

  - You are about to drop the column `checkoutId` on the `shopping_carts` table. All the data in the column will be lost.
  - Added the required column `shoppingCartId` to the `checkouts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shopping_carts" DROP CONSTRAINT "shopping_carts_checkoutId_fkey";

-- AlterTable
ALTER TABLE "checkouts" ADD COLUMN     "shoppingCartId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "shopping_carts" DROP COLUMN "checkoutId";

-- AddForeignKey
ALTER TABLE "checkouts" ADD CONSTRAINT "checkouts_shoppingCartId_fkey" FOREIGN KEY ("shoppingCartId") REFERENCES "shopping_carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
