export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-center py-8">
        <span>&copy; {new Date().getFullYear()} Delta</span>
      </div>
    </footer>
  );
}
