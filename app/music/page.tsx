import Menu from '@/components/music/menu'

export default function MusicPage() {
  return (
    // Ensure container is full height flex column
    <div className='h-full flex flex-col'>
      <Menu />
      <div className="border-t overflow-hidden h-full flex-1">
        <div className="bg-background h-full">
          <div className="grid lg:grid-cols-5 h-full">
            <div className="hidden lg:block p-4 border-r"> {/* Added border-r for visual separation */}
              SIDEBAR
            </div>
             
            <div className="col-span-5 lg:col-span-4">
              <div className="px-4 py-6 lg:px-8">
                CONTENT

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
