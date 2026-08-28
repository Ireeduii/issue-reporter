import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 },
      );
    }

    const updatedIssue = await prisma.issue.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error("Failed to update issue status:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
