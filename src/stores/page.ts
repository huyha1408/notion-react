import create from 'zustand'
import { Block, BlockType } from '~/utils/types'

type PageStore = {
  title: string
  blocks: Block[]
}

const initialData: PageStore = {
  title: 'Pigaboo',
  blocks: [
    {
      type: BlockType.H1,
      details: {
        value: 'Get Started',
      },
    },
    {
      type: BlockType.Divider,
    },
    {
      type: BlockType.TEXT,
      details: {
        value:
          '<p>👋 Welcome! This is a private page for you to play around with.</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value: '<p>Give these things a try:</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value: '<p>1. Hover on the left of each line for quick actions</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value: '<p>2. Click on the + button to add a new line</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value: '<p>3. Drag the ⋮⋮ button to reorder</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value: '<p>4. Click the trash icon to delete this block</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value:
          '<p>5. <strong>Bold</strong> and <em>italicize</em> using markdown e.g. *italic* or **bold**</p>',
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value:
          "<p>6. Add headers and dividers with '#', '##' or '---' followed by a space</p>",
      },
    },
    {
      type: BlockType.TEXT,
      details: {
        value:
          "<p>7. Type '/' for a menu to quickly switch blocks and search by typing</p>",
      },
    },
  ],
}

export const usePageStore = create<PageStore>((set) => initialData)