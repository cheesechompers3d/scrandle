import Image from "next/image"

export default function GameListItem({
  game,
  onSelect,
}: { game: { name: string; icon: string }; onSelect: () => void }) {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onSelect}>
      <div className="relative aspect-square rounded-full overflow-hidden w-16 h-16 mb-2">
        <img src={game.icon || "/placeholder.svg"} alt={game.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      <span className="mt-2 text-sm">{game.name}</span>
    </div>
  )
}

