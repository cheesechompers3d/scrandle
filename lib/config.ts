import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "scrandle",
  siteName: "Scrandle",
  seo: {
    title: "Scrandle - Daily Food Comparison Game | Guess Which Dish is More Popular!",
    description: "Experience Scrandle, a delightful daily food comparison game where you guess which dish is more popular based on community votes. Explore global cuisine and test your food intuition!",
    ogImage: "/images/hot_game/scrandle.png",
    keywords: "Scrandle, food comparison game, daily food game, global cuisine, food guessing game, community voting, culinary game, food trivia, online game, browser game"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Scrandle",
    siteUrl: "https://www.scrandle.pro",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 