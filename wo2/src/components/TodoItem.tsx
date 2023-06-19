type TodoItemProps = {
	id: string
	title: string
	Complete: boolean
}

export function TodoItem({id, title, Complete}: TodoItemProps) {
	return (
		<li className="flex gap-1 items-center">
			<input id={id} type="checkbox" className="cursor-pointer peer" />
			<label htmlFor={id} className="peer-checked:line-through">
				{title}
			</label>
		</li>
	)
}
