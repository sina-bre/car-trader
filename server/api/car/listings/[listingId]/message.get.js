import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const schema = Joi.object({
//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ["com", "net", "org"] },
//   }),
//   phone: Joi.string()
//     .length(10)
//     .pattern(/^[0-9]+$/)
//     .required(),
//   name: Joi.string().required(),
//   message: Joi.string().min(20).required(),
// });

export default defineEventHandler(async (event) => {
  const { listingId } = event.context.params;
  return prisma.message.findMany({
    where: {
      listingId: parseInt(listingId),
    },
  });
});
