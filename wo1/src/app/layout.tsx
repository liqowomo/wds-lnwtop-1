import './globals.css'
import {Rubik} from 'next/font/google'

const rubi = Rubik({subsets: ['latin']})

export const metadata = {
	title: 'ToDo App',
	description: 'Tutorialsaz ',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body
				className={`${rubi.className} bg-[#390112] text-[#ec8fd0] contain mx-auto p-4`}
			>
				{children}
			</body>
		</html>
	)
}
