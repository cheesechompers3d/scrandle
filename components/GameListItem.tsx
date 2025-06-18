import Image from "next/image"

export default function GameListItem({
  game,
  onSelect,
}: { game: { name: string; icon: string }; onSelect: () => void }) {
  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onSelect}>
      <Image src={game.icon || "/placeholder.svg"} alt={game.name} width={64} height={64} className="rounded-full" />
      <span className="mt-2 text-sm">{game.name}</span>
    </div>
  )
}

