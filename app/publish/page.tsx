'use client'

import { SetStateAction, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PublishPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handlePublish = async () => {
    // TODO: 实现发布逻辑
    console.log('Publishing:', { title, content })
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">发布新文章</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block mb-2">标题</label>
          <Input
            value={title}
            onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)}
            placeholder="请输入文章标题"
          />
        </div>

        <div>
          <label className="block mb-2">内容</label>
          {/* <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="请输入文章内容"
            rows={10}
          /> */}
        </div>

        <Button onClick={handlePublish}>
          发布
        </Button>
      </div>
    </div>
  )
}
