import { Movie } from "@/app/types/movie";
import { Data } from "@/app/utils/data";
import { NextResponse } from "next/server";

export async function GET({ url }: Request): Promise<NextResponse<Movie[]>> {
  const query = new URL(url).searchParams.get("query");

  if (query === null) {
    return NextResponse.json([]);
  }

  if (query) {
    return NextResponse.json<Movie[]>(
      Data.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return NextResponse.json<Movie[]>(Data);
}
