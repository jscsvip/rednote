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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { listenNowAlbums, madeForYouAlbums } from '@/data/albums';
import { AlbumArtwork } from '@/components/music/album-artwork';
// Remove the specific ListenNowHeader import
// import { ListenNowHeader } from '@/components/music/ListenNowHeader';
import { SectionHeader } from '@/components/music/SectionHeader'; // Import the new reusable component

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
                    {/* Use the new reusable component for "Listen Now" */}
                    <SectionHeader
                      title="Listen Now"
                      description="Top picks for you. Updated daily."
                    />
                    {/* Removed the old specific header div */}
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    <SectionHeader
                      title="Made for You"
                      description="Your personal playlists. Updated daily."
                    />
                        <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
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
