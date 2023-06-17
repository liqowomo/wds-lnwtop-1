import {prisma} from '@/db'
import Link from 'next/link'

export default async function Home() {
	const todos = await prisma.todo.findMany()
	console.log()

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
