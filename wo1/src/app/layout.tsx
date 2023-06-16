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
			<body className={`${rubi.className}`}>{children}</body>
		</html>
	)
}
