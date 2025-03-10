export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              This project is developed for learning purposes only and does not represent an official Evernorth product.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              © {year} API Documentation. All rights reserved.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Developed by <a href="https://github.com/AjayKumbham" className="text-primary hover:underline">Ajay Kumbham</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
