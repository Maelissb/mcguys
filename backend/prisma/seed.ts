import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.productType.create({
    data: {
      name: 'Burgers',
      products: {
        create: [
          {
            name: 'CBO Guy',
            description: 'Le CBO Guy le burger signature',
            price: 4.8,
            image: 'http://via.placeholder.com/150',
          },
          {
            name: 'Big Guy',
            description: 'Le Big Guy le burger signature',
            price: 5.0,
            image: 'http://via.placeholder.com/150',
          },
          {
            name: 'Tasty Guy',
            description: 'Le Tasty Guy le burger signature',
            price: 4.0,
            image: 'http://via.placeholder.com/150',
          },
        ],
      },
    },
  });

  await prisma.productType.create({
    data: {
      name: 'Boissons',
      products: {
        create: [
          {
            name: 'Coca',
            description: 'Le Coca-Cola est une boisson gazeuse',
            price: 2,
            image: 'https://via.placeholder.com/150',
          },
          {
            name: 'Fanta',
            description: 'Le Fanta est une boisson gazeuse',
            price: 2,
            image: 'https://via.placeholder.com/150',
          },
          {
            name: 'Sprite',
            description: 'Le Sprite est une boisson gazeuse',
            price: 2,
            image: 'https://via.placeholder.com/150',
          },
        ],
      },
    },
  });

  await prisma.productType.create({
    data: {
      name: 'Frites',
      products: {
        create: [
          {
            name: 'Small',
            description: 'Petite portion de frites',
            price: 3,
            image: 'https://via.placeholder.com/150',
          },
          {
            name: 'Medium',
            description: 'Moyenne portion de frites',
            price: 4,
            image: 'https://via.placeholder.com/150',
          },
          {
            name: 'Large',
            description: 'Grande portion de frites',
            price: 5,
            image: 'https://via.placeholder.com/150',
          },
        ],
      },
    },
  });

  await prisma.productType.create({
    data: {
      name: 'Desserts',
      products: {
        create: [
          {
            name: 'SunGuy',
            description: 'SunGuy au choix',
            price: 2,
            image: 'https://via.placeholder.com/150',
          },
          {
            name: 'GuyFlurry',
            description: 'GuyFlurry au choix',
            price: 3,
            image: 'https://via.placeholder.com/150',
          },
        ],
      },
    },
  });

  await prisma.command.create({
    data: {
      total: 9.9,
      paid: true,
      productInCommand: {
        create: [
          {
            product: {
              connect: {
                id: 1,
              },
            },
          },
          {
            product: {
              connect: {
                id: 1,
              },
            },
          },
          {
            product: {
              connect: {
                id: 8,
              },
            },
          },
          {
            product: {
              connect: {
                id: 5,
              },
            },
          },
          {
            product: {
              connect: {
                id: 11,
              },
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
