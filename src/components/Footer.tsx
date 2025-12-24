export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 sm:py-10 lg:py-12 mt-12 sm:mt-16 lg:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl">
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              This project is developed for learning purposes only and does not represent an official Evernorth product.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4">
              © {year} API Documentation. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center justify-center">
              <p className="text-muted-foreground text-xs sm:text-sm">
                Developed by <a href="https://github.com/AjayKumbham" className="text-primary hover:underline transition-all duration-200 font-medium">Ajay Kumbham</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
