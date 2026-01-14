import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonStyles = cva(
  "animate-pulse bg-gray-200 dark:bg-gray-800 rounded",
  {
    variants: {
      variant: {
        text: "h-4 w-full",
        title: "h-8 w-3/4",
        image: "aspect-[16/10] w-full",
        avatar: "rounded-full",
        button: "h-10 w-24",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonStyles> {}

export function Skeleton({ className, variant, ...props }: SkeletonProps) {
  return (
    <div className={cn(skeletonStyles({ variant }), className)} {...props} />
  );
}
