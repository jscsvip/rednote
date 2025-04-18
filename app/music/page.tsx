import Menu from '@/components/music/menu'
import { Sidebar } from '@/components/music/sidebar';
import { playlists } from "@/data/playlists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';

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
              <div className="px-4 py-6 lg:px-8">
              <Tabs defaultValue="music" className="h-full space-y-6">
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
                      <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add music
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      music
                    </TabsContent>
                    <TabsContent 
                    value="podcasts"
                    className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      postcasts
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
