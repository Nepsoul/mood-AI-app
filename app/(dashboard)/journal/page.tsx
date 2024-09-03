import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";
import { analyze } from "@/utils/ai";

const getEntries = async () => {
  const user = await getUserByClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  await analyze(`create me a vue component that renders a counting number`); //it gives component and used tokens as well
  return entries;
};
const JournalPage = async () => {
  const entries = await getEntries();
  console.log("entries", entries);
  return (
    <div className="p-10 bg-zinc-100/50 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4 ">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
