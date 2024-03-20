"use client";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        className="btn btn-primary"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [
            { name: "c" },
            { name: "b" },
            { name: "g" },
            { name: "a" },
          ];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
