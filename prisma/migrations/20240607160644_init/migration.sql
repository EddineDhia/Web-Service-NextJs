-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Gasoline', 'Hybrid', 'Electric', 'Diesel');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "year" INTEGER NOT NULL,
    "type" "Type" NOT NULL,
    "engineSpecs" TEXT NOT NULL,
    "topSpeed" INTEGER NOT NULL,
    "imageSrc" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_imageSrc_key" ON "Car"("imageSrc");
