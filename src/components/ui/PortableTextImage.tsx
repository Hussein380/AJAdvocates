import Image from "next/image";
import { urlFor } from "@/lib/sanity";

export const PortableTextImage = ({ value }: any) => {
  if (!value || !value.asset) {
    return null;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] my-8 rounded-sm overflow-hidden">
      <Image
        src={urlFor(value).url()}
        alt={value.alt || "Blog image"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
