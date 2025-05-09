import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NewsCardProps {
    id: number
    title: string
    description: string
    imageUrl: string
    date: string
}

export function BlogCard({ id, title, description, imageUrl, date }: NewsCardProps) {
    return (
        <div className="overflow-hidden rounded-lg">
            {/* Image with rounded corners */}
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>

            <div className="pt-3 pb-2">
                {/* Date */}
                <div className="text-sm text-gray-500 mb-1">{date}</div>

                {/* Title - up to 2 lines with truncation */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[4rem]">{title}</h3>

                {/* Description - up to 3 lines with truncation */}
                <p className="text-gray-600 mb-3 line-clamp-3 min-h-[4.5rem]">{description}</p>

                {/* Read More link */}
                <Link href={`/news/${id}`} className="inline-flex items-center text-blue-600 font-medium hover:underline">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    )
}
