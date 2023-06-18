import {prisma} from '@/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function page() {
	const todos = await prisma.todo.findMany()
	// await prisma.todo.create({
	// 	data: {
	// 		title: 'sniffit',
	// 		Complete: false,
	// 	},
	// })
	return (
		<>
			<div className="mx-auto flex flex-col outline p-2 justify-center items-center">
				<div className="backdrop-blur-sm skew-x-1">
					<Image
						src={'https://media.tenor.com/PmJMkdZKA20AAAAC/dance-dancing.gif'}
						alt="bbw"
						width={100}
						height={100}
						priority={true}
					/>
				</div>
				<p className="italic tracking-widest text-center p-2 ">
					&lsquo; Dance &lsquo;
				</p>
			</div>
			<div className="flex justify-between items-center mb-4 py-5 outline p-5">
				<h1>Pussy</h1>
				<Link className="mybutton" href="/new">
					New
				</Link>
			</div>
			<div>
				<ul className="pl-4">
					{todos.map((todo) => (
						<li key={todo.id}>{todo.title}</li>
					))}
				</ul>
			</div>
		</>
	)
}
