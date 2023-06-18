import {prisma} from '@/db'
import Link from 'next/link'

//A1 - Isolation of the l11
function getTodos() {
	return prisma.todo.findMany()
}

export default async function Home() {
	// This is for retrieving the records which ca aso

	// This can be further broken down in a function of its own see Label A1
	const todos = await getTodos()

	// await prisma.todo.create({data: {title: 'fuku', complete: false}})

	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl p-2">ToDos and Shizz</h1>
				<Link className="mybutton" href="/new">
					New
				</Link>
			</header>
			<ul className="pl-4">
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</>
	)
}
