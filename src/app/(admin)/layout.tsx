export const metadata = {
	title: 'Sanity Studio',
	description: 'Панель управления контентом',
};

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	);
}
