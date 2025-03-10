import React from 'react';

interface PackageManager {
  name: string;
  description: string;
  installCommand: string;
  verifyCommand: string;
  website: string;
}

const packageManagers: PackageManager[] = [
  {
    name: 'Node Version Manager (nvm)',
    description: 'Manage multiple Node.js versions on your system',
    installCommand: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash',
    verifyCommand: 'nvm --version',
    website: 'https://github.com/nvm-sh/nvm'
  },
  {
    name: 'Node Package Manager (npm)',
    description: 'Default package manager for Node.js',
    installCommand: 'comes with Node.js installation',
    verifyCommand: 'npm --version',
    website: 'https://www.npmjs.com/'
  },
  {
    name: 'Yarn',
    description: 'Fast, reliable, and secure dependency management',
    installCommand: 'npm install -g yarn',
    verifyCommand: 'yarn --version',
    website: 'https://yarnpkg.com/'
  }
];

export default function PackageManagers() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Package Managers Setup Guide</h1>
      <div className="grid gap-6">
        {packageManagers.map((manager) => (
          <div key={manager.name} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{manager.name}</h2>
            <p className="text-gray-600 mb-4">{manager.description}</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Installation</h3>
                <code className="bg-gray-100 p-2 rounded block">{manager.installCommand}</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verify Installation</h3>
                <code className="bg-gray-100 p-2 rounded block">{manager.verifyCommand}</code>
              </div>
              <a
                href={manager.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Official Documentation →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}