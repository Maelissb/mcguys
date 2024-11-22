-- CreateTable
CREATE TABLE "commands" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tota" DOUBLE PRECISION NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    "cancelled" BOOLEAN NOT NULL DEFAULT false,
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "delivered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "commands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_in_commands" (
    "id" SERIAL NOT NULL,
    "command_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "ready" BOOLEAN NOT NULL DEFAULT false,
    "packed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "products_in_commands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "product_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products_in_commands" ADD CONSTRAINT "products_in_commands_command_id_fkey" FOREIGN KEY ("command_id") REFERENCES "commands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_in_commands" ADD CONSTRAINT "products_in_commands_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "product_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
