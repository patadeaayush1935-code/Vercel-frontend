export default function Footer() {
  return (
    <footer className="border-t py-10 text-center text-gray-700" style={{ background: '#f9fafb' }}>
      <p className="font-semibold">© 2026 Rozgaar Setu</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="#" className="text-gray-600 hover:text-black">About</a>
        <a href="#" className="text-gray-600 hover:text-black">Contact</a>
        <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
      </div>
    </footer>
  );
}