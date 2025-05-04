import { cn } from "@/lib/utils"
import { EmptyListProps } from "@/utils/types"

const EmptyList = ({title, className} : EmptyListProps) => {
  return (
      <h2 className={cn('text-xl', className)}>{title}</h2>
  )
}

export default EmptyList
