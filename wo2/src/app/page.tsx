import Image from 'next/image'
import Link from 'next/link'

export default function page() {
	return (
		<>
			<div className="mx-auto flex container outline p-2 justify-center">
				<Image
					src={'https://media.tenor.com/PmJMkdZKA20AAAAC/dance-dancing.gif'}
					alt="bbw"
					width={300}
					height={300}
					priority={true}
				/>
				<p className="italic tracking-widest text-center p-2 ">
					&lsquo; Dance &lsquo;
				</p>
			</div>
			<h1>Pussy</h1>
		</>
	)
}
