import Link from 'next/link'

function NotFound() {
    return (
        <div className="w-full h-lvh flex flex-col justify-center items-center gap-4">
            <h2 className="text-title-1 text-primary-1">404</h2>
            <p className="text-regular-5 text-primary-1">Halaman Tidak Ditemukan :(</p>
        </div>
    )
}

export default NotFound
