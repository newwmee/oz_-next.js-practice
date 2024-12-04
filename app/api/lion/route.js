import { NextResponse } from "next/server";

export async function GET() {
  const lion_data = {
    message: "저는 무서운 사자입니다.",
    image:
      "https://i.pinimg.com/736x/ec/a8/b2/eca8b29c94e0c196c534e1fb57835190.jpg",
  };
  console.log(image.lion_data);
  return NextResponse.json(lion_data);
}
