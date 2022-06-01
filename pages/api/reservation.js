import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, isAttending, message } = req.body;
    const reservation = await prisma.reservation.create({
      data: {
        name,
        isAttending,
        message,
      },
    });
    res.json(reservation);
  }

  if (req.method === "GET") {
    const reservations = await prisma.reservation.findMany({
      orderBy: [
        {
          updatedAt: "desc",
        },
      ],
    });
    res.json(reservations);
  }
}
