/**
 * Here the props are being defined which are used in the function below
 */


type TodoItemProps = {
	id: string
	title: string
	Complete: boolean
}

/**
 * TodoItem - Note this is using peers class from tailwind which is required to get teh
 * sstrike trhough whe clicking the checkbox, You had problems because note that input is self closing
 * but label is not, sinec you need to wrap the text
 */
export function TodoItem({id, title, Complete}: TodoItemProps) {
	return (
		<li className="flex gap-1 items-center">
			<input id={id} type="checkbox" className="cursor-pointer peer" />
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:line-through peer-checked:text-blue-900"
			>
				{title}
			</label>
		</li>
	)
}
