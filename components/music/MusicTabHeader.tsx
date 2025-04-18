import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

export function MusicTabHeader() {
  return (
    <div className="space-between flex items-center">
      <TabsList>
        <TabsTrigger value="music" className="relative">
          Music
        </TabsTrigger>
        <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
        <TabsTrigger value="live" disabled>
          Live
        </TabsTrigger>
      </TabsList>
      <Dialog>
          <DialogTrigger asChild>
            <div className="ml-auto mr-4">
                <Button>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                Add music
                </Button>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Music</DialogTitle>
              <DialogDescription>
                Copy and paste the Music feed URL to import.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="url">Music URL</Label>
                <Input id="url" placeholder="https://example.com/feed.xml" />
              </div>
            </div>
            <DialogFooter>
              <Button>Import Music</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      
    </div>
  );
}