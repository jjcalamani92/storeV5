import { FC } from 'react';
interface Main {
  children: React.ReactNode;
}

export const Main: FC<Main> = ({ children }) => {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-10">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          {children}
        </div>
      </div>
    </main>
  )
}