import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-slate-50">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Socially
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to your social space.
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Create your account, sign in, and start connecting with your people.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-full bg-sky-500 px-5 py-2.5 font-medium text-white transition hover:bg-sky-400">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </main>
  );
}