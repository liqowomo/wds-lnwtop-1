import {prisma} from '@/db'
import Image from 'next/image'
import Link from 'next/link'

async function createTodo(data: FormData) {
	'use server'
	const title = data.get('title')?.valueOf
	if (typeof title !== 'string' || title.length === 0) {
		throw new Error('Title is required')
	}
	await prisma.todo.create({data: {title, Complete: false}})
}

export default function Page() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Boobs </h1>
			</header>
			<form action={createTodo} className="flex gap-2 flex-col">
				<input
					type="text"
					name="title"
					className="border border-blue-300 bg-transparent rounded px-2 py-1 focus-within:border-teal-700"
				/>
				<div className="flex gap-1 justify-end">
					{/* Note that .. means to go back  */}
					<Link href="..">
						<button className="mybutton">Cancel</button>
						<button className="mybutton">Create</button>
					</Link>
				</div>
			</form>
		</>
	)
}
