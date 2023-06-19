import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Boobs </h1>
			</header>
			<form className="flex gap-2 flex-col">
				<input
					type="text"
					placeholder="title"
					className="border border-blue-300 bg-transparent rounded px-2 py-1 focus-within:border-teal-700"
				/>
				<div className="flex gap-1 justify-end">
					{/* Note that .. means to go back  */}
					<Link href="..">
						<button className="mybutton">Cancel</button>
						<button className="mybutton">Submit</button>
					</Link>
				</div>
			</form>
		</>
	)
}
