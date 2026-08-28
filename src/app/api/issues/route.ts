import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
  try {
    const issues = await prisma.issue.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(issues, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch issues:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, latitude, longitude, address, imageUrl } = body;

    if (
      !title ||
      !description ||
      latitude === undefined ||
      longitude === undefined
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Түр зуур турших зорилгоор database дотор user байхгүй бол анхдагч user үүсгэх логик
    let user = await prisma.user.findFirst();
    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: "test_clerk_id_123",
          email: "citizen@example.com",
          name: "Зоригт Иргэн",
          role: "CITIZEN",
        },
      });
    }

    // Гомдлыг базын `Issue` хүснэгт рүү хадгалах
    const newIssue = await prisma.issue.create({
      data: {
        title,
        description,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        address: address || "",
        imageUrl: imageUrl || "",
        status: "PENDING",
        userId: user.id,
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    console.error("Failed to create issue:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
