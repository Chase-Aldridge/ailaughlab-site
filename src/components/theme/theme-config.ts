export type ThemeId = 'ai-lab' | 'wild-west' | 'space-station' | 'retro-arcade'

export interface ThemeConfig {
  id: ThemeId
  name: string
  tagline: string
  emoji: string
  description: string
}

export const themes: Record<ThemeId, ThemeConfig> = {
  'ai-lab': {
    id: 'ai-lab',
    name: 'AI Lab',
    tagline: 'Welcome to the Lab',
    emoji: '🧪',
    description: 'Futuristic neon laboratory where comedy experiments never stop.',
  },
  'wild-west': {
    id: 'wild-west',
    name: 'Wild West',
    tagline: 'Welcome to the Frontier',
    emoji: '🤠',
    description: 'Dusty frontier saloon where the jokes are as wild as the west.',
  },
  'space-station': {
    id: 'space-station',
    name: 'Space Station',
    tagline: 'Welcome Aboard',
    emoji: '🚀',
    description: 'Zero-gravity orbital lab. Comedy in space hits different.',
  },
  'retro-arcade': {
    id: 'retro-arcade',
    name: 'Retro Arcade',
    tagline: 'Insert Coin to Begin',
    emoji: '🕹️',
    description: '80s neon arcade where every joke is a high score.',
  },
}

export const themeIds = Object.keys(themes) as ThemeId[]
export const defaultTheme: ThemeId = 'ai-lab'
