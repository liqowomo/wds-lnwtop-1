import Link from 'next/link'

export default function Home() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">ToDo's</h1>
				<Link
					className="border border-pink-300 text-pink-200 px-2 py-1 rounded hover:bg-pink-700 focus-within:bg-red-500 outline outline-offset-1 outline-1 "
					href="/new"
				>
					New
				</Link>
				<Link className="mybutton" href="/new">
					New
				</Link>
			</header>
		</>
	)
}
