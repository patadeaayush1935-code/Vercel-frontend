import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">Rozgaar Setu</h1>

      <div className="flex gap-6">
        <Link href="/jobs">Jobs</Link>
        <Link href="/post-job">Post Job</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}