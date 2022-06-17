/*
  Warnings:

  - You are about to drop the column `checkoutId` on the `coupons` table. All the data in the column will be lost.
  - Added the required column `couponId` to the `checkouts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "coupons" DROP CONSTRAINT "coupons_checkoutId_fkey";

-- DropIndex
DROP INDEX "coupons_checkoutId_key";

-- AlterTable
ALTER TABLE "checkouts" ADD COLUMN     "couponId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "coupons" DROP COLUMN "checkoutId";

-- AddForeignKey
ALTER TABLE "checkouts" ADD CONSTRAINT "checkouts_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "coupons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
