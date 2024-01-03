import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export default function HomePage() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"}>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="space-y-4">
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
}
