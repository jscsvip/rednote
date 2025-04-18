import Menu from '@/components/music/menu'
import { Sidebar } from '@/components/music/sidebar';
import { playlists } from "@/data/playlists";
// TabsList and TabsTrigger are now used in MusicTabHeader
import { Tabs, TabsContent } from "@/components/ui/tabs";
// Button and PlusCircledIcon are now used in MusicTabHeader
// import { Button } from '@/components/ui/button';
// import { PlusCircledIcon } from '@radix-ui/react-icons';
import { PodcastTabContent } from '@/components/music/PodcastTabContent';
import { MusicTabHeader } from '@/components/music/MusicTabHeader'; // Import the new component

export default function MusicPage() {
  return (
    // Ensure container is full height flex column
    <div className='h-full flex flex-col'>
      <Menu />
      <div className="border-t overflow-hidden h-full flex-1">
        <div className="bg-background h-full">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="hidden lg:block p-4 border-r"> {/* Added border-r for visual separation */}
              <Sidebar playlists={playlists} className="hidden lg:block" />

            </div>
             
            <div className="col-span-5 lg:col-span-4">
              {/* Adjusted padding/margin if needed, but keeping as is for now */}
              <div className="px-4 py-6 lg:px-8">
                {/* Ensure Tabs still wraps everything */}
                <Tabs defaultValue="music" className="h-full space-y-6">
                    {/* Use the new header component */}
                    <MusicTabHeader />
                    {/* Removed the old div containing TabsList and Button */}
                
                <TabsContent
                  value="music"
                  className="border-none p-0 outline-none"
                >
                  music
                </TabsContent>
                <TabsContent
                  value="podcasts"
                  className="border-none p-0 outline-none"
                >
                  <PodcastTabContent />
                </TabsContent>
            </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
