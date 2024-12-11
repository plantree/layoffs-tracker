import { NextResponse } from "next/server";
import fs from "fs/promises";
import type { LayoffsItem } from "@/app/lib/type";

const file = await fs.readFile(
  process.cwd() + "/src/data/json/list.json",
  "utf-8"
);

const lists: LayoffsItem[] = JSON.parse(file);

export function GET() {
  return NextResponse.json(lists, {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
  });
}