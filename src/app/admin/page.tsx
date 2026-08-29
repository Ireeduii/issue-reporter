import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminClientView from "./AdminClientView";

export default async function AdminPage() {
  const user = await currentUser();

  // Хэрэв нэвтрээгүй бол нэвтрэх хуудас руу эсвэл нүүр рүү явуулах
  if (!user) {
    redirect("/");
  }

  // Clerk Public Metadata-аас role-ийг нь шалгах
  const userRole = (user.publicMetadata as { role?: string })?.role;
  const isAdmin = userRole === "admin";

  // Хэрэв админ биш бол нүүр хуудас руу шидэх
  if (!isAdmin) {
    redirect("/");
  }

  return <AdminClientView />;
}
