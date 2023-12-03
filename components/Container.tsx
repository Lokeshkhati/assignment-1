export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={'mx-auto max-w-7xl w-full px-6 lg:px-8'}>
            {children}
        </div>
    )
}
