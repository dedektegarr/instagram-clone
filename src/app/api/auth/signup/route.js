import { db } from "@/utils/firebase/config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  const { email, name, username, password } = await request.json();

  //   form validation
  if (!email || !name || !username || !password) {
    return NextResponse.json(
      {
        status: "error",
        message: "This field required",
      },
      { status: 400 }
    );
  }

  //   check email exists
  const emailQuery = query(
    collection(db, "users"),
    where("email", "==", email)
  );
  const emailSnapshot = await getDocs(emailQuery);

  const existsEmail = emailSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (existsEmail.length > 0) {
    return NextResponse.json(
      { status: "error", message: "Email already in use" },
      { status: 400 }
    );
  }

  //   check username exists
  const usernameQuery = query(
    collection(db, "users"),
    where("username", "==", username)
  );
  const usernameSnapshot = await getDocs(usernameQuery);

  const existsUsername = usernameSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (existsUsername.length > 0) {
    return NextResponse.json(
      { status: "error", message: "Username already in use" },
      { status: 400 }
    );
  }

  //   store data to database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await addDoc(collection(db, "users"), {
      email,
      username,
      name,
      hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      status: "success",
      data: { email, username, name },
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
