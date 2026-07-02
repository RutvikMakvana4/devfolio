import React from 'react';

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-neutral-900">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-light text-white">404</h1>
        <p className="text-lg text-neutral-300">Page not found</p>
        <p className="text-sm text-neutral-500">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block mt-6 text-sm transition-colors text-neutral-400 hover:text-white">
          Return home
        </a>
      </div>
    </div>
  );
}