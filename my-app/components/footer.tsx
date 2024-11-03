

export default function Footer() {
  return (
    <footer className="py-6 px-4 md:px-8 border-t-[0.5px] border-gray-200 dark:border-gray-800 text-center w-full ">
      <div className="flex flex-col items-center space-y-4">
        

        {/* Copyright Text */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Smon Kidane. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
