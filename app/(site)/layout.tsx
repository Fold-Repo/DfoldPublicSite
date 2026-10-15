import { Footer, Navbar, SmoothScroll } from '@/components'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SmoothScroll />

            <Navbar />

            <main id="main-content" className="flex-1">
                {children}
            </main>

            <Footer />
        </>
    )
}
