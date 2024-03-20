'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

const NewUsersPage = () => {

const router = useRouter()

  return (
    <>
      <Link className="btn btn-primary" href="/users">New Users Page</Link>
      <button className="btn" onClick={() => router.push("/users")}>
        Create
      </button>
    </>
  );
};

export default NewUsersPage;
