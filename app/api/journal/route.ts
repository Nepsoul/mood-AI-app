import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Write about your day!",

      // user:{  //alternative
      //     connect:{
      //         id:user.id
      //     }
      // }
    },
  });
  return NextResponse.json({ data: entry });
};
