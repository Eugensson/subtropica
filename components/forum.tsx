import { ThreadList } from "@/components/thread-list";
import { ForumSidebar } from "@/components/forum-sidebar";

export const Forum = () => {
  return (
    <div className="container mx-auto max-w-365 grid grid-cols-[1fr_350px_70px] gap-8">
      <ThreadList />
      <ForumSidebar />
      <div />
    </div>
  );
};
