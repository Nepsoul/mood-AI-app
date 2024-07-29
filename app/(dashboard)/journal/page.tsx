import { prisma } from "@/utils/db";
import { getUserByClerkId } from "@/utils/auth";
import NewEntryCard from "@/components/NewEntryCard";
import EntryCard from "@/components/entrycard";

const getEntries = async () => {
  const user = await getUserByClerkId();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
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
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default JournalPage;